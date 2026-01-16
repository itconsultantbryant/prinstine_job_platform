import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/prisma/client'

// GET - Get company profile
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const profile = await prisma.companyProfile.findUnique({
      where: { userId: session.user.id },
    })

    return NextResponse.json(profile)
  } catch (error: any) {
    console.error('Error fetching company profile:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST - Create or update company profile
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || session.user.userType !== 'COMPANY') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const {
      companyName,
      registrationNumber,
      phone,
      email,
      website,
      logo,
      description,
      industry,
      location,
      yearEstablished,
      employeeCount,
      services,
    } = body

    if (!companyName) {
      return NextResponse.json(
        { error: 'Company name is required' },
        { status: 400 }
      )
    }

    const profile = await prisma.companyProfile.upsert({
      where: { userId: session.user.id },
      update: {
        companyName,
        registrationNumber,
        phone,
        email,
        website,
        logo,
        description,
        industry,
        location,
        yearEstablished: yearEstablished ? parseInt(yearEstablished) : null,
        employeeCount,
        services,
      },
      create: {
        userId: session.user.id,
        companyName,
        registrationNumber,
        phone,
        email,
        website,
        logo,
        description,
        industry,
        location,
        yearEstablished: yearEstablished ? parseInt(yearEstablished) : null,
        employeeCount,
        services,
      },
    })

    return NextResponse.json(profile, { status: 201 })
  } catch (error: any) {
    console.error('Error creating/updating company profile:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

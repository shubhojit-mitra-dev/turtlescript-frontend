import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    const phone = formData.get('phone')
    const position = formData.get('position')
    const idProof = formData.get('idProof')
    const resume = formData.get('resume')

    // Log the received data
    console.log('Mentor Form Data:', {
      phone,
      position,
      idProof: idProof instanceof File ? {
        name: idProof.name,
        type: idProof.type,
        size: idProof.size
      } : null,
      resume: resume instanceof File ? {
        name: resume.name,
        type: resume.type,
        size: resume.size
      } : null
    })

    return NextResponse.json({
      success: true,
      message: 'Mentor application received successfully'
    })
  } catch (error) {
    console.error('Error processing form:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to process application' },
      { status: 500 }
    )
  }
}

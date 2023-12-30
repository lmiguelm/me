import { revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'

type WebhookPayload = {
  secret: string
}

export async function POST(request: Request) {
  const req = await request.json()
  const { secret } = req as WebhookPayload

  if (secret !== process.env.PRISMIC_SECRET_WEBHOOK) {
    return new NextResponse(null, {
      statusText: 'Invalid webhook secret key',
      status: 400,
    })
  }

  revalidateTag('prismic')

  return NextResponse.json({ revalidated: true, now: Date.now() })
}

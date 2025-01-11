import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function ThankYouPage() {
  return (
    <div className="text-center space-y-4">
      <h2 className="text-2xl font-bold">Thank you for submitting your request.</h2>
      <p>Our team will contact you soon.</p>
      <p>For further assistance, call 8932478327 or email us at anhiudah@gmail.com.</p>
      <Link href="/">
        <Button>Go to Homepage</Button>
      </Link>
    </div>
  )
}


import SignIn from '@/components/auth/SignIn'
import Link from 'next/link'

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <SignIn />
      <p className="mt-4 text-sm text-gray-600">
        Don't have an account?{' '}
        <Link href="/signup" className="text-blue-600 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  )
} 
import SignUp from '@/components/auth/SignUp'
import Link from 'next/link'

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <SignUp />
      <p className="mt-4 text-sm text-gray-600">
        Already have an account?{' '}
        <Link href="/signin" className="text-blue-600 hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  )
} 
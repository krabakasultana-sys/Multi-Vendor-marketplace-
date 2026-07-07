import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

import PageHeader from '../components/PageHeader'
import PageBreadcrumb from '../components/PageBreadcrumb'
import Footer from '../components/Footer'
import { apiRequest } from '../services/api'

function ForgetPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    setError('')
    setSuccess('')

    if (!email) {
      setError('Email address is required.')
      return
    }

    try {
      setLoading(true)

      const data = await apiRequest('/api/auth/forgot-password', {
        method: 'POST',
        body: JSON.stringify({
          email,
        }),
      })

      localStorage.setItem('pendingResetEmail', email)

      if (data.resetCodeForDemo) {
        localStorage.setItem('resetCodeForDemo', data.resetCodeForDemo)
      }

      setSuccess(data.message || 'Password reset code sent successfully.')

      setTimeout(() => {
        window.location.href = '/reset-password'
      }, 1000)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <PageHeader />

      <PageBreadcrumb
        items={[
          { label: 'User Account' },
          { label: 'Sign In', href: '/sign-in' },
          { label: 'Forget Password' },
        ]}
      />

      <main className="flex min-h-[560px] items-center justify-center bg-white px-4 py-10 sm:min-h-[650px] sm:px-6 sm:py-14 lg:py-20">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[424px] border border-[#e4e7e9] bg-white p-5 shadow-xl sm:p-8"
        >
          <h1 className="text-center text-[22px] font-semibold text-[#191c1f] sm:text-[24px]">
            Forget Password
          </h1>

          <p className="mx-auto mt-3 w-full max-w-[320px] text-center text-[14px] leading-[22px] text-[#5f6c72] sm:text-[15px]">
            Enter the email address linked to your Clicon account. We will send
            you a verification code to reset your password.
          </p>

          {error && (
            <div className="mt-[18px] border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-600">
              {error}
            </div>
          )}

          {success && (
            <div className="mt-[18px] border border-green-200 bg-green-50 px-4 py-3 text-[14px] text-green-700">
              {success}
            </div>
          )}

          <label
            htmlFor="forgot-email"
            className="mt-7 block text-[14px] text-[#191c1f]"
          >
            Email Address
          </label>

          <input
            id="forgot-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-2 h-12 w-full border border-[#e4e7e9] px-4 text-[14px] outline-none focus:border-[#fa8232]"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-6 flex h-12 w-full items-center justify-center gap-2 bg-[#fa8232] px-4 text-[14px] font-bold uppercase text-white disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? 'Sending Code...' : 'Send Code'}
            <ArrowRight size={18} />
          </button>

          <p className="mt-6 text-[14px] leading-6 text-[#5f6c72] sm:text-[15px]">
            Already have an account?{' '}
            <a href="/sign-in" className="text-[#2da5f3]">
              Sign In
            </a>
          </p>

          <p className="mt-2 text-[14px] leading-6 text-[#5f6c72] sm:text-[15px]">
            Don&apos;t have an account?{' '}
            <a href="/sign-up" className="text-[#2da5f3]">
              Sign Up
            </a>
          </p>

          <div className="my-6 h-px bg-[#e4e7e9]" />

          <p className="text-[14px] leading-[22px] text-[#5f6c72]">
            Need more help? Contact{' '}
            <a href="/customer-support" className="text-[#fa8232]">
              Customer Support
            </a>{' '}
            to recover access to your account.
          </p>
        </form>
      </main>

      <Footer />
    </>
  )
}

export default ForgetPasswordPage
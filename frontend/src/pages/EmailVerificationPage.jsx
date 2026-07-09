import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'

import PageHeader from '../components/PageHeader'
import PageBreadcrumb from '../components/PageBreadcrumb'
import Footer from '../components/Footer'
import { apiRequest } from '../services/api'

function EmailVerificationPage() {
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [demoCode, setDemoCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    const savedEmail = localStorage.getItem('pendingVerificationEmail')
    const savedCode = localStorage.getItem('verificationCodeForDemo')

    if (savedEmail) {
      setEmail(savedEmail)
    }

    if (savedCode) {
      setDemoCode(savedCode)
    }
  }, [])

  async function handleVerify(event) {
    event.preventDefault()

    setError('')
    setSuccess('')

    if (!email || !code) {
      setError('Email and verification code are required.')
      return
    }

    try {
      setLoading(true)

      const data = await apiRequest('/api/auth/verify-email', {
        method: 'POST',
        body: JSON.stringify({
          email,
          code,
        }),
      })

      localStorage.removeItem('pendingVerificationEmail')
      localStorage.removeItem('verificationCodeForDemo')

      setSuccess(data.message || 'Email verified successfully.')

      setTimeout(() => {
        window.location.href = '/sign-in'
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
          { label: 'Sign Up', href: '/sign-up' },
          { label: 'Email Verification' },
        ]}
      />

      <main className="flex min-h-[520px] items-center justify-center bg-white px-4 py-10 sm:min-h-[560px] sm:px-6 sm:py-14 lg:py-20">
        <form
          onSubmit={handleVerify}
          className="w-full max-w-[424px] border border-[#e4e7e9] bg-white p-5 shadow-xl sm:p-8"
        >
          <h1 className="text-center text-[22px] font-semibold text-[#191c1f] sm:text-[24px]">
            Verify Your Email Address
          </h1>

          <p className="mx-auto mt-3 w-full max-w-[320px] text-center text-[14px] leading-[22px] text-[#5f6c72] sm:text-[15px]">
            We have sent a verification code to your email address. Enter the
            code below to verify your account.
          </p>

          {demoCode && (
            <div className="mt-[18px] border border-[#fa8232] bg-[#fff3eb] px-4 py-3 text-center text-[14px] text-[#191c1f]">
              Demo verification code:{' '}
              <span className="font-bold text-[#fa8232]">
                {demoCode}
              </span>
            </div>
          )}

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
            htmlFor="verification-email"
            className="mt-6 block text-[14px] text-[#191c1f]"
          >
            Email Address
          </label>

          <input
            id="verification-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-2 h-12 w-full border border-[#e4e7e9] px-4 text-[14px] outline-none focus:border-[#fa8232]"
          />

          <div className="mt-[18px] flex flex-wrap items-center justify-between gap-2">
            <label
              htmlFor="verification-code"
              className="text-[14px] text-[#191c1f]"
            >
              Verification Code
            </label>

            <button
              type="button"
              className="text-[14px] text-[#2da5f3]"
            >
              Resend Code
            </button>
          </div>

          <input
            id="verification-code"
            type="text"
            value={code}
            onChange={(event) => setCode(event.target.value)}
            className="mt-2 h-12 w-full border border-[#e4e7e9] px-4 text-[14px] outline-none focus:border-[#fa8232]"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-6 flex h-12 w-full items-center justify-center gap-2 bg-[#fa8232] px-4 text-[14px] font-bold uppercase text-white disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? 'Verifying...' : 'Verify Me'}
            <ArrowRight size={18} />
          </button>
        </form>
      </main>

      <Footer />
    </>
  )
}

export default EmailVerificationPage
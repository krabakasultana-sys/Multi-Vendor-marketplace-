import { useEffect, useState } from 'react'
import { ArrowRight, Eye } from 'lucide-react'

import PageHeader from '../components/PageHeader'
import PageBreadcrumb from '../components/PageBreadcrumb'
import Footer from '../components/Footer'
import { apiRequest } from '../services/api'

function ResetPasswordPage() {
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [demoCode, setDemoCode] = useState('')

  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    const savedEmail = localStorage.getItem('pendingResetEmail')
    const savedCode = localStorage.getItem('resetCodeForDemo')

    if (savedEmail) {
      setEmail(savedEmail)
    }

    if (savedCode) {
      setDemoCode(savedCode)
    }
  }, [])

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    setError('')
    setSuccess('')

    if (!email || !code || !formData.password) {
      setError('Email, reset code, and new password are required.')
      return
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Password and confirm password do not match.')
      return
    }

    try {
      setLoading(true)

      const data = await apiRequest('/api/auth/reset-password', {
        method: 'POST',
        body: JSON.stringify({
          email,
          code,
          newPassword: formData.password,
        }),
      })

      localStorage.removeItem('pendingResetEmail')
      localStorage.removeItem('resetCodeForDemo')

      setSuccess(data.message || 'Password reset successfully.')

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
          { label: 'User Account' },
          { label: 'Sign In', href: '/sign-in' },
          { label: 'Forget Password', href: '/forget-password' },
          { label: 'Reset Password' },
        ]}
      />

      <main className="flex min-h-[620px] items-center justify-center bg-white px-4 py-10 sm:min-h-[680px] sm:px-6 sm:py-14 lg:py-20">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[424px] border border-[#e4e7e9] bg-white p-5 shadow-xl sm:p-8"
        >
          <h1 className="text-center text-[22px] font-semibold text-[#191c1f] sm:text-[24px]">
            Reset Password
          </h1>

          <p className="mx-auto mt-3 w-full max-w-[320px] text-center text-[14px] leading-[22px] text-[#5f6c72] sm:text-[15px]">
            Create a new password for your account. Use at least six characters
            for better security.
          </p>

          {demoCode && (
            <div className="mt-[18px] border border-[#fa8232] bg-[#fff3eb] px-4 py-3 text-center text-[14px] text-[#191c1f]">
              Demo reset code:{' '}
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
            htmlFor="reset-email"
            className="mt-6 block text-[14px] text-[#191c1f]"
          >
            Email Address
          </label>

          <input
            id="reset-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-2 h-12 w-full border border-[#e4e7e9] px-4 text-[14px] outline-none focus:border-[#fa8232]"
          />

          <label
            htmlFor="reset-code"
            className="mt-[18px] block text-[14px] text-[#191c1f]"
          >
            Reset Code
          </label>

          <input
            id="reset-code"
            type="text"
            value={code}
            onChange={(event) => setCode(event.target.value)}
            className="mt-2 h-12 w-full border border-[#e4e7e9] px-4 text-[14px] outline-none focus:border-[#fa8232]"
          />

          <label
            htmlFor="reset-password"
            className="mt-[18px] block text-[14px] text-[#191c1f]"
          >
            Password
          </label>

          <div className="relative mt-2">
            <input
              id="reset-password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="6+ characters"
              className="h-12 w-full border border-[#e4e7e9] px-4 pr-12 text-[14px] outline-none focus:border-[#fa8232]"
            />

            <Eye
              size={20}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
            />
          </div>

          <label
            htmlFor="reset-confirm-password"
            className="mt-[18px] block text-[14px] text-[#191c1f]"
          >
            Confirm Password
          </label>

          <div className="relative mt-2">
            <input
              id="reset-confirm-password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="h-12 w-full border border-[#e4e7e9] px-4 pr-12 text-[14px] outline-none focus:border-[#fa8232]"
            />

            <Eye
              size={20}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 flex h-12 w-full items-center justify-center gap-2 bg-[#fa8232] px-4 text-[14px] font-bold uppercase text-white disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? 'Resetting...' : 'Reset Password'}
            <ArrowRight size={18} />
          </button>
        </form>
      </main>

      <Footer />
    </>
  )
}

export default ResetPasswordPage
import { useState } from 'react'
import { ArrowRight, Check, Eye } from 'lucide-react'

import PageHeader from '../components/PageHeader'
import PageBreadcrumb from '../components/PageBreadcrumb'
import Footer from '../components/Footer'
import { apiRequest } from '../services/api'

function SignUpPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

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

    if (!formData.name || !formData.email || !formData.password) {
      setError('Name, email, and password are required.')
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

      const data = await apiRequest('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      })

      localStorage.setItem('pendingVerificationEmail', formData.email)

      if (data.verificationCodeForDemo) {
        localStorage.setItem(
          'verificationCodeForDemo',
          data.verificationCodeForDemo
        )
      }

      setSuccess(data.message || 'Account created successfully.')

      setTimeout(() => {
        window.location.href = '/email-verification'
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
          { label: 'Sign Up' },
        ]}
      />

      <main className="flex min-h-[680px] items-center justify-center bg-white px-4 py-10 sm:min-h-[760px] sm:px-6 sm:py-14 lg:py-20">
        <div className="w-full max-w-[424px] border border-[#e4e7e9] bg-white shadow-xl">
          <div className="grid grid-cols-2 border-b border-[#e4e7e9]">
            <a
              href="/sign-in"
              className="py-4 text-center text-[18px] font-semibold text-[#77878f] sm:py-5 sm:text-[20px]"
            >
              Sign In
            </a>

            <div className="border-b-2 border-[#fa8232] py-4 text-center text-[18px] font-semibold text-[#191c1f] sm:py-5 sm:text-[20px]">
              Sign Up
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-5 sm:p-8">
            {error && (
              <div className="mb-4 border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-600">
                {error}
              </div>
            )}

            {success && (
              <div className="mb-4 border border-green-200 bg-green-50 px-4 py-3 text-[14px] text-green-700">
                {success}
              </div>
            )}

            <label
              htmlFor="signup-name"
              className="text-[14px] text-[#191c1f]"
            >
              Name
            </label>

            <input
              id="signup-name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 h-12 w-full border border-[#e4e7e9] px-4 text-[14px] outline-none focus:border-[#fa8232]"
            />

            <label
              htmlFor="signup-email"
              className="mt-[18px] block text-[14px] text-[#191c1f]"
            >
              Email Address
            </label>

            <input
              id="signup-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 h-12 w-full border border-[#e4e7e9] px-4 text-[14px] outline-none focus:border-[#fa8232]"
            />

            <label
              htmlFor="signup-password"
              className="mt-[18px] block text-[14px] text-[#191c1f]"
            >
              Password
            </label>

            <div className="relative mt-2">
              <input
                id="signup-password"
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
              htmlFor="signup-confirm-password"
              className="mt-[18px] block text-[14px] text-[#191c1f]"
            >
              Confirm Password
            </label>

            <div className="relative mt-2">
              <input
                id="signup-confirm-password"
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

            <div className="mt-[18px] flex items-start gap-2">
              <span className="grid h-5 w-5 shrink-0 place-items-center bg-[#fa8232] text-white">
                <Check size={14} />
              </span>

              <p className="text-[14px] leading-5 text-[#475156]">
                Are you agree to Clicon{' '}
                <span className="text-[#2da5f3]">
                  Terms of Condition
                </span>{' '}
                and{' '}
                <span className="text-[#2da5f3]">
                  Privacy Policy.
                </span>
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 flex h-12 w-full items-center justify-center gap-2 bg-[#fa8232] px-4 text-[14px] font-bold uppercase text-white disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? 'Creating Account...' : 'Sign Up'}
              <ArrowRight size={18} />
            </button>

            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-[#e4e7e9]" />
              <span className="text-[14px] text-[#77878f]">or</span>
              <div className="h-px flex-1 bg-[#e4e7e9]" />
            </div>

            <button
              type="button"
              className="h-11 w-full border border-[#e4e7e9] px-4 text-[14px] text-[#475156]"
            >
              Sign up with Google
            </button>

            <button
              type="button"
              className="mt-3 h-11 w-full border border-[#e4e7e9] px-4 text-[14px] text-[#475156]"
            >
              Sign up with Apple
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default SignUpPage
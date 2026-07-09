import { useState } from 'react'
import { ArrowRight, Eye } from 'lucide-react'

import PageHeader from '../components/PageHeader'
import PageBreadcrumb from '../components/PageBreadcrumb'
import Footer from '../components/Footer'
import { apiRequest } from '../services/api'

function SignInPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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

    if (!formData.email || !formData.password) {
      setError('Email and password are required.')
      return
    }

    try {
      setLoading(true)

      const data = await apiRequest('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      })

      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))

      setSuccess(data.message || 'Login successful.')

      setTimeout(() => {
        window.location.href = '/'
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
          { label: 'Sign In' },
        ]}
      />

      <main className="flex min-h-[560px] items-center justify-center bg-white px-4 py-10 sm:min-h-[650px] sm:px-6 sm:py-14 lg:py-20">
        <div className="w-full max-w-[424px] border border-[#e4e7e9] bg-white shadow-xl">
          <div className="grid grid-cols-2 border-b border-[#e4e7e9]">
            <div className="border-b-2 border-[#fa8232] py-4 text-center text-[18px] font-semibold text-[#191c1f] sm:py-5 sm:text-[20px]">
              Sign In
            </div>

            <a
              href="/sign-up"
              className="py-4 text-center text-[18px] font-semibold text-[#77878f] sm:py-5 sm:text-[20px]"
            >
              Sign Up
            </a>
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
              htmlFor="signin-email"
              className="text-[14px] text-[#191c1f]"
            >
              Email Address
            </label>

            <input
              id="signin-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 h-12 w-full border border-[#e4e7e9] px-4 text-[14px] outline-none focus:border-[#fa8232]"
            />

            <div className="mt-[18px] flex flex-wrap items-center justify-between gap-2">
              <label
                htmlFor="signin-password"
                className="text-[14px] text-[#191c1f]"
              >
                Password
              </label>

              <a
                href="/forget-password"
                className="text-[14px] text-[#2da5f3]"
              >
                Forget Password
              </a>
            </div>

            <div className="relative mt-2">
              <input
                id="signin-password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="h-12 w-full border border-[#e4e7e9] px-4 pr-12 text-[14px] outline-none focus:border-[#fa8232]"
              />

              <Eye
                size={20}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#191c1f]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 flex h-12 w-full items-center justify-center gap-2 bg-[#fa8232] px-4 text-[14px] font-bold uppercase text-white disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? 'Signing In...' : 'Sign In'}
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
              Login with Google
            </button>

            <button
              type="button"
              className="mt-3 h-11 w-full border border-[#e4e7e9] px-4 text-[14px] text-[#475156]"
            >
              Login with Apple
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default SignInPage
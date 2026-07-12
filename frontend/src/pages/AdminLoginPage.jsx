import { useState } from 'react'
import { ArrowRight, Lock } from 'lucide-react'

import PageHeader from '../components/PageHeader'
import PageBreadcrumb from '../components/PageBreadcrumb'
import Footer from '../components/Footer'
import { apiRequest } from '../services/api'

// A dedicated login screen for admins only — separate from the customer
// Sign In page. It uses the exact same /api/auth/login endpoint (there's
// only one User collection), but rejects anyone whose account isn't role
// "admin", so a regular customer account can't get in here.
function AdminLoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')

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

      if (data.user.role !== 'admin') {
        setError('This account is not an admin. Use the regular Sign In page instead.')
        setLoading(false)
        return
      }

      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))

      window.location.href = '/admin'
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  return (
    <>
      <PageHeader />

      <PageBreadcrumb items={[{ label: 'Admin' }, { label: 'Login' }]} />

      <main className="flex min-h-[560px] items-center justify-center bg-white px-4 py-10 sm:min-h-[650px] sm:px-6 sm:py-14 lg:py-20">
        <div className="w-full max-w-[424px] border border-[#e4e7e9] bg-white shadow-xl">
          <div className="flex items-center justify-center gap-2 border-b border-[#e4e7e9] py-4 text-[18px] font-semibold text-[#191c1f] sm:py-5 sm:text-[20px]">
            <Lock size={20} className="text-[#fa8232]" />
            Admin Login
          </div>

          <form onSubmit={handleSubmit} className="p-5 sm:p-8">
            {error && (
              <div className="mb-4 border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-600">
                {error}
              </div>
            )}

            <label htmlFor="admin-email" className="text-[14px] text-[#191c1f]">
              Admin Email
            </label>
            <input
              id="admin-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 h-12 w-full border border-[#e4e7e9] px-4 text-[14px] outline-none focus:border-[#fa8232]"
            />

            <label htmlFor="admin-password" className="mt-[18px] block text-[14px] text-[#191c1f]">
              Password
            </label>
            <input
              id="admin-password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-2 h-12 w-full border border-[#e4e7e9] px-4 text-[14px] outline-none focus:border-[#fa8232]"
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-6 flex h-12 w-full items-center justify-center gap-2 bg-[#fa8232] px-4 text-[14px] font-bold uppercase text-white disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? 'Signing In...' : 'Admin Sign In'}
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default AdminLoginPage

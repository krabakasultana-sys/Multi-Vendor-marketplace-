import { ArrowRight, Eye } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import PageBreadcrumb from '../components/PageBreadcrumb'
import Footer from '../components/Footer'

function ResetPasswordPage() {
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

      <main className="flex min-h-[560px] items-center justify-center bg-white py-[80px]">
        <div className="w-[424px] border border-[#e4e7e9] bg-white p-[32px] shadow-xl">
          <h1 className="text-center text-[24px] font-semibold text-[#191c1f]">
            Reset Password
          </h1>

          <p className="mx-auto mt-[12px] w-[320px] text-center text-[15px] leading-[22px] text-[#5f6c72]">
            Create a new password for your account. Use at least eight
            characters for better security.
          </p>

          <label className="mt-[28px] block text-[14px]">Password</label>
          <div className="relative mt-[8px]">
            <input
              type="password"
              placeholder="8+ characters"
              className="h-[48px] w-full border border-[#e4e7e9] px-4 pr-12 outline-none"
            />
            <Eye
              size={20}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            />
          </div>

          <label className="mt-[18px] block text-[14px]">
            Confirm Password
          </label>
          <div className="relative mt-[8px]">
            <input
              type="password"
              className="h-[48px] w-full border border-[#e4e7e9] px-4 pr-12 outline-none"
            />
            <Eye
              size={20}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            />
          </div>

          <a
            href="/sign-in"
            className="mt-[24px] flex h-[48px] w-full items-center justify-center gap-2 bg-[#fa8232] text-[14px] font-bold uppercase text-white"
          >
            Reset Password <ArrowRight size={18} />
          </a>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default ResetPasswordPage
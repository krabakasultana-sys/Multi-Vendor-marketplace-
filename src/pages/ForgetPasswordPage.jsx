import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import PageBreadcrumb from '../components/PageBreadcrumb'
import Footer from '../components/Footer'

function ForgetPasswordPage() {
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

      <main className="flex min-h-[650px] items-center justify-center bg-white py-[80px]">
        <div className="w-[424px] border border-[#e4e7e9] bg-white p-[32px] shadow-xl">
          <h1 className="text-center text-[24px] font-semibold text-[#191c1f]">
            Forget Password
          </h1>

          <p className="mx-auto mt-[12px] w-[320px] text-center text-[15px] leading-[22px] text-[#5f6c72]">
            Enter the email address linked to your Clicon account. We will send
            you a verification code to reset your password.
          </p>

          <label className="mt-[28px] block text-[14px] text-[#191c1f]">
            Email Address
          </label>

          <input className="mt-[8px] h-[48px] w-full border border-[#e4e7e9] px-4 outline-none" />

          <a
            href="/email-verification"
            className="mt-[24px] flex h-[48px] w-full items-center justify-center gap-2 bg-[#fa8232] text-[14px] font-bold uppercase text-white"
          >
            Send Code <ArrowRight size={18} />
          </a>

          <p className="mt-[24px] text-[15px] text-[#5f6c72]">
            Already have an account?{' '}
            <a href="/sign-in" className="text-[#2da5f3]">
              Sign In
            </a>
          </p>

          <p className="mt-[8px] text-[15px] text-[#5f6c72]">
            Don&apos;t have an account?{' '}
            <a href="/sign-up" className="text-[#2da5f3]">
              Sign Up
            </a>
          </p>

          <div className="my-[24px] h-px bg-[#e4e7e9]" />

          <p className="text-[14px] leading-[22px] text-[#5f6c72]">
            Need more help? Contact{' '}
            <a href="/customer-support" className="text-[#fa8232]">
              Customer Support
            </a>{' '}
            to recover access to your account.
          </p>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default ForgetPasswordPage
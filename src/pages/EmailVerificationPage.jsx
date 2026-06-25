import { ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import PageBreadcrumb from '../components/PageBreadcrumb'
import Footer from '../components/Footer'

function EmailVerificationPage() {
  return (
    <>
      <PageHeader />

      <PageBreadcrumb
        items={[
          { label: 'Sign Up', href: '/sign-up' },
          { label: 'Email Verification' },
        ]}
      />

      <main className="flex min-h-[560px] items-center justify-center bg-white py-[80px]">
        <div className="w-[424px] border border-[#e4e7e9] bg-white p-[32px] shadow-xl">
          <h1 className="text-center text-[24px] font-semibold text-[#191c1f]">
            Verify Your Email Address
          </h1>

          <p className="mx-auto mt-[12px] w-[320px] text-center text-[15px] leading-[22px] text-[#5f6c72]">
            We have sent a verification code to your email address. Enter the
            code below to verify your account.
          </p>

          <div className="mt-[28px] flex items-center justify-between">
            <label className="text-[14px] text-[#191c1f]">
              Verification Code
            </label>

            <button type="button" className="text-[14px] text-[#2da5f3]">
              Resend Code
            </button>
          </div>

          <input
            type="text"
            className="mt-[8px] h-[48px] w-full border border-[#e4e7e9] px-4 outline-none"
          />

          <a
            href="/reset-password"
            className="mt-[24px] flex h-[48px] w-full items-center justify-center gap-2 bg-[#fa8232] text-[14px] font-bold uppercase text-white"
          >
            Verify Me <ArrowRight size={18} />
          </a>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default EmailVerificationPage
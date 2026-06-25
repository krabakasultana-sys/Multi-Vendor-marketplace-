import { ArrowRight, Check, Eye } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import PageBreadcrumb from '../components/PageBreadcrumb'
import Footer from '../components/Footer'

function SignUpPage() {
  return (
    <>
      <PageHeader />

      <PageBreadcrumb
        items={[
          { label: 'User Account' },
          { label: 'Sign Up' },
        ]}
      />

      <main className="flex min-h-[760px] items-center justify-center bg-white py-[80px]">
        <div className="w-[424px] border border-[#e4e7e9] bg-white shadow-xl">
          <div className="grid grid-cols-2 border-b border-[#e4e7e9]">
            <a
              href="/sign-in"
              className="py-[20px] text-center text-[20px] font-semibold text-[#77878f]"
            >
              Sign In
            </a>

            <div className="border-b-2 border-[#fa8232] py-[20px] text-center text-[20px] font-semibold text-[#191c1f]">
              Sign Up
            </div>
          </div>

          <div className="p-[32px]">
            <label className="text-[14px]">Name</label>
            <input className="mt-[8px] h-[48px] w-full border border-[#e4e7e9] px-4 outline-none" />

            <label className="mt-[18px] block text-[14px]">Email Address</label>
            <input className="mt-[8px] h-[48px] w-full border border-[#e4e7e9] px-4 outline-none" />

            <label className="mt-[18px] block text-[14px]">Password</label>
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

            <div className="mt-[18px] flex gap-2">
              <span className="grid h-[20px] w-[20px] place-items-center bg-[#fa8232] text-white">
                <Check size={14} />
              </span>

              <p className="text-[14px] leading-[20px] text-[#475156]">
                Are you agree to Clicon{' '}
                <span className="text-[#2da5f3]">Terms of Condition</span> and{' '}
                <span className="text-[#2da5f3]">Privacy Policy.</span>
              </p>
            </div>

            <button className="mt-[24px] flex h-[48px] w-full items-center justify-center gap-2 bg-[#fa8232] text-[14px] font-bold uppercase text-white">
              Sign Up <ArrowRight size={18} />
            </button>

            <div className="my-[24px] flex items-center gap-3">
              <div className="h-px flex-1 bg-[#e4e7e9]" />
              <span className="text-[14px] text-[#77878f]">or</span>
              <div className="h-px flex-1 bg-[#e4e7e9]" />
            </div>

            <button className="h-[44px] w-full border border-[#e4e7e9] text-[14px] text-[#475156]">
              Sign up with Google
            </button>

            <button className="mt-[12px] h-[44px] w-full border border-[#e4e7e9] text-[14px] text-[#475156]">
              Sign up with Apple
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default SignUpPage
import { ArrowRight, Eye } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import PageBreadcrumb from '../components/PageBreadcrumb'
import Footer from '../components/Footer'

function SignInPage() {
  return (
    <>
      <PageHeader />

      <PageBreadcrumb
        items={[
          { label: 'User Account' },
          { label: 'Sign In' },
        ]}
      />

      <main className="flex min-h-[650px] items-center justify-center bg-white py-[80px]">
        <div className="w-[424px] border border-[#e4e7e9] bg-white shadow-xl">
          <div className="grid grid-cols-2 border-b border-[#e4e7e9]">
            <div className="border-b-2 border-[#fa8232] py-[20px] text-center text-[20px] font-semibold text-[#191c1f]">
              Sign In
            </div>

            <a
              href="/sign-up"
              className="py-[20px] text-center text-[20px] font-semibold text-[#77878f]"
            >
              Sign Up
            </a>
          </div>

          <div className="p-[32px]">
            <label className="text-[14px] text-[#191c1f]">
              Email Address
            </label>
            <input className="mt-[8px] h-[48px] w-full border border-[#e4e7e9] px-4 outline-none" />

            <div className="mt-[18px] flex items-center justify-between">
              <label className="text-[14px] text-[#191c1f]">Password</label>

              <a href="/forget-password" className="text-[14px] text-[#2da5f3]">
                Forget Password
              </a>
            </div>

            <div className="relative mt-[8px]">
              <input
                type="password"
                className="h-[48px] w-full border border-[#e4e7e9] px-4 pr-12 outline-none"
              />
              <Eye
                size={20}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#191c1f]"
              />
            </div>

            <button className="mt-[24px] flex h-[48px] w-full items-center justify-center gap-2 bg-[#fa8232] text-[14px] font-bold uppercase text-white">
              Sign In <ArrowRight size={18} />
            </button>

            <div className="my-[24px] flex items-center gap-3">
              <div className="h-px flex-1 bg-[#e4e7e9]" />
              <span className="text-[14px] text-[#77878f]">or</span>
              <div className="h-px flex-1 bg-[#e4e7e9]" />
            </div>

            <button className="h-[44px] w-full border border-[#e4e7e9] text-[14px] text-[#475156]">
              Login with Google
            </button>

            <button className="mt-[12px] h-[44px] w-full border border-[#e4e7e9] text-[14px] text-[#475156]">
              Login with Apple
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default SignInPage
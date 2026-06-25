import { ArrowLeft, Home } from 'lucide-react'

import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'

function NotFoundPage() {
  return (
    <>
      <PageHeader />

      <main className="flex min-h-[680px] flex-col items-center justify-center bg-white text-center">
        <div className="grid h-[240px] w-[360px] place-items-center bg-[#fff3f3] text-[72px] font-bold text-[#ee5858]">
          ERROR
        </div>

        <h1 className="mt-[48px] text-[40px] font-semibold text-[#191c1f]">
          404, Page Not Found
        </h1>

        <p className="mt-[20px] w-[560px] text-[16px] leading-[26px] text-[#5f6c72]">
          Something went wrong. The page you are looking for may have been
          removed, renamed, or is temporarily unavailable.
        </p>

        <div className="mt-[32px] flex items-center gap-[16px]">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="flex h-[48px] items-center gap-2 bg-[#fa8232] px-[24px] text-[14px] font-bold uppercase text-white"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

          <a
            href="/"
            className="flex h-[48px] items-center gap-2 border border-[#ffe7d6] px-[24px] text-[14px] font-bold uppercase text-[#fa8232]"
          >
            <Home size={18} />
            Go To Home
          </a>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default NotFoundPage
import { ArrowLeft, Home } from 'lucide-react'

import PageHeader from '../components/PageHeader'
import Footer from '../components/Footer'

function NotFoundPage() {
  return (
    <>
      <PageHeader />

      <main className="flex min-h-[560px] flex-col items-center justify-center bg-white px-4 py-12 text-center sm:min-h-[680px] sm:px-6 sm:py-16">
        <div className="grid h-[160px] w-full max-w-[360px] place-items-center bg-[#fff3f3] text-[48px] font-bold text-[#ee5858] sm:h-[240px] sm:text-[72px]">
          ERROR
        </div>

        <h1 className="mt-8 text-[28px] font-semibold leading-tight text-[#191c1f] sm:mt-12 sm:text-[40px]">
          404, Page Not Found
        </h1>

        <p className="mt-4 w-full max-w-[560px] text-[14px] leading-6 text-[#5f6c72] sm:mt-5 sm:text-[16px] sm:leading-[26px]">
          Something went wrong. The page you are looking for may have been
          removed, renamed, or is temporarily unavailable.
        </p>

        <div className="mt-8 flex w-full max-w-[420px] flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="flex h-12 items-center justify-center gap-2 bg-[#fa8232] px-6 text-[14px] font-bold uppercase text-white"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

          <a
            href="/"
            className="flex h-12 items-center justify-center gap-2 border border-[#ffe7d6] px-6 text-[14px] font-bold uppercase text-[#fa8232]"
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
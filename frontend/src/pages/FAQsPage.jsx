import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'

import PageHeader from '../components/PageHeader'
import PageBreadcrumb from '../components/PageBreadcrumb'
import Container from '../components/Container'
import Footer from '../components/Footer'
import { apiRequest } from '../services/api'

function FAQsPage() {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    setError('')
    setSuccess('')

    if (!formData.email || !formData.subject || !formData.message) {
      setError('Email, subject, and message are required.')
      return
    }

    try {
      setLoading(true)

      const data = await apiRequest('/api/messages', {
        method: 'POST',
        body: JSON.stringify({
          name: 'FAQ Visitor',
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      setSuccess(data.message || 'Support message sent successfully.')

      setFormData({
        email: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      setError(error.message || 'Unable to send message.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <PageHeader active="faqs" />

      <PageBreadcrumb
        items={[
          { label: 'Pages' },
          { label: 'FAQs' },
        ]}
      />

      <main className="bg-white py-10 sm:py-14 lg:py-[80px]">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,760px)_minmax(320px,424px)] lg:items-start lg:gap-12 xl:gap-[120px]">
          <section className="min-w-0">
            <h1 className="text-[26px] font-semibold leading-tight text-[#191c1f] sm:text-[32px]">
              Frequently Asked Questions
            </h1>

            <div className="mt-7 flex flex-col gap-4 sm:mt-[40px]">
              <div className="flex min-h-[64px] items-center justify-between gap-4 border border-[#e4e7e9] px-4 py-4 sm:px-[24px]">
                <h3 className="pr-2 text-[16px] font-medium leading-6 text-[#191c1f] sm:text-[18px]">
                  How can I track my order?
                </h3>

                <Plus
                  size={22}
                  className="shrink-0 text-[#5f6c72]"
                />
              </div>

              <div className="overflow-hidden border border-[#fa8232]">
                <div className="flex min-h-[64px] items-center justify-between gap-4 bg-[#fa8232] px-4 py-4 text-white sm:px-[24px]">
                  <h3 className="pr-2 text-[16px] font-medium leading-6 sm:text-[18px]">
                    What is Clicon&apos;s return policy?
                  </h3>

                  <Minus size={22} className="shrink-0" />
                </div>

                <div className="p-4 text-[14px] leading-6 text-[#5f6c72] sm:p-[24px] sm:text-[15px] sm:leading-[24px]">
                  <p>
                    You can return most products within the allowed return
                    period if the item is unused, undamaged, and includes the
                    original packaging. Some products may not be eligible for
                    return because of hygiene, software, or warranty rules.
                  </p>

                  <ul className="mt-4 list-disc space-y-2 pl-5 sm:mt-[16px] sm:space-y-[8px] sm:pl-[20px]">
                    <li>Keep the original invoice or order confirmation.</li>

                    <li>
                      Return the product with all accessories and packaging.
                    </li>

                    <li>
                      Refunds are processed after the product is checked.
                    </li>

                    <li>
                      Delivery charges may not be refundable in some cases.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex min-h-[64px] items-center justify-between gap-4 border border-[#e4e7e9] px-4 py-4 sm:px-[24px]">
                <h3 className="pr-2 text-[16px] font-medium leading-6 text-[#191c1f] sm:text-[18px]">
                  How long does delivery usually take?
                </h3>

                <Plus
                  size={22}
                  className="shrink-0 text-[#5f6c72]"
                />
              </div>

              <div className="flex min-h-[64px] items-center justify-between gap-4 border border-[#e4e7e9] px-4 py-4 sm:px-[24px]">
                <h3 className="pr-2 text-[16px] font-medium leading-6 text-[#191c1f] sm:text-[18px]">
                  Can I cancel my order after placing it?
                </h3>

                <Plus
                  size={22}
                  className="shrink-0 text-[#5f6c72]"
                />
              </div>

              <div className="flex min-h-[64px] items-center justify-between gap-4 border border-[#e4e7e9] px-4 py-4 sm:px-[24px]">
                <h3 className="pr-2 text-[16px] font-medium leading-6 text-[#191c1f] sm:text-[18px]">
                  What payment methods are available?
                </h3>

                <Plus
                  size={22}
                  className="shrink-0 text-[#5f6c72]"
                />
              </div>
            </div>
          </section>

          <form
            onSubmit={handleSubmit}
            className="w-full bg-[#fbf4ce] p-5 sm:p-[32px] lg:self-start"
          >
            <h2 className="text-[20px] font-medium leading-7 text-[#191c1f]">
              Still need help? Contact support.
            </h2>

            <p className="mt-[12px] text-[14px] leading-[22px] text-[#475156] sm:text-[15px]">
              If you cannot find your answer, send us a message. Our support
              team will help you as soon as possible.
            </p>

            {error && (
              <div className="mt-5 border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-600">
                {error}
              </div>
            )}

            {success && (
              <div className="mt-5 border border-green-200 bg-green-50 px-4 py-3 text-[14px] text-green-700">
                {success}
              </div>
            )}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              className="mt-[24px] h-[48px] w-full border border-[#e4e7e9] bg-white px-4 text-[14px] outline-none"
            />

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="mt-[12px] h-[48px] w-full border border-[#e4e7e9] bg-white px-4 text-[14px] outline-none"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="mt-[12px] h-[110px] w-full resize-none border border-[#e4e7e9] bg-white p-4 text-[14px] outline-none sm:h-[88px]"
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-[20px] h-[48px] w-full bg-[#fa8232] px-[28px] text-[14px] font-bold uppercase text-white disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </Container>
      </main>

      <Footer />
    </>
  )
}

export default FAQsPage
import { useState } from 'react'
import {
  CreditCard,
  Headphones,
  Lock,
  MessageCircle,
  Package,
  ShoppingCart,
  Store,
  Truck,
  User,
} from 'lucide-react'

import PageHeader from '../components/PageHeader'
import PageBreadcrumb from '../components/PageBreadcrumb'
import Container from '../components/Container'
import Footer from '../components/Footer'
import { apiRequest } from '../services/api'

function CustomerSupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
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

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setError('Name, email, subject, and message are required.')
      return
    }

    try {
      setLoading(true)

      const data = await apiRequest('/api/messages', {
        method: 'POST',
        body: JSON.stringify(formData),
      })

      setSuccess(data.message || 'Support message sent successfully.')

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      setError(error.message || 'Unable to send support message.')
    } finally {
      setLoading(false)
    }
  }

  const supportOptions = [
    [Truck, 'Track Order'],
    [Lock, 'Reset Password'],
    [CreditCard, 'Payment Options'],
    [User, 'User Account'],
    [Package, 'Wishlist and Compare'],
    [ShoppingCart, 'Shipping and Billing'],
    [CreditCard, 'Shopping Cart and Wallet'],
    [Store, 'Sell on Clicon'],
  ]

  return (
    <>
      <PageHeader active="support" />

      <PageBreadcrumb items={[{ label: 'Customer Support' }]} />

      <main>
        <section className="overflow-hidden bg-white py-10 sm:py-12 lg:py-[44px]">
          <Container className="grid grid-cols-1 items-center gap-8 lg:min-h-[340px] lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:gap-12 xl:gap-[80px]">
            <div className="min-w-0">
              <span className="inline-block bg-[#efd33d] px-4 py-2 text-[12px] font-semibold uppercase text-[#191c1f] sm:text-[13px]">
                Help Center
              </span>

              <h1 className="mt-5 text-[30px] font-semibold leading-tight text-[#191c1f] sm:mt-6 sm:text-[36px] lg:text-[40px]">
                How can we help you?
              </h1>

              <div className="mt-6 flex w-full flex-col border border-[#e4e7e9] sm:mt-7 sm:h-16 sm:flex-row lg:max-w-[520px]">
                <input
                  type="search"
                  placeholder="Enter your question or keyword"
                  className="h-14 min-w-0 flex-1 px-4 text-[14px] outline-none sm:h-full sm:px-6 sm:text-[16px]"
                />

                <button
                  type="button"
                  className="h-12 bg-[#fa8232] px-6 text-[13px] font-bold uppercase text-white sm:h-full sm:w-[120px] sm:px-4 sm:text-[14px]"
                >
                  Search
                </button>
              </div>
            </div>

            <div className="relative min-h-[240px] sm:min-h-[300px] lg:h-[340px]">
              <img
                src="/images/support/support-agent.png"
                alt="Customer support agent"
                className="absolute bottom-[-20px] left-1/2 h-[300px] max-w-none -translate-x-1/2 object-contain sm:h-[380px] lg:bottom-[-10px] lg:left-auto lg:right-[-30px] lg:h-[430px] lg:w-[680px] lg:translate-x-0 xl:right-[20px]"
              />
            </div>
          </Container>
        </section>

        <section className="border-t border-[#e4e7e9] bg-white py-10 sm:py-14 lg:py-[72px]">
          <Container>
            <h2 className="text-center text-[26px] font-semibold leading-tight text-[#191c1f] sm:text-[30px] lg:text-[32px]">
              What can we assist you with today?
            </h2>

            <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
              {supportOptions.map(([Icon, title]) => (
                <div
                  key={title}
                  className="flex min-h-[72px] items-center gap-4 border border-[#ffd6bd] px-4 py-4 sm:px-5 lg:px-6"
                >
                  <Icon
                    size={24}
                    className="shrink-0 text-[#fa8232]"
                  />

                  <span className="text-[15px] font-medium leading-5 text-[#191c1f] sm:text-[16px]">
                    {title}
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white py-10 sm:py-14 lg:py-[72px]">
          <Container>
            <h2 className="text-center text-[22px] font-semibold text-[#191c1f] sm:text-[24px]">
              Popular Support Topics
            </h2>

            <div className="mt-7 grid grid-cols-1 gap-6 text-[14px] leading-6 text-[#475156] sm:mt-8 sm:text-[15px] md:grid-cols-3 md:gap-8">
              <ul className="list-disc space-y-3.5 pl-5">
                <li>How do I return my item?</li>

                <li className="text-[#fa8232]">
                  What is Clicon&apos;s return policy?
                </li>

                <li>How long does the refund process take?</li>
              </ul>

              <ul className="list-disc space-y-3.5 pl-5">
                <li>What are the delivery timelines?</li>
                <li>How can I use my campaign voucher?</li>
                <li>Can I change my delivery address?</li>
              </ul>

              <ul className="list-disc space-y-3.5 pl-5">
                <li>How can I cancel my Clicon order?</li>
                <li>How do I change my account password?</li>
                <li>How can I contact the support team?</li>
              </ul>
            </div>
          </Container>
        </section>

        <section className="bg-[#f2f4f5] py-10 sm:py-14 lg:py-[72px]">
          <Container>
            <p className="text-center text-[13px] font-semibold uppercase text-[#2da5f3] sm:text-[14px]">
              Contact Us
            </p>

            <h2 className="mt-3 text-center text-[26px] font-semibold leading-tight text-[#191c1f] sm:text-[30px] lg:text-[32px]">
              Don&apos;t find your answer?
              <br />
              Contact us directly.
            </h2>

            <div className="mx-auto mt-8 grid w-full max-w-[900px] grid-cols-1 gap-6 sm:mt-10 lg:grid-cols-2">
              <article className="flex flex-col gap-5 bg-white p-5 shadow-md sm:flex-row sm:gap-6 sm:p-8">
                <div className="grid h-16 w-16 shrink-0 place-items-center bg-[#eaf6fe] text-[#2da5f3] sm:h-[72px] sm:w-[72px]">
                  <Headphones size={32} />
                </div>

                <div className="min-w-0">
                  <h3 className="text-[18px] font-semibold text-[#191c1f]">
                    Call us now
                  </h3>

                  <p className="mt-2 text-[14px] leading-[22px] text-[#5f6c72]">
                    Our support team is available from 9:00 AM to 5:00 PM.
                  </p>

                  <a
                    href="tel:+12025550126"
                    className="mt-3 block break-words text-[20px] text-[#191c1f] sm:text-[24px]"
                  >
                    +1-202-555-0126
                  </a>

                  <a
                    href="tel:+12025550126"
                    className="mt-4 inline-flex min-h-11 items-center justify-center bg-[#2da5f3] px-6 text-[14px] font-bold uppercase text-white"
                  >
                    Call Now
                  </a>
                </div>
              </article>

              <article className="flex flex-col gap-5 bg-white p-5 shadow-md sm:flex-row sm:gap-6 sm:p-8">
                <div className="grid h-16 w-16 shrink-0 place-items-center bg-[#eaf7e9] text-[#2db224] sm:h-[72px] sm:w-[72px]">
                  <MessageCircle size={32} />
                </div>

                <div className="min-w-0">
                  <h3 className="text-[18px] font-semibold text-[#191c1f]">
                    Chat with us
                  </h3>

                  <p className="mt-2 text-[14px] leading-[22px] text-[#5f6c72]">
                    Send us a message and we will reply as soon as possible.
                  </p>

                  <a
                    href="mailto:support@clicon.com"
                    className="mt-3 block break-all text-[18px] text-[#191c1f] sm:text-[22px] lg:text-[20px] xl:text-[24px]"
                  >
                    support@clicon.com
                  </a>

                  <a
                    href="#support-form"
                    className="mt-4 inline-flex min-h-11 items-center justify-center bg-[#2db224] px-6 text-[14px] font-bold uppercase text-white"
                  >
                    Contact Us
                  </a>
                </div>
              </article>
            </div>

            <form
              id="support-form"
              onSubmit={handleSubmit}
              className="mx-auto mt-8 w-full max-w-[760px] scroll-mt-6 bg-white p-5 shadow-md sm:mt-10 sm:p-8"
            >
              <h3 className="text-center text-[20px] font-semibold text-[#191c1f] sm:text-[22px]">
                Send Support Message
              </h3>

              {error && (
                <div className="mt-5 border border-red-200 bg-red-50 px-4 py-3 text-[14px] leading-5 text-red-600">
                  {error}
                </div>
              )}

              {success && (
                <div className="mt-5 border border-green-200 bg-green-50 px-4 py-3 text-[14px] leading-5 text-green-700">
                  {success}
                </div>
              )}

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="support-name"
                    className="text-[14px] text-[#191c1f]"
                  >
                    Name
                  </label>

                  <input
                    id="support-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 h-12 w-full border border-[#e4e7e9] px-4 text-[14px] outline-none focus:border-[#fa8232]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="support-email"
                    className="text-[14px] text-[#191c1f]"
                  >
                    Email
                  </label>

                  <input
                    id="support-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 h-12 w-full border border-[#e4e7e9] px-4 text-[14px] outline-none focus:border-[#fa8232]"
                  />
                </div>
              </div>

              <label
                htmlFor="support-subject"
                className="mt-5 block text-[14px] text-[#191c1f]"
              >
                Subject
              </label>

              <input
                id="support-subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                className="mt-2 h-12 w-full border border-[#e4e7e9] px-4 text-[14px] outline-none focus:border-[#fa8232]"
              />

              <label
                htmlFor="support-message"
                className="mt-5 block text-[14px] text-[#191c1f]"
              >
                Message
              </label>

              <textarea
                id="support-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="mt-2 min-h-[140px] w-full resize-y border border-[#e4e7e9] px-4 py-3 text-[14px] outline-none focus:border-[#fa8232]"
              />

              <button
                type="submit"
                disabled={loading}
                className="mt-6 h-12 w-full bg-[#fa8232] px-7 text-[14px] font-bold uppercase text-white disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default CustomerSupportPage
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

function CustomerSupportPage() {
  return (
    <>
      <PageHeader active="support" />

      <PageBreadcrumb items={[{ label: 'Customer Support' }]} />

      <main>
        <section className="bg-white py-[44px]">
          <Container className="grid h-[340px] grid-cols-[520px_1fr] items-center gap-[80px]">
            <div>
              <span className="bg-[#efd33d] px-[16px] py-[8px] text-[13px] font-semibold uppercase text-[#191c1f]">
                Help Center
              </span>

              <h1 className="mt-[24px] text-[40px] font-semibold text-[#191c1f]">
                How can we help you?
              </h1>

              <div className="mt-[28px] flex h-[64px] w-[520px] border border-[#e4e7e9]">
                <input
                  placeholder="Enter your question or keyword"
                  className="flex-1 px-[24px] text-[16px] outline-none"
                />

                <button className="w-[120px] bg-[#fa8232] text-[14px] font-bold uppercase text-white">
                  Search
                </button>
              </div>
            </div>

            <div className="relative h-[340px] overflow-visible">
              <img
                src="/images/support/support-agent.png"
                alt="Customer support agent"
                className="absolute bottom-[-10px] right-[80px] h-[430px] w-[680px] object-contain object-center"
              />
            </div>
          </Container>
        </section>

        <section className="border-t border-[#e4e7e9] bg-white py-[72px]">
          <Container>
            <h2 className="text-center text-[32px] font-semibold text-[#191c1f]">
              What can we assist you with today?
            </h2>

            <div className="mt-[40px] grid grid-cols-4 gap-[24px]">
              {[
                [Truck, 'Track Order'],
                [Lock, 'Reset Password'],
                [CreditCard, 'Payment Options'],
                [User, 'User Account'],
                [Package, 'Wishlist and Compare'],
                [ShoppingCart, 'Shipping and Billing'],
                [CreditCard, 'Shopping Cart and Wallet'],
                [Store, 'Sell on Clicon'],
              ].map(([Icon, title]) => (
                <div
                  key={title}
                  className="flex h-[72px] items-center gap-[16px] border border-[#ffd6bd] px-[24px]"
                >
                  <Icon size={24} className="text-[#fa8232]" />

                  <span className="text-[16px] font-medium text-[#191c1f]">
                    {title}
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-white py-[72px]">
          <Container>
            <h2 className="text-center text-[24px] font-semibold text-[#191c1f]">
              Popular Support Topics
            </h2>

            <div className="mt-[32px] grid grid-cols-3 gap-[32px] text-[15px] text-[#475156]">
              <ul className="list-disc space-y-[14px] pl-[20px]">
                <li>How do I return my item?</li>
                <li className="text-[#fa8232]">
                  What is Clicon&apos;s return policy?
                </li>
                <li>How long does the refund process take?</li>
              </ul>

              <ul className="list-disc space-y-[14px] pl-[20px]">
                <li>What are the delivery timelines?</li>
                <li>How can I use my campaign voucher?</li>
                <li>Can I change my delivery address?</li>
              </ul>

              <ul className="list-disc space-y-[14px] pl-[20px]">
                <li>How can I cancel my Clicon order?</li>
                <li>How do I change my account password?</li>
                <li>How can I contact the support team?</li>
              </ul>
            </div>
          </Container>
        </section>

        <section className="bg-[#f2f4f5] py-[72px]">
          <Container>
            <p className="text-center text-[14px] font-semibold uppercase text-[#2da5f3]">
              Contact Us
            </p>

            <h2 className="mt-[12px] text-center text-[32px] font-semibold text-[#191c1f]">
              Don&apos;t find your answer? <br /> Contact us directly.
            </h2>

            <div className="mx-auto mt-[40px] grid w-[900px] grid-cols-2 gap-[24px]">
              <div className="flex gap-[24px] bg-white p-[32px] shadow-md">
                <div className="grid h-[72px] w-[72px] place-items-center bg-[#eaf6fe] text-[#2da5f3]">
                  <Headphones size={32} />
                </div>

                <div>
                  <h3 className="text-[18px] font-semibold text-[#191c1f]">
                    Call us now
                  </h3>

                  <p className="mt-[8px] text-[14px] leading-[22px] text-[#5f6c72]">
                    Our support team is available from 9:00 AM to 5:00 PM.
                  </p>

                  <p className="mt-[12px] text-[24px] text-[#191c1f]">
                    +1-202-555-0126
                  </p>

                  <button className="mt-[16px] h-[44px] bg-[#2da5f3] px-[24px] text-[14px] font-bold uppercase text-white">
                    Call Now
                  </button>
                </div>
              </div>

              <div className="flex gap-[24px] bg-white p-[32px] shadow-md">
                <div className="grid h-[72px] w-[72px] place-items-center bg-[#eaf7e9] text-[#2db224]">
                  <MessageCircle size={32} />
                </div>

                <div>
                  <h3 className="text-[18px] font-semibold text-[#191c1f]">
                    Chat with us
                  </h3>

                  <p className="mt-[8px] text-[14px] leading-[22px] text-[#5f6c72]">
                    Send us a message and we will reply as soon as possible.
                  </p>

                  <p className="mt-[12px] text-[24px] text-[#191c1f]">
                    support@clicon.com
                  </p>

                  <button className="mt-[16px] h-[44px] bg-[#2db224] px-[24px] text-[14px] font-bold uppercase text-white">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default CustomerSupportPage
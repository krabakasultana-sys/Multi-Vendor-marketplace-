import { Minus, Plus } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import PageBreadcrumb from '../components/PageBreadcrumb'
import Container from '../components/Container'
import Footer from '../components/Footer'

function FAQsPage() {
  return (
    <>
      <PageHeader active="faqs" />

      <PageBreadcrumb
        items={[
          { label: 'Pages' },
          { label: 'FAQs' },
        ]}
      />

      <main className="bg-white py-[80px]">
        <Container className="grid grid-cols-[760px_424px] gap-[120px]">
          <section>
            <h1 className="text-[32px] font-semibold text-[#191c1f]">
              Frequently Asked Questions
            </h1>

            <div className="mt-[40px] flex flex-col gap-[16px]">
              <div className="flex h-[64px] items-center justify-between border border-[#e4e7e9] px-[24px]">
                <h3 className="text-[18px] font-medium text-[#191c1f]">
                  How can I track my order?
                </h3>
                <Plus size={22} className="text-[#5f6c72]" />
              </div>

              <div className="overflow-hidden border border-[#fa8232]">
                <div className="flex h-[64px] items-center justify-between bg-[#fa8232] px-[24px] text-white">
                  <h3 className="text-[18px] font-medium">
                    What is Clicon&apos;s return policy?
                  </h3>
                  <Minus size={22} />
                </div>

                <div className="p-[24px] text-[15px] leading-[24px] text-[#5f6c72]">
                  <p>
                    You can return most products within the allowed return
                    period if the item is unused, undamaged, and includes the
                    original packaging. Some products may not be eligible for
                    return because of hygiene, software, or warranty rules.
                  </p>

                  <ul className="mt-[16px] list-disc space-y-[8px] pl-[20px]">
                    <li>Keep the original invoice or order confirmation.</li>
                    <li>Return the product with all accessories and packaging.</li>
                    <li>Refunds are processed after the product is checked.</li>
                    <li>Delivery charges may not be refundable in some cases.</li>
                  </ul>
                </div>
              </div>

              <div className="flex h-[64px] items-center justify-between border border-[#e4e7e9] px-[24px]">
                <h3 className="text-[18px] font-medium text-[#191c1f]">
                  How long does delivery usually take?
                </h3>
                <Plus size={22} className="text-[#5f6c72]" />
              </div>

              <div className="flex h-[64px] items-center justify-between border border-[#e4e7e9] px-[24px]">
                <h3 className="text-[18px] font-medium text-[#191c1f]">
                  Can I cancel my order after placing it?
                </h3>
                <Plus size={22} className="text-[#5f6c72]" />
              </div>

              <div className="flex h-[64px] items-center justify-between border border-[#e4e7e9] px-[24px]">
                <h3 className="text-[18px] font-medium text-[#191c1f]">
                  What payment methods are available?
                </h3>
                <Plus size={22} className="text-[#5f6c72]" />
              </div>
            </div>
          </section>

          <aside className="bg-[#fbf4ce] p-[32px]">
            <h2 className="text-[20px] font-medium text-[#191c1f]">
              Still need help? Contact support.
            </h2>

            <p className="mt-[12px] text-[15px] leading-[22px] text-[#475156]">
              If you cannot find your answer, send us a message. Our support
              team will help you as soon as possible.
            </p>

            <input
              placeholder="Email address"
              className="mt-[24px] h-[48px] w-full border border-[#e4e7e9] bg-white px-4 outline-none"
            />

            <input
              placeholder="Subject"
              className="mt-[12px] h-[48px] w-full border border-[#e4e7e9] bg-white px-4 outline-none"
            />

            <textarea
              placeholder="Message"
              className="mt-[12px] h-[88px] w-full resize-none border border-[#e4e7e9] bg-white p-4 outline-none"
            />

            <button className="mt-[20px] h-[48px] bg-[#fa8232] px-[28px] text-[14px] font-bold uppercase text-white">
              Send Message
            </button>
          </aside>
        </Container>
      </main>

      <Footer />
    </>
  )
}

export default FAQsPage
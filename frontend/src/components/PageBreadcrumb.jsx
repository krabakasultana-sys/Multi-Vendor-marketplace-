import { ChevronRight, Home } from 'lucide-react'
import Container from './Container'

function PageBreadcrumb({ items = [] }) {
  return (
    <div className="min-h-[56px] bg-[#f2f4f5] sm:min-h-[72px]">
      <Container className="flex min-h-[56px] items-center overflow-x-auto py-3 text-[13px] sm:min-h-[72px] sm:text-[14px]">
        <div className="flex min-w-max items-center gap-[8px]">
          <a
            href="/"
            className="flex items-center gap-[6px] text-[#5f6c72]"
          >
            <Home size={16} />
            Home
          </a>

          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-[8px]">
              <ChevronRight size={14} className="text-[#77878f]" />

              {item.href ? (
                <a href={item.href} className="text-[#5f6c72]">
                  {item.label}
                </a>
              ) : (
                <span className="text-[#2da5f3]">{item.label}</span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default PageBreadcrumb
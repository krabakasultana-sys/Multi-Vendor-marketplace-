import { ChevronRight, Home } from 'lucide-react'
import Container from './Container'

function PageBreadcrumb({ items = [] }) {
  return (
    <div className="h-[72px] bg-[#f2f4f5]">
      <Container className="flex h-[72px] items-center gap-[8px] text-[14px]">
        <a href="/" className="flex items-center gap-[6px] text-[#5f6c72]">
          <Home size={16} /> Home
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
      </Container>
    </div>
  )
}

export default PageBreadcrumb
function ServiceCard({ icon, title, text }) {
  return (
    <div className="flex min-h-[76px] items-center gap-4 border-b border-[#e4e7e9] p-4 last:border-b-0 sm:min-h-[88px] sm:p-5 lg:border-b-0 lg:border-r lg:last:border-r-0 xl:px-8">
      <div className="shrink-0 text-[#191c1f]">{icon}</div>

      <div className="min-w-0">
        <h4 className="text-[13px] font-semibold uppercase leading-5 text-[#191c1f] sm:text-[14px]">
          {title}
        </h4>

        <p className="mt-1 text-[13px] leading-5 text-[#5f6c72] sm:text-[14px]">
          {text}
        </p>
      </div>
    </div>
  )
}

export default ServiceCard
function ServiceCard({ icon, title, text }) {
  return (
    <div className="flex h-[56px] items-center gap-4 border-r border-[#e4e7e9] px-8 last:border-r-0">
      <div className="text-[#191c1f]">{icon}</div>

      <div>
        <h4 className="text-[14px] font-semibold uppercase leading-5 text-[#191c1f]">
          {title}
        </h4>
        <p className="mt-1 text-[14px] leading-5 text-[#5f6c72]">{text}</p>
      </div>
    </div>
  )
}

export default ServiceCard
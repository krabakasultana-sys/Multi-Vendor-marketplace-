function Container({ children, className = '' }) {
  return (
    <div
      className={`mx-auto w-full max-w-[1320px] px-4 sm:px-6 xl:px-8 2xl:px-0 ${className}`}
    >
      {children}
    </div>
  )
}

export default Container
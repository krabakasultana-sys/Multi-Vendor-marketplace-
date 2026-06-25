function Container({ children, className = '' }) {
  return <div className={`mx-auto w-[1320px] ${className}`}>{children}</div>
}

export default Container
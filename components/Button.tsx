"use client" 

const Button = ({children,styler}:any) => {
  return (
    <button className={styler}>
        {children}
    </button>
  )
}

export default Button


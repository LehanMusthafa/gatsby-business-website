import React from "react"
import "./Button.css"

const STYLES = ["btn--primary", "btn--secondary", "btn--light"]

const SIZES = ["btn--medium", "btn--large"]

export const Button = ({
  children,
  type,
  onclick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onclick={onclick}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button

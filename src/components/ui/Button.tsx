import { Button, ButtonProps } from "@mantine/core"
import * as React from "react"

type MantineButtonProps = ButtonProps & {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: "button" | "submit" | "reset"
}

export const MantineButton = React.forwardRef<HTMLButtonElement, MantineButtonProps>(
  ({ onClick, type = "button", ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={props.className}
        onClick={onClick}
        type={type}
        {...props}
      />
    )
  }
)
MantineButton.displayName = "Button"

export default MantineButton



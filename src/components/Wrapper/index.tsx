import { ReactNode } from "react";

type Props = {
  children: ReactNode
}

export function Wrapper({ children }: Props) {
  return (
    <div id="wrapper">
      {children}
    </div>
  )
}
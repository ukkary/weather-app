import styled from "styled-components"
import Animation from "./spinner.svg"

type Props = {
  fill?: string
  size?: number
}

function resolveSize(size?: number) {
  return size ?? 18
}

export const Spinner = styled(Animation)<Props>`
  ${(props) => props.fill && `fill: ${props.fill};`}
  width: ${(props) => resolveSize(props.size)}px;
  height: ${(props) => resolveSize(props.size)}px;
`

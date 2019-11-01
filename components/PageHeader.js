import { Heading } from 'device-agnostic-ui'
import { H1_FONT_SIZE } from '../config'

export const PageHeader = ({ heading, children }) => (
  <header>
    <Heading style={{ fontSize: H1_FONT_SIZE }}>{heading}</Heading>
    {children}
    <style jsx>{`
      header {
        margin: 2.5rem 1.5rem;
      }
    `}</style>
  </header>
)

export const Section = ({ header, children }) => (
  <section>
    {header && <header>{header}</header>}
    {children}
    <style jsx>{`
      section {
        margin: 3rem 0;
      }

      section header {
        margin: 1.5rem;
      }
    `}</style>
  </section>
)

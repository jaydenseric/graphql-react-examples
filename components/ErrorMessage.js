import { Heading } from 'device-agnostic-ui';

export const ErrorMessage = ({ heading, children }) => (
  <aside>
    <Heading>{heading}</Heading>
    {children}
    <style jsx>{`
      aside {
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
        border-left: 2px solid;
        padding: 1em;
        font-size: 90%;
        color: hsl(
          var(--daui-error-hue),
          var(--daui-error-saturation),
          var(--daui-error-lightness)
        );
      }
    `}</style>
  </aside>
);

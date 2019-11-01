import Head from 'next/head'

export const Page = ({ title, description, children }) => (
  <>
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta
        property="og:image"
        content={`${process.env.PROTOCOL}://${process.env.HOST}${
          process.env.PORT === '80' ? '' : `:${process.env.PORT}`
        }/static/thumbnail.png`}
      />
    </Head>
    {children}
  </>
)

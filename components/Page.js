import Head from 'next/head';

export const Page = ({ title, description, children }) => (
  <>
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta
        property="og:image"
        content={`${process.env.ORIGIN}/static/thumbnail.png`}
      />
    </Head>
    {children}
  </>
);

import Head from "next/head";

const SEO = ({ pageTitle, pageDescription }) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle}`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content={pageDescription} />
      <meta name="robots" content="noindex, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" href="https://cdn.digitaldomination.io/wp-content/uploads/2023/09/DIGITAL-1000-%C3%97-1000px.png" />
    </Head>
  </>
);

export default SEO;

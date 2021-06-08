import Head from "next/head";
export default function Header(
  { title, description }

) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <meta name="thumbnail" content="/me.jpg" />
    </Head>
  )
}

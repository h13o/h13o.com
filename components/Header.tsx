import Head from "next/head";
export default function Header() {
  const title = "Rintaro Hasegawa | 長谷川 林太郎";
  const description =
    "Rintaro Hasegawa is a software engineer and CTO of IZA. 長谷川林太郎はソフトウェアエンジニアで株式会社イザのCTOです。";
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

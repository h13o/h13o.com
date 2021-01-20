import Head from "next/head";
import Image from "next/image";
import fs from "fs";
import remark from "remark";
import html from "remark-html";

export async function getStaticProps(context) {
  const markdown = fs.readFileSync("./markdown/main.md", "utf8");
  const result = await remark().use(html).process(markdown);
  const content = result.toString();
  console.log(content);
  return {
    props: { content }, // will be passed to the page component as props
  };
}

export default function Home({ content }) {
  return (
    <div>
      <Head>
        <title>Rintaro Hasegawa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="max-w-screen-lg mx-auto my-2">
          <div className="font-bold text-5xl">Rintaro Hasegawa</div>
          <Image src="/me.jpg" alt="my pic" width={200} height={200} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>
    </div>
  );
}

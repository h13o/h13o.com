import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import { A } from "../components/A";
import { H1 } from "../components/MarkdownComponent";
import { FaFacebook, FaGithubAlt, FaTwitter, FaLinkedin } from "react-icons/fa";

import unified from "unified";
import parse from "remark-parse";
import remark2react from "remark-react";

export async function getStaticProps(context) {
  const markdown = fs.readFileSync("./markdown/main.md", "utf8");
  return {
    props: { markdown }, // will be passed to the page component as props
  };
}

export default function Home({ markdown }) {
  return (
    <div>
      <Head>
        <title>Rintaro Hasegawa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="relative h-screen w-screen">
          <div className="absolute inset-0 ml-auto w-24 h-4 z-10">
            <div className="m-4 hover:underline">
              <Link href="/">
                <a>English</a>
              </Link>
            </div>
          </div>
          <div className="absolute inset-0 m-auto w-screen h-screen flex">
            <div className="m-auto flex flex-col md:flex-row items-center">
              <div className="m-2">
                <Image
                  src="/me.jpg"
                  alt="my pic"
                  width={200}
                  height={200}
                  layout="fixed"
                  className="rounded-full"
                />
              </div>
              <div className="max-w-xl m-4">
                <div className="text-3xl mb-4">長谷川林太郎</div>
                <div className="text-l mb-4">
                  札幌生まれ、東京大学工学部システム創成学科卒です。大学の同期と始めた株式会社イザで取締役CTOをしています。毎月100km走っています。
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="flex items-center mr-4">
                    <FaGithubAlt />
                    <span className="mr-1" />
                    <A href="https://github.com/h13o">Github</A>
                  </div>
                  <div className="flex items-center mr-4">
                    <FaLinkedin />
                    <span className="mr-1" />
                    <A href="https://www.linkedin.com/in/rintaro-hasegawa-b9b465143/">
                      Linkedin
                    </A>
                  </div>
                  <div className="flex items-center mr-4">
                    <FaFacebook />
                    <span className="mr-1" />
                    <A href="https://www.facebook.com/DOZAEMORIN/">Facebook</A>
                  </div>
                  <div className="flex items-center">
                    <FaTwitter />
                    <span className="mr-1" />
                    <A href="https://twitter.com/_h13o">Twitter</A>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div id="preview">
              {
                unified()
                  .use(parse)
                  .use(remark2react, {
                    remarkReactComponents: {
                      // Use CustomLink instead of <a>
                      a: A,
                      h1: H1,
                    },
                  })
                  .processSync(markdown).result
              }
            </div> */}
      </main>
    </div>
  );
}

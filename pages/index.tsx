import Head from "next/head";
import Image from "next/image";
import A from "../components/A";
import { FaFacebook, FaGithubAlt, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const title = "Rintaro Hasegawa | 長谷川 林太郎";
  const description =
    "Rintaro Hasegawa is a software engineer and CTO of IZA. 長谷川林太郎はソフトウェアエンジニアで株式会社イザのCTOです。";
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="thumbnail" content="/me.jpg" />
      </Head>
      <main>
        <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
          <div className="flex sm:pt-64 pt-16 pb-16">
            <div className="m-auto flex flex-col md:flex-row items-center">
              <div className="m-4">
                <Image
                  src="/me.jpg"
                  alt="my pic"
                  width={200}
                  height={200}
                  layout="fixed"
                  className="rounded-full"
                />
              </div>
              <div className="max-w-xl mx-8">
                <div className="text-2xl sm:text-3xl mb-4 flex sm:flex-row flex-col">
                  <div className="mr-4">
                    <span className="text-green-500 font-bold">Rin</span>taro
                    Hasegawa
                    <span className="mr-4"></span>|
                  </div>
                  <div className="">
                    長谷川
                    <span className=" text-green-500 font-bold ml-2">林</span>
                    太郎
                  </div>
                </div>
                <div className="text-l mb-4">
                  I'm a Software Enginner, and CTO of IZA k.k. in Tokyo. I was
                  born in Sapporo, Japan, and graduate the University of Tokyo
                  in System Engineering soon. I run 100km every month.
                </div>
                <div className="text-l mb-4">
                  札幌生まれ、東京大学工学部システム創成学科4年です。<a href="https://yamada.land" className="underline hover:text-blue-500">大学の同期</a>と始めた株式会社イザで取締役CTOをしています。毎月100km走っています。
                </div>
                <div className="flex flex-col md:flex-row mb-4">
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
                <div className="">
                  <button className="rounded bg-green-500 hover:bg-green-600 text-white p-4 max-w-xs w-full">
                    <a href="mailto:rintaro.hasegawa@gmail.com">
                      Contact me here!
                    </a>
                  </button>
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

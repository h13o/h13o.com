import { useEffect } from "react"
import Head from 'next/head';
import Link from 'next/link';
import Prism from "prismjs";
import "prismjs/components/prism-jsx.min";
import "prismjs/plugins/line-highlight/prism-line-highlight.min.js";
import timeIconString from "../../utils/timeIconString"

const PostLayout = ({ meta, children }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="bg-green-50">
        <div className="py-8 max-w-screen-md md:mx-auto mx-4">
          <div className="my-8">
            <Link href="/"><a className="font-medium">{"< Go Home"}</a ></Link>
          </div>
          <div className="text-xl">
            <div className="text-3xl font-bold text-green-500">{meta.title}</div>
            <span className="text-base"
            >{meta.date}<span className="mx-2" >
                {timeIconString(meta.readTime)}
              </span>
              {meta.readTime + ' min read'}
            </span>
            <p>{meta.description}</p>
          </div>
          <div className="mt-12 prose prose-md prose-green md:prose-xl max-w-none">
            {children}
          </div>
          <div className="my-8">
            <Link href="/"><a className="font-medium">{"< Go Home"}</a ></Link>
          </div>
        </div>
      </div>
    </>
  );

}
export default PostLayout;

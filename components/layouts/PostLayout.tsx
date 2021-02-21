import { useEffect } from "react"
import Head from 'next/head';
import Prism from "prismjs";
import "prismjs/components/prism-jsx.min";
import "prismjs/plugins/line-highlight/prism-line-highlight.min.js";


const PostLayout = ({ meta, children }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="m-4 max-w-screen-lg lg:mx-auto">
        <div className="text-3xl mt-24 ">{meta.title}</div>
        <div className="mt-2">{meta.date}</div>
        <div className="mt-12 prose prose-green lg:prose-lg max-w-none">
          {children}
        </div>
      </div>
    </>
  );

}
export default PostLayout;

import { useEffect } from "react"
import Head from 'next/head';
import Prism from "prismjs";
import "prismjs/components/prism-jsx.min";


const PostLayout = ({ meta, children }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <div className="m-4">
        <div>{meta.title}</div>
        <div className="prose prose-green lg:prose-lg mx-auto">
          {children}
        </div>
      </div>
    </>
  );

}
export default PostLayout;

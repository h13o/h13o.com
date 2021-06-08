import Link from "next/link"
import Layout from '../../../components/Layout'
import Header from "../../../components/Header"
import { getAllShuhoIds, getShuhoData } from '../../../lib/shuho'
import markdownToHtml from "../../../lib/markdownToHtml"
import InnerHTML from 'dangerously-set-html-content'


export default function Post({ data, htmlContent }) {
    const Back = () => (
        <Link href="/">
            <div className="my-4 underline cursor-pointer">
                Back
            </div>
        </Link>
    )
    return (
        <div>
            <Header
                title={data.title}
                description={data.title}
            />
            <Layout>
                <div className="p-8 ">
                    <Back />
                    <div className="my-8 font-bold text-3xl text-gray-900">
                        {data.title}
                    </div>
                    <InnerHTML className="prose" html={htmlContent} />
                    <Back />
                </div>
            </Layout>
        </div>
    )
}

export async function getStaticPaths() {
    const paths = getAllShuhoIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const shuhoData = getShuhoData(params)
    const htmlContent = await markdownToHtml(shuhoData.content)
    return {
        props: {
            data: shuhoData.data,
            htmlContent
        }
    }
}
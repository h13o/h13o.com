import Layout from '../../../components/Layout'
import { getAllShuhoIds, getShuhoData } from '../../../lib/shuho'
import markdownToHtml from "../../../lib/markdownToHtml"

export default function Post({ htmlContent }) {
    return (
        <Layout>
            <div className="p-8 max-w-screen-md md:mx-auto">
                <div className="prose"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
            </div>
        </Layout>)
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
            htmlContent
        }
    }
}
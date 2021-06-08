import Layout from '../../../components/Layout'
import { getAllShuhoIds, getShuhoData } from '../../../lib/shuho'

export default function Post({ shuhoData }) {
    console.log(shuhoData)
    return <Layout>...</Layout>
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
    return {
        props: {
            shuhoData
        }
    }
}
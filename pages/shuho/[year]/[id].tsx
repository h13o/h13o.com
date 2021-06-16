import Link from "next/link"
import Layout from '../../../components/Layout'
import Header from "../../../components/Header"
import { getAllShuhoIds, getShuhoData } from '../../../lib/shuho'
import markdownToHtml from "../../../lib/markdownToHtml"
import InnerHTML from 'dangerously-set-html-content'
import { motion } from "framer-motion"
import { motionPageVariants } from "../../../framer-motion/motionVariants"

export default function Post({ shuhoData, htmlContent }) {
    const Back = () => (
        <Link href="/">
            <div className="my-4 underline cursor-pointer">
                Back
            </div>
        </Link>
    )
    return (
        <>
            <Header
                title={shuhoData.data.title}
                description={shuhoData.topics.reduce((a, b) => a + ", " + b)}
            />
            <Layout>
                <motion.div
                    variants={motionPageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <Back />
                    <div className="my-8 font-bold text-3xl text-gray-900">
                        {shuhoData.data.title}
                    </div>
                    <InnerHTML className="prose" html={htmlContent} />
                    <Back />
                </motion.div>
            </Layout>
        </>
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
            shuhoData,
            htmlContent
        }
    }
}
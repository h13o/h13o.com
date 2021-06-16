import Header from "../components/Header"
import Hero from "../components/Hero"
import ShuhoList from "../components/ShuhoList"
import Layout from "../components/Layout"
import { getAllShuhoData } from "../lib/shuho"
import { motion } from "framer-motion"
import { motionPageVariants } from "../framer-motion/motionVariants"


export default function Home({ shuhoData }) {
  return (
    <>
      <Header
        title="Rintaro Hasegawa | 長谷川 林太郎"
        description="Rintaro Hasegawa is a software engineer and CTO of IZA. 長谷川林太郎はソフトウェアエンジニアで株式会社イザのCTOです。"
      />
      <Layout>
        <motion.div
          variants={motionPageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Hero />
          <ShuhoList data={shuhoData} />
        </motion.div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const shuhoData = getAllShuhoData()
  return {
    props: {
      shuhoData
    }
  }
}
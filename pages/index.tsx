import Header from "../components/Header"
import Hero from "../components/Hero"
import ShuhoList from "../components/ShuhoList"
import Layout from "../components/Layout"
import { getAllShuhoData } from "../lib/shuho"

export default function Home({ shuhoData }) {
  return (
    <>
      <Header />
      <Layout>
        <Hero />
        <ShuhoList data={shuhoData} />
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
import Image from "next/image";
import SocialMedia from "../components/SocialMedia";
import { FaFacebook, FaGithubAlt, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motionComponentVariants, motionPageVariants } from "../framer-motion/motionVariants"
import { motion } from "framer-motion"

export default function Hero() {
    return (
        <div className="flex sm:pt-64 pt-16 pb-16">
            <div className="m-auto flex flex-col md:flex-row items-center">
                <div className="m-6">
                    <Image
                        src="/me.jpg"
                        alt="my pic"
                        width={200}
                        height={200}
                        layout="fixed"
                        className="rounded-full"
                    />
                </div>
                <div className="max-w-xl">
                    <motion.div variants={motionComponentVariants}>
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
                    </motion.div>
                    <motion.div variants={motionComponentVariants}>
                        <div className="text-l mb-4">
                            I'm a Software Enginner, and CTO of IZA k.k. in Tokyo. I was
                            born in Sapporo, Japan, and graduate the University of Tokyo
                            in System Engineering soon. I run 100km every month.
                        </div>
                    </motion.div>
                    <motion.div variants={motionComponentVariants}>
                        <div className="text-l mb-4">
                            札幌生まれ、東京大学工学部システム創成学科4年です。<a href="https://yamada.land" className="underline hover:text-blue-500">大学の同期</a>と始めた株式会社イザで取締役CTOをしています。毎月100km走っています。
                        </div>
                    </motion.div>
                    <motion.div variants={motionComponentVariants}>
                        <div className="flex flex-col md:flex-row text-2xl text-gray-900 mb-4">
                            <div className="flex items-center mr-4 mb-2">
                                <FaGithubAlt />
                                <span className="mr-1" />
                                <SocialMedia href="https://github.com/h13o">Github</SocialMedia>
                            </div>
                            <div className="flex items-center mr-4 mb-2">
                                <FaLinkedin />
                                <span className="mr-1" />
                                <SocialMedia href="https://www.linkedin.com/in/rintaro-hasegawa-b9b465143/">
                                    Linkedin
                                </SocialMedia>
                            </div>
                            <div className="flex items-center mr-4 mb-2">
                                <FaFacebook />
                                <span className="mr-1" />
                                <SocialMedia href="https://www.facebook.com/DOZAEMORIN/">Facebook</SocialMedia>
                            </div>
                            <div className="flex items-center mb-2">
                                <FaTwitter />
                                <span className="mr-1" />
                                <SocialMedia href="https://twitter.com/_h13o">Twitter</SocialMedia>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={motionComponentVariants}>
                        <div className="">
                            <button className="rounded bg-green-500 hover:bg-green-600 text-white p-4 max-w-xs w-full">
                                <a href="mailto:rintaro.hasegawa@gmail.com">
                                    Contact me here!
                                </a>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div >
    )

}
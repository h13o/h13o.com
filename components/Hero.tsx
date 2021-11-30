import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebook, FaGithubAlt, FaTwitter, FaLinkedin,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import SocialMedia from './SocialMedia';
import { motionComponentVariants, motionPageVariants } from '../framer-motion/motionVariants';

export default function Hero() {
  return (
    <div className="flex pt-16 pb-16 sm:pt-64">
      <div className="flex flex-col items-center m-auto md:flex-row">
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
            <div className="flex flex-col mb-4 text-2xl sm:text-3xl sm:flex-row">
              <div className="mr-4">
                <span className="font-bold text-green-500">Rin</span>
                taro
                Hasegawa
                <span className="mr-4" />
                |
              </div>
              <div className="">
                長谷川
                <span className="ml-2 font-bold text-green-500 ">林</span>
                太郎
              </div>
            </div>
          </motion.div>
          <motion.div variants={motionComponentVariants}>
            <div className="mb-4 text-l">
              I'm a Software Engineer, and CEO of
              {' '}
              <Link href="https://www.timbers.jp">
                <span className="text-green-500 cursor-pointer hover:underline">Timbers k.k.</span>
              </Link>
              {' '}
              in Tokyo. I was born in Sapporo, Japan, and graduated the University of Tokyo
              in System Engineering. I run 100km every month.
              {' '}
              <Link href="https://www.facebook.com/groups/232857645479012/about"><span className="text-green-500 cursor-pointer hover:underline">I clean Ueno Park the first Sunday of every month.</span></Link>

            </div>
          </motion.div>
          <motion.div variants={motionComponentVariants}>
            <div className="mb-4 text-l">
              札幌生まれ、東京大学工学部システム創成学科卒。東大生を中心としたエンジニア集団、
              <Link href="https://www.timbers.jp"><span className="text-green-500 cursor-pointer hover:underline">株式会社ティンバーズ</span></Link>

              で代表をしています。毎月100km走っています。
              <Link href="https://www.facebook.com/groups/232857645479012/about"><span className="text-green-500 cursor-pointer hover:underline">毎月第1日曜日に上野公園を掃除</span></Link>
              しています。

            </div>
          </motion.div>
          <motion.div variants={motionComponentVariants}>
            <div className="flex flex-col mb-4 text-2xl text-gray-900 md:flex-row">
              <div className="flex items-center mb-2 mr-4">
                <FaGithubAlt />
                <span className="mr-1" />
                <SocialMedia href="https://github.com/h13o">Github</SocialMedia>
              </div>
              <div className="flex items-center mb-2 mr-4">
                <FaLinkedin />
                <span className="mr-1" />
                <SocialMedia href="https://www.linkedin.com/in/rintaro-hasegawa-b9b465143/">
                  Linkedin
                </SocialMedia>
              </div>
              <div className="flex items-center mb-2 mr-4">
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
              <button className="w-full max-w-xs p-4 text-white bg-green-500 rounded hover:bg-green-600">
                <a href="mailto:rintaro.hasegawa@gmail.com">
                  Contact me here!
                </a>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


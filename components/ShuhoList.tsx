import Link from "next/link";
export default function ShuhoList({ data }) {
    return (
        <div className="pb-16">
            <div className="mb-8">
                <div className="text-gray-900 text-4xl font-light mb-1">
                    Shuho
                </div>
                <div>
                    Weekly Report of my life, work, and study.
                </div>
            </div>
            {
                data.map(
                    article => (
                        article.data.title &&
                        <div>
                            <div className="text-gray-900 font-light mb-1">
                                {article.start + "~" + article.end}
                            </div>
                            <Link href={article.url}>
                                <div className="cursor-pointer text-2xl text-gray-900 hover:underline">
                                    {article.data.title}
                                </div>
                            </Link>
                        </div>
                    ))
            }
        </div>
    )
}
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
                        <div key={article.data.title} className="mb-8">
                            <div className="text-gray-900 font-light">
                                {article.start + "~" + article.end}
                            </div>
                            <Link href={article.url}>
                                <div className="cursor-pointer text-2xl font-bold text-green-600 hover:text-green-500 mb-1">
                                    {article.data.title}
                                </div>
                            </Link>
                            <ul>
                                {article.topics.map(topic =>
                                    <li key={topic} className="mb-0.5">
                                        {topic}
                                    </li>
                                )}
                            </ul>
                        </div>
                    ))
            }
        </div>
    )
}
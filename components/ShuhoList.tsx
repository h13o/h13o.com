import Link from "next/link";
export default function ShuhoList({ data }) {
    console.log(data);
    return (
        <div>
            <div className="mb-8">
                <div className="text-green-900 text-4xl font-light mb-1">
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
                            <Link href={article.url}>
                                <div className="cursor-pointer text-2xl font-bold text-green-500 hover:underline">
                                    {article.data.title}
                                </div>
                            </Link>
                            <div className="text-green-900 font-light">
                                {article.start + "~" + article.end}
                            </div>
                        </div>
                    ))
            }
        </div>
    )
}
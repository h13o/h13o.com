import Link from "next/link";
import timeIconString from "../utils/timeIconString"

export const Post = ({ post }) => {
    const {
        link,
        module: { meta }
    } = post;

    return (
        <article className="my-8">
            <Link href={"/posts" + link}>
                <a className="text-3xl font-bold text-green-500">{meta.title}</a>
            </Link>
            <div className="text-xl">
                <span className="text-base"
                >{meta.date}<span className="mx-2" >
                        {timeIconString(meta.readTime)}
                    </span>
                    {meta.readTime + ' min read'}
                </span>
                <p>{meta.description}</p>
            </div>
        </article>
    );
};

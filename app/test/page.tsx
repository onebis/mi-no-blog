import Link from "next/link";
import { getList } from "@/app/_libs/microcms";

export default async function StaticPage() {
    const { contents } = await getList();

    // ページの生成された時間を取得
    const time = new Date().toLocaleString();

    if (!contents || contents.length === 0) {
        return <h1>No contents</h1>;
    }

    return (
        <div>
            <h1 className={'text-sm'}>{time}</h1>
            <ul>
                {contents.map((post) => {
                    return (
                        <li key={post.id}>
                            <Link href={`/static/${post.id}`}>{post.title}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
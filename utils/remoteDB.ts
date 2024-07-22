import { Post } from "@/types/items";

export default async function RemoteDB() {
    const resp = await fetch("/api/app/getItem");
    const data = await resp.json();
    const posts: Post[] = data.items;
    return posts;
}
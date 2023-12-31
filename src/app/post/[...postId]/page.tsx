import { Metadata } from "next";
import { Post } from "../../../types";

interface PageProps {
  params: { postId: string };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = (await res.json()) as Post;
  return { title: data.title };
}

const page = async ({ params }: PageProps) => {
  return <div>{params.postId}</div>;
};

export default page;

import { FC } from "react";

interface PageProps {
  params: { postId: string };
}

const page = async ({ params }: PageProps) => {
  return <div>{params.postId}</div>;
};

export default page;

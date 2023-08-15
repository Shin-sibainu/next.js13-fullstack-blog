import Image from "next/image";

async function fetchBlogs() {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: {
      revalidate: 10,
    },
  });

  const data = await res.json();

  return data;
}

export default async function Home() {
  const posts = await fetchBlogs();
  console.log(posts);

  return <div>Hello</div>;
}

import { useRouter } from "next/router";

const SinglePost = ({ post }) => {
  // console.log("hellopsts", posts);
  const router = useRouter();
  if (router.isFallback) {
    return <h1>loading........</h1>;
  }

  return (
    <div>
      <h1>hello dynamic</h1>
      {/* <h1>{data.id}</h1> */}
      <h1>{post.id}</h1>
      <h1>{post.title}</h1>
    </div>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts = await res.json();
  const paths = posts.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });
  return {
    // paths: [
    //   {
    //     params: { postId: "1" },
    //   },
    //   {
    //     params: { postId: "2" },
    //   },
    //   {
    //     params: { postId: "3" },
    //   },
    // ],
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const post = await res.json();
  console.log(`genarated page for ${params.postId}`);

  return { props: { post } };
};
export default SinglePost;

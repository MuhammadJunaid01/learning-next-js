import Link from "next/link";

import postStyle from "../../styles/posts.module.css";
const index = ({ posts }) => {
  return (
    <div className={postStyle.post_container}>
      <div className={postStyle.post_content}>
        {posts.map((post, inde) => {
          return (
            <div className={postStyle.post_details} key={inde}>
              <h5 style={{ textAlign: "center", marginBottom: "20px" }}>
                post ID {post.id}
              </h5>
              <p>{post.title}</p>
              <Link href={`posts/${post.id}`}>
                <a>Details</a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts = await res.json();

  return { props: { posts } };
};
export default index;

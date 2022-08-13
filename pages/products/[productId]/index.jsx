import { useRouter } from "next/router";

const ProductDetail = ({ data }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...............</h1>;
  }
  return (
    <div>
      <h1>hello product detail page</h1>
      <p>{data.id}</p>
      <p>{data.price}</p>
    </div>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:4000/products");
  const data = await res.json();
  const paths = data.map((product) => {
    return {
      params: { productId: `${product.id}` },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:4000/products/${params.productId}`);
  const data = await res.json();
  return {
    props: { data },
  };
};
export default ProductDetail;

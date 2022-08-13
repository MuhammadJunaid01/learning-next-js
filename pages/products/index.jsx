const ProductList = ({ product }) => {
  return (
    <div>
      <h1>List of all Product </h1>
      {product.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.id}</p>
            <p>{item.price}</p>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export const getStaticProps = async () => {
  console.log("genarating / re-genartin product list");
  const res = await fetch("http://localhost:4000/products");
  const product = await res.json();
  return {
    props: { product },
    revalidate: 10,
  };
};

export default ProductList;

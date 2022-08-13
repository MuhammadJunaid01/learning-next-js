import Navbar from "../components/navbar/Navbar";

const index = ({ data }) => {
  console.log("food data", data);
  return (
    <div>
      <h1>Home page</h1>
      <Navbar />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    "http://www.thecocktaildb.com/api/json/v1/1/search.php?s"
  );

  const data = await res.json();

  return { props: { data } };
};

export default index;

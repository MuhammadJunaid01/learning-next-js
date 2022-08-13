const NewsList = ({ data }) => {
  return (
    <div>
      <h1>hello news list</h1>
      {data.map((item, i) => {
        return (
          <div key={i}>
            <br />
            <br />
            <p>{item.newsId}</p>
            <h5>{item.title}</h5>
            <br />
            <br />
            <p>{item.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:4000/news");
  const data = await res.json();
  return {
    props: { data },
  };
};

export default NewsList;

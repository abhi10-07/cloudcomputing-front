import { useEffect, useState } from "react";
import { getPosts } from "../../api";
import Card from "../../components/Card";
// import Feature from "./Feature";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState();
  const [searchParams] = useSearchParams();
  const fetch = searchParams.get("fetch") === "true";

  useEffect(() => {
    getPosts(fetch).then((res) => setPosts(res.data));
  }, [fetch]);

  console.log(posts);

  return (
    <>
      <div className="container">
        <div className="album p-5">
          {/* <Feature /> */}
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 bg-light p-3 rounded">
            {posts && posts.map((item) => <Card key={item.id} item={item} />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

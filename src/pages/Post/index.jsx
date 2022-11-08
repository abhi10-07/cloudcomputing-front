import React, { useState, useEffect } from "react";
import { getPost } from "../../api";
import { useParams } from "react-router-dom";

const Post = () => {
  const [post, setPost] = useState();

  const { id } = useParams();

  useEffect(() => {
    getPost(id).then((res) => setPost(res.data));
  }, [id]);

  console.log(post);

  if (!post) {
    return <h4>Loading...</h4>;
  }

  return (
    <div className="container">
      <div className="album p-5">
        {/* <Feature /> */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 bg-light p-3 rounded">
          <div className="col">
            <div className="card shadow-sm">
              <img src={post.thumbnail_s3} alt={post.title} />

              <div className="card-body">
                <h3>{post.title}</h3>
                <p className="card-text">{post.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

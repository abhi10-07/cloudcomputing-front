import React from "react";

const Card = ({ item }) => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        {item.thumbnail_s3 === null ? (
          <h6 className="pt-2 text-center">Image Processing ...</h6>
        ) : (
          <img src={item.thumbnail_s3} alt={item.title} />
        )}

        <div className="card-body">
          <h3>{item.title}</h3>
          <p className="card-text">{item.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a
                href={`/post/${item.id}`}
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

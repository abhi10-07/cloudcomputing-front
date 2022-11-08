import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { baseURI } from "../../api";
import Request from "../../api/request";

const AddPost = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const navigate = useNavigate();
  const [loadingPercent, setLoadingPercent] = useState(0);

  const addPost = async (body) => {
    const formData = new FormData();
    formData.append("media", body.upload_file[0]);
    formData.append("title", body.title);
    formData.append("description", body.description);

    const onUploadProgress = (progressEvent) => {
      const { loaded, total } = progressEvent;
      let percent = Math.floor((loaded * 100) / total);
      setLoadingPercent(percent);
    };

    const { data } = await Request.post(`${baseURI}/addpost`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
      onUploadProgress,
    });
    return data.data[0].affectedRows > 0;
  };

  const onSubmit = async (data) => {
    await addPost(data);
    reset();
  };

  useEffect(() => {
    if (loadingPercent === 100) {
      setTimeout(() => {
        navigate(`/?fetch=true`);
      }, 2000);
    }
  }, [loadingPercent, navigate]);

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Add post</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                id="title"
                {...register("title", {
                  required: "Title is required",
                  minLength: {
                    value: 2,
                    message: "Min length is 2",
                  },
                })}
              />
              {errors.title && <p>{errors.title.message}</p>}
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                placeholder=""
                id="description"
                defaultValue=""
                {...register("description", {
                  required: "Description is required",
                })}
              ></textarea>
              {errors.description && <p>{errors.description.message}</p>}
            </div>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="description">Upload</label>
              <input
                type="file"
                className="form-control"
                placeholder=""
                accept="video/*, image/*"
                id="upload_file"
                {...register("upload_file", {
                  required: "Media is required",
                })}
              />
              {errors.description && <p>{errors.description.message}</p>}
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>

        <div className="progress mt-5">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${loadingPercent}%` }}
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </form>
    </div>
  );
};

export default AddPost;

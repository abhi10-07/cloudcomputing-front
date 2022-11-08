import Request from "./request";

export const domainName =
  process.env.NODE_ENV === "development"
    ? "localhost:3030"
    : process.env.DOMAIN_URL;
export const baseURI = `http://${domainName}/api`;

export const getPosts = async (fetch) => {
  const { data } = await Request.get(`${baseURI}/posts?fetch=${fetch}`);
  return data;
};

export const getPost = async (id) => {
  const { data } = await Request.get(`${baseURI}/post/${id}`);
  return data;
};

import { createContext, useContext, useState } from "react";

const initialState = {
  loadPercentage: "",
  setLoadPercentage: () => null,
};

export const PostContext = createContext(initialState);

export function PostProvider({ children }) {
  const [loadPercentage, setLoadPercentage] = useState(0);

  const value = {
    loadPercentage,
    setLoadPercentage,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

export function usePostContext() {
  return useContext(PostContext);
}

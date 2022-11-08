import { Routes, Route } from "react-router-dom";
import { AddPost, Home, Post } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/addpost" element={<AddPost />} />
      <Route path="/post/:id" element={<Post />} />
    </Routes>
  );
}

export default App;

import { Routes, Route } from "react-router";

import { MainLayout } from "./layouts/MainLayout";
import { Homepage } from "./pages/index";
import { PostDetails } from "./pages/PostDetails";
import { AddNewPost } from "./pages/AddNewPost";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/newPost" element={<AddNewPost />} />
      </Route>
    </Routes>
  );
};

export default App;

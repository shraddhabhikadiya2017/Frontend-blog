import { Routes, Route } from "react-router";

import { MainLayout } from "./layouts/MainLayout";
import { Homepage } from "./pages/index";
import { PostDetails } from "./pages/PostDetails";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/posts/:id" element={<PostDetails />} />
      </Route>
    </Routes>
  );
};

export default App;

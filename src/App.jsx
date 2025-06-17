import { Routes, Route } from "react-router";

import { MainLayout } from "./layouts/MainLayout";
import { Homepage } from "./pages/index";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Homepage />} />
      </Route>
    </Routes>
  );
};

export default App;

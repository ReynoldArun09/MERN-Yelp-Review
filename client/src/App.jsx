import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import UpdateRestaurant from "./pages/UpdateRestaurant";
import RestaurantDetail from "./pages/RestaurantDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/restaurant/:id/update"
            element={<UpdateRestaurant />}
          />
          <Route path="/restaurant/:id" element={<RestaurantDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

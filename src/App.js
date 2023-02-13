import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import PlaceToStay from "./pages/PlaceToStay";
import AOS from 'aos'
import 'aos/dist/aos.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage /> ,
  },
  {
    path: "/place-to-stay",
    element: <PlaceToStay />
  },
]);

function App() {

  React.useEffect(() => {
    AOS.init({ duration: 500 });
  }, [])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import PlaceToStay from "./pages/PlaceToStay";


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
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

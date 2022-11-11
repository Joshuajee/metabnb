import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TopNav from "./components/TopNav";
import HomePage from "./pages/HomePage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage /> ,
  },
]);

function App() {
  return (
    <div>
      <TopNav />
      <RouterProvider router={router} />

    </div>
  );
}

export default App;

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Footer from "./components/utils/Footer";
import TopNav from "./components/utils/TopNav";
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
      <Footer />
    </div>
  );
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/common/Layout";
import NotFound from "./pages/common/NotFound";
import Intro from "./pages/Intro";
import Add from "./pages/add";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: <Intro />,
            },
            {
                path: "add",
                element: <Add />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

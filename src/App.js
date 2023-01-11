import './App.scss';
import {createHashRouter, RouterProvider} from "react-router-dom";
import Layout from "./component/Layout";
import About from "./component/About";
import Contact from "./component/Contact";
import Home from "./component/Home";

const router = createHashRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    path: "/",
                    element: <Home/>
                },
                {
                    path: "about",
                    element: <About/>,

                },
                {
                    path: "contact",
                    element: <Contact/>,
                }
                ]
        }
    ]
)

function App() {
    return (
        <div className="App">
            <RouterProvider base="/" router={router}/>
         </div>
    );
}

export default App;

import './App.scss';
import {Route, Routes} from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./component/Home";
import Logo from "./component/Logo";
import React from "react";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route  path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/about" element={<Logo/>}/>
                    <Route path="/contact" element={<h1>Lorem</h1>}/>
                </Route>

            </Routes>
        </div>
    );
}

export default App;

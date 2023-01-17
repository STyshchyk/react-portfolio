import React, {useEffect, useState} from 'react';
import Sidebar from "./Sidebar";
import {Outlet, useLocation} from "react-router-dom";

const Layout = () => {
    const route = useLocation();
    const [className, setClassName] = useState("")
    useEffect(() => {
        if (route.pathname.search("portfolio") !== -1) setClassName("removed")
        else setClassName("")
    }, [route])
    return (
        <div>
            <Sidebar/>
            <div className="page">
                <span className={"tags top-tags " + className}>&lt;body&gt;</span>
                <Outlet/>
                <span className={"tags bottom-tags " + className}>
                    &lt;body&gt;
                    <br/>
                <span className={"bottom-tag-html " + className}>
                    &lt;html&gt;
                </span>
                </span>

            </div>
        </div>
    );
};

export default Layout;
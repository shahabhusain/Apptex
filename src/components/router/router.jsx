import { createRoutesFromElements, createBrowserRouter, Route, } from "react-router-dom";
import Layout from "../Layout/Layout";
import Main from "../Pages/Main";
import Founders from "../Pages/Founders";
import RecentWork from "../Pages/RecentWork";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/" element={<Layout />}>
           <Route index element={<Main />} />
           <Route path="/founder" element={<Founders />} />
           <Route path="/recent" element={<RecentWork />}/>
        </Route>
        </>
    )
)
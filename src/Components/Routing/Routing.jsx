import { Route, Routes } from "react-router-dom";
import MainLayout from "../../pages/MainLayout";
import {lazy, Suspense} from "react";
import PageLoader from "../Loader/PageLoader";

const Home = lazy(() => import( "../../pages/Home"));
const CoinDetailsPage = lazy(() => import("../../pages/CoinDetailspage"));

function Routing(){
  return(
    <Routes>
      <Route path="/" element={<MainLayout/>}>
      <Route index element={
        
        <Suspense fallback={<PageLoader/>}>
          <Home/>
        </Suspense>

        }/>
      <Route path="/details/:coinId" element={
        
        <Suspense fallback={<PageLoader/>}>
          <CoinDetailsPage/>
        </Suspense>

        }/>
      </Route>
    </Routes>
  )
}
export default Routing;

// Here in main layout Route i wrapped the Home and Coindetails pages because 
// in main layout navbar is rendering so i want navbar in both the pages because of that i wrapped it
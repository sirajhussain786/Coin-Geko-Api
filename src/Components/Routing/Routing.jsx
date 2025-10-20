import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import CoinDetailsPage from "../../pages/CoinDetailspage";
import MainLayout from "../../pages/MainLayout";

function Routing(){
  return(
    <Routes>
      <Route path="/" element={<MainLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="/details/:coinId" element={<CoinDetailsPage/>}/>
      </Route>
    </Routes>
  )
}
export default Routing;

// Here in main layout Route i wrapped the Home and Coindetails pages because 
// in main layout navbar is rendering so i want navbar in both the pages because of that i wrapped it
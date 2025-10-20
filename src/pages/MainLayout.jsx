import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function MainLayout(){
    return(
        <>
        <Navbar/> {/* this navbar is the shared ui we want to share across the pages*/}
        <Outlet/> {/* the actual page which will be render along the navbar  */}
        </>
    )
}
export default MainLayout;

// this components is esponsible for sharing navbar components in both pages   
// because of outlet this navbar is shared in  routing 
// this outlet is given buy react router dom
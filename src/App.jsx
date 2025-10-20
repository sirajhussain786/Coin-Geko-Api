
import { useState } from "react";

import Home from "./pages/Home";
import { currencycontext } from "./currencycontext";
import Routing from "./Components/Routing/Routing";

function App(){

  const [currency, setCurrency] = useState("usd")

  return(
    <>
    <currencycontext.Provider value = {{currency, setCurrency}}>
      <Routing />
    </currencycontext.Provider>
    
    
    </>
  )

}
export default App;

import { useState } from "react";

import Home from "./pages/Home";
import { currencycontext } from "./currencycontext";

function App(){

  const [currency, setCurrency] = useState("usd")

  return(
    <>
    <currencycontext.Provider value = {{currency, setCurrency}}>
      <Home />
    </currencycontext.Provider>
    
    
    </>
  )

}
export default App;
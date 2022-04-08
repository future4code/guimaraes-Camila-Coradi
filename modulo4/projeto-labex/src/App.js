import React from "react";
import Footer from "./components/Footer";
import Router from "./Routes/Router";

export const Url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/'
export const aluna  = 'camila-leal-guimaraes/'


function App() {
  return (
    <div>
      <Router />
      <Footer/>
    </div>
  );
}

export default App;

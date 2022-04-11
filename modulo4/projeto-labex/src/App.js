import React from "react";
import Footer from "./components/Footer";
import Router from "./Routes/Router";

export const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/camila-leal-guimaraes'



function App() {
  return (
    <div>
      <Router />
      <Footer/>
    </div>
  );
}

export default App;

import "./App.css";

import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Main from "./components/Main";
import Footer from "./components/Footer";


function App() {
  return (
    <>
    
      <Navbar />
      <div>
        <Sidebar/>
        <Main/>
      </div>
      <div>
        <Footer/>
      </div>
    </>

  );
}

export default App;

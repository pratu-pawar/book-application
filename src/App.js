import "./App.css"
import { Routes, Route} from "react-router-dom"
import Booklist from "./Components/Booklist";
import BookDetails from "./BookDetails";
import Favorites from "./Components/favorites";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    
  <div className="App"> 
  <Navbar/>
  <Routes> 
    <Route path="/" element={<Booklist/>}/>
    <Route path="/book/:id" element={<BookDetails/>}/>
    <Route path="Favorites" element={<Favorites/>}/>
    
  </Routes>
  <Footer/>

  </div>
  );
}

export default App;

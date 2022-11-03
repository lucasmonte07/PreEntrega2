import Home from "../screens/Home/Home";
import Character from "./Character/Character";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { ItemListContainer } from "../components/ItemListContainer";

const Router = () => {
    
    return(        
        
        <BrowserRouter>
            
            <Navbar />
            
             <ItemListContainer />

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/category/: cat" element={<Home />}></Route>
                <Route path="/character/: name" element={<Character />}></Route>
                <Route path="/*" element={<div>404 not found</div>}></Route>
            </Routes>
    
        </BrowserRouter>
    
    ); 
}

export default Router;

import './App.css'
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import {useState} from "react";
import {navItems, SWcontext} from "./utils/constants.js";

function App() {
    const [page, setPage] = useState(navItems[0]);

    return (
        <div>
            <SWcontext value={{page, changePage: setPage}}>
                <Header/>
                <Main/>
                <Footer/>
            </SWcontext>
        </div>

    )
}

export default App
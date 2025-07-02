import './App.css'
import Header from "./components/Header.jsx";
import Friends from "./components/Friends.jsx";
import Contacts from "./components/Contacts.jsx";

function App() {
    return (
        <>
            <div className="Header">
                <Header/>
            </div>
            <main className="clearfix">
                <Friends/>

            </main>
            <div className="Footer">
                <Contacts/>
            </div>

        </>
    )
}

export default App
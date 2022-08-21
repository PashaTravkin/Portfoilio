import './App.module.css';
import s from './App.module.css'
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import MyWorks from "./myWorks/MyWorks";
import HireMe from "./hireMe/HireMe";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className={s.app}>
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <HireMe/>
            <Contacts/>
            <Footer/>

        </div>
    );
}

export default App;

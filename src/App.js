import './App.module.css';
import s from './App.module.css'
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";

function App() {
    return (
        <div className={s.app}>
            <Header/>
            <Main/>
            <Skills/>

        </div>
    );
}

export default App;

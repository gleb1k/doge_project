import Dogs from "./components/Dogs";
import { Routes, Route } from "react-router-dom"
import Dogeinfo from "./components/DogeInfo"

function App() {

    return (
        <>
            <Routes>
                <Route path='/' element={ <Dogs/>}/>
                <Route path='/about' element={ <Dogeinfo/>}/>
                <Route path='*' element ={ "not found 404"}/>
            </Routes>
        </>
    );

}

export default App;

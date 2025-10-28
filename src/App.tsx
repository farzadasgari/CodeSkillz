import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen">
                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    )
}

export default App

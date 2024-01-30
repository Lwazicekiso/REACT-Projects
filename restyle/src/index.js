
import ReactDOM from "react-dom/client";
import Nav from './pages/Nav';
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import Postpage from './pages/Postpage';
import About from  './pages/About';
import Missing from './pages/Missing';
import React from 'react';
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Nav />}>
                        <Route index element={<Home/>}/>
                        <Route path="Postpage" element={<Postpage/>}/>
                        <Route path="NewPost" element={<NewPost/>}/>
                        <Route path="About" element={<About/>}/>
                        <Route path="*" element={<Missing/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
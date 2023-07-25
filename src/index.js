import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom';
import './index.css';
// import App from './App';
const App=lazy(()=>import("./App"))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter> 
<Suspense fallback={<h2 style={{color:"slateblue",border:"2px solid black",borderRadius:"1rem",padding:"5px 8px"}}>Loading... Please wait...</h2>}>
<App />
</Suspense>
</BrowserRouter>
);

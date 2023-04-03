import { lazy, Suspense } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Section from "./Components/Section/Section";
import AboutGita from "./Components/AboutGita/AboutGita";
import BannerForChapter from "./Components/BannerForChapter/BannerForChapter";
import AboutBanner from "./Components/AboutBanner/AboutBanner";
import {Router,Routes, Route } from "react-router";
import Homepage from "./Homepage";
import { BrowserRouter } from "react-router-dom";
import ChapterPage from "./Components/Chapter/ChapterPage";
import VersePage from "./Components/VersePage/VersePage";

import Fade from "react-reveal/Fade"
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <>
<Routes>
<Route exact path="/" element={<Homepage/>}/>
<Route path="/AboutBhagavadGita" element={<AboutGita/>}/>
<Route path="/Chapter1/:id" element={<ChapterPage/>}>
<Route path=":verseN" element={<VersePage/>}/>
</Route>
<Route path="/Chapter2/:id" element={<ChapterPage/>}>
<Route path=":verseN" element={<VersePage/>}/>
</Route>
<Route path="/Chapter3/:id" element={<ChapterPage/>}>
<Route path=":verseN" element={<VersePage/>}/>
</Route>
<Route path="/Chapter4/:id" element={<ChapterPage/>}>
<Route path=":verseN" element={<VersePage/>}/>
</Route>
<Route path="/Chapter5/:id" element={<ChapterPage/>}>
<Route path=":verseN" element={<VersePage/>}/>
</Route>
<Route path="/Chapter6/:id" element={<ChapterPage/>}>
<Route path=":verseN" element={<VersePage/>}/>
</Route>
<Route path="/Chapter7/:id" element={<ChapterPage/>}>
<Route path=":verseN" element={<VersePage/>}/>
</Route>
<Route path="/Chapter8/:id" element={<ChapterPage/>}>
<Route path=":verseN" element={<VersePage/>}/>
</Route>
<Route path="/Chapter9/:id" element={<ChapterPage/>}>
<Route path=":verseN" element={<VersePage/>}/>
</Route>
<Route path="/Chapter10/:id" element={<ChapterPage/>}>
<Route path=":verseN" element={<VersePage/>}/>
</Route>
<Route path="/Chapter11/:id" element={<ChapterPage/>}>
<Route path=":verseN" element={<VersePage/>}/>
</Route>
<Route path="/Chapter12/:id" element={<ChapterPage/>}>
<Route path=":verseN" element={<VersePage/>}/>
</Route>
<Route path="/Chapter13/:id" element={<ChapterPage/>}>
<Route path=":verseN" element={<VersePage/>}/>
</Route>
<Route path="/Chapter14/:id" element={<ChapterPage/>}>
<Route path=":verseN" element={<VersePage/>}/>

</Route>
<Route path="/Chapter15/:id" element={<ChapterPage/>}>
<Route path=":verseN" element={<VersePage/>}/>
</Route>
<Route path="/Chapter16/:id" element={<ChapterPage/>}>
<Route path=":verseN" element={<VersePage/>}/>

</Route>
<Route path="/Chapter17/:id" element={<ChapterPage/>}>
<Route path=":verseN" element={<VersePage/>}/>

</Route>
<Route path="/Chapter18/:id" element={<ChapterPage/>}>
<Route path=":verseN" element={<VersePage/>}/>
</Route>
</Routes> 
<Fade bottom>
<Footer/>
</Fade>

    </>
  );
}

export default App;

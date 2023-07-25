import { useEffect, useState } from "react";
// import { useLocation } from "react-router";
import "./VersePage.css"
import verseHeading from "../Borders/verseHeadingBorder2.png"
import axios from "axios";
import { useLocation, useParams } from "react-router";

const IndexPage=({chapterNumber})=>{
let [verseData,setVerseData]=useState(null);

async function getVerse(){
let res=await axios.get(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterNumber}/verses/1/`,{
headers:{
'X-RapidAPI-Key': '156e4496d5msh2a6f3bce968503fp1f0a19jsndef5da931ac6',
'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
}
});
setVerseData(res.data)
console.log("verseData: ",res.data)
}

useEffect(()=>{
getVerse()
},[])

return(
<div className="versePageContainer">
 <h1 className="slokHeading">श्लोक {chapterNumber}.1</h1>
 {verseData ? <h3 className="slokText">{verseData.text}</h3>:<h3 style={{color:"white"}}>Loading...</h3>}
 <h2 style={{color:"white",textDecoration:"underline"}}>Word Meanings</h2>
 {
verseData ? <h3 style={{color:"white"}}>{verseData.word_meanings}</h3>:<h3 style={{color:"white"}}>Loading...</h3>
 }
 {verseData ? <div className="slokTranslationBox">
 <h2 className="text">Translations</h2>
 { verseData.translations.map((item,i)=>{
 if(i==5){
 return( 
 <>
 <h3 className="slokTranslation">{item.description}</h3>
  <h3 className="slokAuthor">By {item.author_name}</h3>
  </>
 )
 }
 else  if(i==6){
 return( 
 <>
 <h3 className="slokTranslation">{item.description}</h3>
  <h3 className="slokAuthor">By {item.author_name}</h3>
  </>
 )
 }
 })
 }
 </div>:<h3 style={{color:"white"}}>Loading...</h3>}
 <h1 style={{color:"blue",textDecoration:"underline"}}>Commentries</h1>
 {
verseData ? verseData.commentaries.map((item,i)=>{
 if(i==13){
 return(
 <>
  <h3 className="slokTranslation">{item.description}</h3>
  <h3 className="slokAuthor">By {item.author_name}</h3>
  </>
 )
 }
 else  if(i==14){
 return(
 <>
  <h3 className="slokTranslation">{item.description}</h3>
  <h3 className="slokAuthor">By {item.author_name}</h3>
  </>
 )
 }
 }):<h3 style={{color:"white"}}>Loading...</h3>
 }
 
</div>
)
}

export default IndexPage;
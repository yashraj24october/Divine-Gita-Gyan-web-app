import { createContext, useEffect, useState } from "react";
// import { useLocation } from "react-router";
import "./VersePage.css"
// import verseHeading from "../Borders/verseHeadingBorder2.png"
import axios from "axios";
import { useLocation, useParams } from "react-router";

const VersePage=()=>{
let {state}=useLocation();
let dataObj,chapterNumber;
if(state!=null){                           //managing state data bcz state can be null initially
let {data,chapter}=state;
dataObj=data;
chapterNumber=chapter;
}

let {verseN}=useParams()
return(
<div className="versePageContainer">
<h1 className="slokHeading">श्लोक {chapterNumber}.{verseN}</h1>
 {dataObj ? <h3 className="slokText">{dataObj.text}</h3>:<h2 style={{color:"slateblue",border:"2px solid black",borderRadius:"1rem",padding:"5px 8px"}}>Loading... Please wait...</h2>}
 {
 dataObj ? <div className="wordMeaningBox">
 <h2 className="text">Word Meanings</h2>
 <h3 style={{color:"brown",margin:"10px"}}>{dataObj.word_meanings}</h3></div>:<h2 style={{color:"slateblue",border:"2px solid black",borderRadius:"1rem",padding:"5px 8px"}}>Loading... Please wait...</h2>
 }
 {dataObj ? <div className="wordMeaningBox">
 <h2 className="text">Hindi Translations</h2>
 { dataObj.translations.map((item,i)=>{
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
 
 </div>:<h2 style={{color:"slateblue",border:"2px solid black",borderRadius:"1rem",padding:"5px 8px"}}>Loading... Please wait...</h2>}
 
 {dataObj ? <div className="wordMeaningBox">
 <h2 className="text">English Translations</h2>
 { dataObj.translations.map((item,i)=>{
 if(i==0){
 return( 
 <>
 <h3 className="slokTranslation">{item.description}</h3>
  <h3 className="slokAuthor">By {item.author_name}</h3>
  </>
 )
 }
 else  if(i==1){
 return( 
 <>
 <h3 className="slokTranslation">{item.description}</h3>
  <h3 className="slokAuthor">By {item.author_name}</h3>
  </>
 )
 }
  else  if(i==2){
 return( 
 <>
 <h3 className="slokTranslation">{item.description}</h3>
  <h3 className="slokAuthor">By {item.author_name}</h3>
  </>
 )
 }
  else  if(i==3){
 return( 
 <>
 <h3 className="slokTranslation">{item.description}</h3>
  <h3 className="slokAuthor">By {item.author_name}</h3>
  </>
 )
 }
 })
 }
 </div>:<h2 style={{color:"slateblue",border:"2px solid black",borderRadius:"1rem",padding:"5px 8px"}}>Loading... Please wait...</h2>}

 <div className="wordMeaningBox">
 <h1 className="text">Commentaries</h1>
 {
dataObj ? dataObj.commentaries.map((item,i)=>{
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
 }):<h2 style={{color:"slateblue",border:"2px solid black",borderRadius:"1rem",padding:"5px 8px"}}>Loading... Please wait...</h2>
 }
 </div>
</div>
)
}



export default VersePage;
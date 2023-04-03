import "./ChapterPage.css"
import { contextObj } from "../../Homepage";
import Header from "../Header/Header"
import VersePage from "../VersePage/VersePage"
import { Navigate, Outlet, Route, Routes, useLocation, useNavigate, useParams } from "react-router"
import { useContext, useEffect, useState } from "react";
import axios from "axios"
import BannerForVerse from "../BannerForVerse/BannerForVerse"
import { NavLink } from "react-router-dom"
import Nav from "../Nav/Nav"

const ChapterPage=()=>{
let {id}=useParams() //taking chapterNumber as Id from URL parameter using  useParams
let [chapterData,setData]=useState(null);
let [slokData,setSlok]=useState([]);
let [arr,setArr]=useState(null);
let [show,setShow]=useState(false);
let [showBtn,setShowBtn]=useState(false);
async function getData(){
if(id==1) 
{
//for previous btn
setShowBtn(false);
}
else{
setShowBtn(true);
}
const options = {
  headers: {
    'X-RapidAPI-Key': '156e4496d5msh2a6f3bce968503fp1f0a19jsndef5da931ac6',
    'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
  }
}
try{
let response=await axios.get(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${id}/`,options);
// console.log(response.data)
setData(response.data)//storing in chapterData state
let array=[];
for(let i =0;i<response.data.verses_count
;i++){
array.push(i);
}
setArr(array)
}
catch(error){
console.log(error)
}
}

useEffect(()=>{
getData()
},[id])
function getShow(s){
setShow(s);
}
let navigate=useNavigate();
function nextNavigate(){
navigate(`/Chapter${Number(id)+1}/${Number(id)+1}`)
// refreshFunc()
// window.location.reload(true);
}


function prevNavigate(){
navigate(`/Chapter${Number(id)-1}/${Number(id)-1}`);
// refreshFunc()
// window.location.reload(true);
}

return (
<>
<Header/>
<Nav/>

<div className="chapterBox">

{chapterData ? 
<div>
<h1 className="chapterHeading">अध्याय - {id}<br/> {chapterData.name}<br/>{chapterData.name_meaning}</h1></div>
 : <h2 style={{color:"slateblue",border:"2px solid black",borderRadius:"1rem",padding:"5px 8px"}}>Loading... Please wait...</h2>}
 {chapterData ? 
 <div>
<h3 className="chapterSummary">{chapterData.chapter_summary_hindi
}<br/><br/>{chapterData.chapter_summary
}</h3>
</div>
 :<h2 style={{color:"slateblue",border:"2px solid black",borderRadius:"1rem",padding:"5px 8px"}}>Loading... Please wait...</h2>}
{console.log("arr: ",arr)}
{arr && <> <h1 className="slokContainerTopic">अध्याय-{id} के श्लोक</h1> 
<h2 style={{fontStyle:"italic",color:"brown",margin:".5rem"}}> अध्याय-{id} में कुल {arr.length} श्लोक हैं</h2></>}
{/* <img src={chapterHeading} alt=""/> */}
{show && <h1 className="dialog">Go Below to Read Slok <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
</svg><br/>अपना श्लोक पढ़ने के लिए नीचे जाएं</h1>}
<div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",columnGap:"1rem",rowGap:".8rem",marginBottom:"2rem"}}>
{arr ?  arr.map((i)=>{
let btext=`श्लोक ${i+1}`
return (
<>
<BannerForVerse  fun={getShow} text={btext} chapterN={id} verseN={i+1}/>
</>
)
}):<h2 style={{color:"slateblue",border:"2px solid black",borderRadius:"1rem",padding:"5px 8px"}}>Loading... Please wait...</h2>
}
</div>

<Outlet/>



{ showBtn &&
<button className="button" style={{fontSize:"1.5rem",cursor:"pointer",position:"absolute",left:".5rem",bottom:"0rem",margin:".5rem"}} onClick={prevNavigate}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg>  Prev<br/>Chapter</button>
}
<button className="button" style={{fontSize:"1.5rem",cursor:"pointer",position:"absolute",right:".1rem",bottom:"-0.2rem",margin:".5rem"}} onClick={nextNavigate}>Next <br/> Chapter <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
</svg></button>
</div>
</>
)
}

export default ChapterPage;
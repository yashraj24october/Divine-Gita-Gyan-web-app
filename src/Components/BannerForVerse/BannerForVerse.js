import "./BannerForVerse.css"
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
const BannerForVerse=({fun,text,chapterN,verseN})=>{
let [verseData,setVerseData]=useState(null);
let [show,setShow]=useState(false);
const navigate=useNavigate();
function clickHandler(){
if(verseData!=null){
navigate(`/Chapter${chapterN}/${chapterN}/${verseN}`,{state:{
data:verseData,
chapter:chapterN,
verse:verseN
}
})
fun(true);
setTimeout(()=>{
fun(false);
},3500)
}

}
 async function getVerseData(){

try {
let res=await axios.get(`https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterN}/verses/${verseN}/`,{
headers:{
'X-RapidAPI-Key': '156e4496d5msh2a6f3bce968503fp1f0a19jsndef5da931ac6',
'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
}
});
setVerseData(res.data)
} catch (error) {
    
} 
}
useEffect(()=>{
getVerseData()
},[chapterN],[verseN])
return(
<>
<div className="banner" onClick={clickHandler}>
<h3 className="chapter">{text}</h3>
</div>
</>
)
}
export default BannerForVerse;
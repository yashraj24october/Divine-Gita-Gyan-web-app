import "./Nav.css"
import {useState } from "react";
import { useNavigate } from "react-router";
import { useParams} from "react-router";
const Nav=(props)=>{
let idOfChapter=useParams()
let {id}=idOfChapter;
// let dropDownRef=useRef();
let navigate=useNavigate()
// const switchChapter=()=>{
// if(window.location.pathname==dropDownRef.current.value){
// alert("On same Page")
// }
// else{
// navigate(dropDownRef.current.value)
// window.location.reload(true) //to reload page after
// }

return(
<>
<div className="navdesktop">
<button className="btn" onClick={()=>{navigate('/')}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
  <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
</svg> Home</button>
<h2 className="navText">जय श्री कृष्णा</h2>
</div>

</>
)
}

export default Nav;
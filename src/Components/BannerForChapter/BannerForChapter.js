import "./BannerForChapter.css"
import { useNavigate } from "react-router";


const BannerForChapter=({text,id})=>{
let navigate=useNavigate()
function clickHandler(){
// if(refresherFun!= null){
navigate(`/Chapter${id}/${id}`);
// }
}
return(
<>
<div className="box" onClick={clickHandler}>
<h3 className="chapter">{text}</h3>
</div>
</>)
}

export default BannerForChapter;
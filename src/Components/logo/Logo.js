import "./Logo.css"
import flute from "./flute.png"
const Logo=()=>{
return(
<div className="logo">
<h2 className="logoText">Divine Gita Gyan</h2>
<img src={flute} className="flute" alt=""></img>
</div>
)
}
export default Logo;
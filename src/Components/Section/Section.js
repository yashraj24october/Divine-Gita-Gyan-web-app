import "./Section.css"
import namaste from"./namaste.png"
import Zoom from "react-reveal/Zoom" /* For animation */
const Section=()=>
{
return(
<>
<div className="section1">
<Zoom>
<h2 style={{borderRadius:".8rem",padding:".5rem",border:"2px solid white",color:"yellow",position:"absolute",top:"0",background:"rgba(25, 0, 255, 0.288)",fontSize:"1.2rem"}}>ॐ नमो भगवते वासुदेवाय नमः</h2>
</Zoom>

<h1 className="heading1 heading">Welcome to Divine Gita Gyan</h1>
<br/>
<Zoom>
<h2 className="heading2 heading">दिव्य गीता ज्ञान में आपका स्वागत है 	<img src={namaste} style={{height:"3rem",position:"relative",top:"12px"}} alt=""></img></h2>
</Zoom>
<h3 className="quote">Receive the Divine Power of Srimad Bhagawad Gita</h3>
</div>
</>
)
}

export default Section;
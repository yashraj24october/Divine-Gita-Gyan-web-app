
import { useNavigate } from "react-router"
import "./AboutBanner.css"
const AboutBanner=()=>{
const navigate=useNavigate()

const clickHandler=()=>{
navigate("/AboutBhagavadGita")
}
return(
<>
<div className="aboutBanner" onClick={clickHandler}>
<h2 className="about">About Srimad bhagavad gita</h2>
</div>

</>
)
}
export default AboutBanner;
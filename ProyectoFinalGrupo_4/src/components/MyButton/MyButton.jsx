import App from "../../App";
import "./MyButton.css";
function MyButton({ title, onClick, className, icon }){
    return(
        <button className={`button ${className}`} onClick={onClick}><img src={icon} /> {title}</button>  
    )
}
export default MyButton;
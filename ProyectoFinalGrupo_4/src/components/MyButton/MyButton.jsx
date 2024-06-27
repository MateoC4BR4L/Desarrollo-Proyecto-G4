import App from "../../App";
import "./MyButton.css";
function MyButton({ title, onClick, id, className, icon, children }){
    return(
        <button id={id} className={`button ${className}`} onClick={onClick}><img src={icon} /> {title}{children}</button>  
    )
}
export default MyButton;
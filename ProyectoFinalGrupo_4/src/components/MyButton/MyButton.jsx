import App from "../../App";
import "./MyButton.css";
function MyButton({ title, onClick, className, icon, children }){
    return(
        <button className={`button ${className}`} onClick={onClick}><img src={icon} /> {title}{children}</button>  
    )
}
export default MyButton;
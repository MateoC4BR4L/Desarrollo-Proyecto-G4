import App from "../../App";
function MyButton({ title, onClick, className, icon }){
    return(
        <button className={`button ${className}`} onClick={onclick}><img src={icon} /> {title}</button>  
    )
}
export default MyButton;
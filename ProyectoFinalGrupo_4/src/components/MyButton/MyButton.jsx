import App from "../../App";
function MyButton({ title, onClick }){

    return(
        <button className="Button" onClick={onclick}>{title}</button>  
    );
}
export default MyButton;
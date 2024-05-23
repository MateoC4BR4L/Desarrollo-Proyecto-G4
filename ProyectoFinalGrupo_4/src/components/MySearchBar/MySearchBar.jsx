import App from "../../App";
function MySearchBar({ id }){
    return(
        <div className="SearchBar" id={id}>
            <input placeholder="Search"></input>
        </div>
    );
}
export default MySearchBar
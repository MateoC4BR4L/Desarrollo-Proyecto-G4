import App from "../../App";
function MyModal({title}){
    
    return(
        <div className="Modal">
            <h1 id="ModalTitle">{title}</h1>
            <p>Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. 
            Quia libero deleniti tempora obcaecati, 
            corrupti maxime delectus voluptatem qui 
            ratione sit accusamus magni nulla dolore 
            sunt minus atque, nobis cumque est.</p>
        </div>
    );
};

export default MyModal;
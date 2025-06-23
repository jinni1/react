import HandIcon from "./HandIcon";

function HandButton({ value, onClick}) {
    const HandleClick = () => onClick(value);
    return(
        <button onClick={HandleClick}>
            <HandIcon value = {value} /> 
        </button>
    )

}
export default HandButton;
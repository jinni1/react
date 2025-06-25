import HandIcon from "./HandIcon";
import './HandButton.css';


function HandButton({ value, onClick}) {
    const HandleClick = () => onClick(value);
    return(
        <button className='HandButton ' onClick={HandleClick}>
        <HandIcon className='HandButton-icon' value = {value} /> 
        </button>
    )
}
export default HandButton;
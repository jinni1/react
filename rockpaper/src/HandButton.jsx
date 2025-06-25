import HandIcon from "./HandIcon";

const style = {
  width: '166px',
  height: '166px',
  border: 'none',
  outline: 'none',
  textAlign: 'center',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  backgroundImage: `url('/purple.svg')`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
};


function HandButton({ value, onClick}) {
    const HandleClick = () => onClick(value);
    return(
        <button style={style} onClick={HandleClick}>
        <HandIcon value = {value} /> 
        </button>
    )
}
export default HandButton;
import './Button.css';

function Button({ children, onClick, color='blue', className='' }) {
    const classNames = `Button ${color} ${className}`; // 공백 -> 여러 개의 클래스
    return <button className={classNames} onClick={onClick}>{children}</button>
};

export default Button;
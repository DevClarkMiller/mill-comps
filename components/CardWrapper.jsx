import { useNavigate } from "react-router-dom"
const CardWrapper = ({itemRef, to, children, className, style, onMouseEnter, onMouseLeave, href}) =>{
    const navigate = useNavigate();

    const handleClick = () => {
        if (href) {
            window.open(href, "_blank");
        } else if (to) {
            navigate(to);
        }
    };

    return(
        <div
            ref={itemRef}
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave} 
            onClick={href || to ? handleClick : undefined} 
            className={`rounded-lg p-4 m-1 bg-white ${className} ${href || to ? 'hover:cursor-pointer' : ''}`} 
            style={style}
        >
            {children}
        </div>
    );
}
export default CardWrapper;

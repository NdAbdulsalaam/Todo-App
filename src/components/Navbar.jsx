import { useState, useEffect, useRef } from "react";
import handleOutsideClick from "./handleOutsideClick";

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    const ref = useRef();

    const handleClick = () => {
        return setDropdown((prev) => !prev)
    }

    // Setting state must be past as fxn when creating it as a component.
    handleOutsideClick(ref, dropdown, () => setDropdown(false));

    return (
        <nav>
            <ul>
                <li>Home</li> 
                <li>About</li>
                <li ref={ref}>
                    <button onClick={handleClick}>
                        Services <span>&#8595;</span>
                    </button>
                    {dropdown && (
                        <ul>
                            <li>Design</li>
                            <li>Development</li>
                        </ul>
                    )}
                </li>
           </ul>
        </nav>
    )
}

export default Navbar;
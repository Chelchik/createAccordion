import { useState } from "react";
import Accordion from "./components/acardion";

function IsMore({maxLength, text}) {
  const [isMore, setIsMore] = useState(false);
  const [isDark, setIsDark] = useState(false);
    
    function headClick() {
        setIsMore(!isMore)
    }

    function isDarkFunc() {
      setIsDark(!isDark);
    }

    return (
      <div className="root" style={{background: isDark ? "black" : "white"}}>
        <p className="text" style={{color: isDark ? "white" : "black"}}>
            {isMore ? text : text.substring(0, maxLength)}

            <span onClick={headClick} className="isMoreLink">
            {isMore ? "Less" : "...More"}
            
            </span>
        </p>

        <button onClick={isDarkFunc} className="isDarkBtn"style={{background: isDark ? "white" : "black", color: isDark ?"black": "white"}} >{isDark ? "Light" : "Dark"}</button>
      
        <Accordion />
      </div>
    );
}

export default IsMore;
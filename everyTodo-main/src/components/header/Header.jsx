import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

function Header() {

    let navigate = useNavigate();
    function handleClick() {
        navigate("/home");
    }
    return (<div>
        <div className="head">나의 투두리스트</div>
        <button className="inputButton mb-2" onClick={handleClick}>홈으로</button>
    </div>);

}

export default Header;
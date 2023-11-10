import React from "react";
import { useNavigate, useLocation} from "react-router-dom"
import { useRef } from "react";

import { LinkArea, LinkIcon } from "./styled";
export default ({title, icon, link}) => {

    const navigate = useNavigate();
    const location = useLocation();

    const isActive = location.pathname === link;
    const myRef = useRef()

    const handleLinkClick = (e) => {
        e.preventDefault();
        navigate(link)
    }

    return (
        <LinkArea data-tooltip-place="right" 
        data-tooltip-content={title} 
        data-tooltip-id="tip-right" 
        active={isActive} href={link} 
        onClick={handleLinkClick}>
            <LinkIcon src={icon}/>
        </LinkArea>
    )
}

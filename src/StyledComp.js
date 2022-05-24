import styled from "styled-components";

const Squ = styled.div`
width:${props => props.Width};
height: ${props => props.Height};
${props => props.dimension === 120 ? `width:120px; height:120px `: ""};
${props => props.dimension === 100 ? `width: 100px; height:100px`: ''};
${props => props.dimension === 80  ? `width:80px; height:80px;` : ''};
background-color: ${props => props.backgroundColor};
opacity: 0.5;
position: absolute;

/* full css statement change  */
${props => props.orientation === "top_right" ? `top: ${props.x}px; right: ${props.y}px;`: ''}
${props => props.orientation === "top_left" ? `top: ${props.x}px; left: ${props.y}px;`: ''}
${props => props.orientation === "bottom_left" ? `bottom: ${props.x}px; left: ${props.y}px;`: ''}
${props => props.orientation === "bottom_right" ? `bottom: ${props.x}px; right: ${props.y}px;`: ''}
`
export {Squ}
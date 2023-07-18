import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    /* other styles */
    html,
    body {
        height: 100%;
    }
    html{ font-size: 10px;}
    body{ font-size: 1.6rem}
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        background: papayawhip;
        background: -moz-linear-gradient(
            top,
            #f5f5dc 0%,
            #d2b48c 100%
        ); /* FF3.6-15 */
        background: -webkit-linear-gradient(
            top,
            #f5f5dc 0%,
            #d2b48c 100%
        ); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(
            to bottom,
            #f5f5dc 0%,
            #d2b48c 100%
        ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /*border:aqua dashed 3px; */
        /*color:papayawhip*/
    }
    li {
        list-style-type: none;
    }
`;

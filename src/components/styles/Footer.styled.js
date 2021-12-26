import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: ${({theme}) => theme.colors.footer};
    padding: 100px 0 60px;
    color: #fff;

    ul {
        padding-top: 10px;
        list-style-type: none;
    }

    ul li {
        margin-bottom: 20px;
        cursor: pointer;
    }

    p {
        text-align: right;
    }

    @media (max-width: ${({theme}) => theme.mobile}) {
        padding: 50px 25px 60px;
        img {
            display: block;
            margin: 0 auto;
        }
        ul {
            padding: 0;
        }
        p {
            text-align: center;
        }
    }
`
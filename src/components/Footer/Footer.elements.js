import styled from 'styled-components';
import { FcBullish } from "react-icons/fc";
import { Link }  from 'react-router-dom';


export const FooterContainer = styled.div`
 background-color:#5585b5;
 padding: 4rem 0 2rem 0;
 display: flex;
 flex-direction: column;
 justify-content: column;
 justify-content: center;
 align-items: center;
`;

export const FooterSubscription = styled.section`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 text-align: center;
 margin-bottom: 24px;
 padding: 24px;
 color: #fff;
`;

export const FooterSubHeading = styled.p`
 font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,  sans-serif;
 margin-bottom: 24px;
 font-size: 24px;
`;

export const FooterSubText  = styled.p`
 margin-bottom: 24px;
 font-size: 20px;

`;


export const SocialMedia = styled.section`
 max-width: 1000px;
 width: 100%;

`;

export const SocialMediaWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 90%;
max-width: 1000px;
margin: 40px auto 0 auto;

@media screen and (max-width: 820px) {
    flex-direction: column;
}
`;



export const SocialLogo = styled(Link)`
color: #fff;
justify-self: start;
cursor: pointer;
text-decoration: none;
font-size: 1.8rem;
display: flex;
align-items: center;
margin-bottom: 16px;
`;


export const SocialIcon = styled(FcBullish)`
margin-right: 0px;
`

export const WebsiteRights = styled.small`
color: #fff;
margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 240px;
`;


export const SocialIconLink = styled.a`
color: #fff;
font-size: 24px;
`;
import styled from "styled-components";

export const Container = styled.nav`
   width: 300px;
   margin-top: 30px;
   //background-color: lightpink;
   @media (max-width: 767.98px) {
      width: 100vw;
   }
`;

export const NavUl = styled.ul`
   list-style: none;
   display: flex;
   flex-direction: column;
   margin-bottom: 1rem;
`;
export const CategoriaTitle = styled.h3`
   color: #858585;
   font-size: 1rem;

`;

export const NavUlLi = styled.li`
   margin: 10px 0;
   display: flex;
   font-size: 1.2rem;
   justify-content: space-between;
   cursor: pointer;
   &:hover {
      opacity: 0.6;
   }
`;
export const IconSpan = styled.span`
   display: flex;
   align-items: center;
   margin-right: 0.5rem;
   @media (max-width: 767.98px) {
      > svg {
         font-size: 1.5rem;
      }
   }
`;
export const IconSpanLink = styled.span`
   color: #2d2dff;

`;
export const SocialLink = styled.a`
   color: white;
   text-decoration: none;
   margin-left: 0.5rem;

`;

import styled from "styled-components";

export const Container = styled.header`
   width: fit-content;
   min-width: 24px;
   height: 100vh;
   //padding: 20px;
   background-color: #1e192c;
   border-right: 1px solid lightgray;
   position: fixed;

   > svg {
      font-size: 1.4rem;
      position: fixed;
      right: 20px;
      top: 20px;
      //z-index: 100;
   }
   @media (max-width: 991.98px) {
      //position: absolute;
      height: 2rem;
      width: 100%;
   }
   @media (min-width: 991.98px) {
      //width: 100%;
      > svg {
         display: none;
      }
   }
`;

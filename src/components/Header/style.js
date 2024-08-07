import styled from "styled-components";

export const Container = styled.header`
   width: fit-content;
   min-width: 24px;
   height: 100vh;
   padding: 20px;
   //background-color: darkblue;
   border-right: 1px solid lightgray;
   > svg {
      font-size: 1.4rem;
      position: fixed;
      z-index: 100;
   }
   @media (max-width: 991.98px) {
      position: absolute;
      transition: width 21s ease-in-out;
   }
   @media (min-width: 808px) {
      //width: 100%;

      > svg {
         display: none;
      }
   }
`;

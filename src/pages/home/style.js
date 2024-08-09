import styled from "styled-components";

export const Container = styled.main`
   width: 100vw;
   height: 100vh;
   background-color: darkgreen;
   display: flow-root;
   margin: 0 auto;
`;
export const ProfileContainer = styled.div`
   display: flex;
`;

export const ImageProfile = styled.div`
   width: 150px;
   height: 150px;
   > img {
      height: 100%;
      width: 100%;
      border-radius: 20px;
   }
`;
export const SkillsProfile = styled.div`
   font-size: 1.2rem;
   background-color: #0b112b;
   > span {
      margin-right: 0.5rem;
   }
`;
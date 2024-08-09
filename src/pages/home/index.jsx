import { Container, ImageProfile, ProfileContainer } from "./style";
import profilePic from "../../assets/image.png";
const Home = () => {
   return (
      <Container>
         <ProfileContainer>
            <ImageProfile>
               <img src={profilePic} alt="profilePic" />
            </ImageProfile>
         </ProfileContainer>
      </Container>
   );
};
export { Home };

import {
   Container,
   NavUl,
   NavUlLi,
   CategoriaTitle,
   IconSpanLink,
   IconSpan,
   SocialLink,
} from "./style";
import {
   MdHome,
   MdBook,
   MdComputer,
   MdFolder,
   MdNewspaper,
   MdArrowOutward,
} from "react-icons/md";
import {
   FaLinkedin,
   FaTwitter,
   FaGithub,
   FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({isOpen}) => {

   return (
      <Container isOpen={isOpen}>
      {isOpen && (
         <>

         </>
      )}
         <NavUl>
            <CategoriaTitle>Me</CategoriaTitle>
            <NavUlLi>
               <IconSpan>
                  {" "}
                  <MdHome />
                  <SocialLink href="https://google.com" target="_blank">
                     {" "}
                     Home
                  </SocialLink>
               </IconSpan>
            </NavUlLi>
            <NavUlLi>
               <IconSpan>
                  {" "}
                  <MdBook />
                  <SocialLink href="https://google.com" target="_blank">
                     {" "}
                     About me
                  </SocialLink>
               </IconSpan>
            </NavUlLi>
            <NavUlLi>
               <IconSpan>
                  {" "}
                  <MdFolder />
                  <SocialLink href="https://google.com" target="_blank">
                     {" "}
                     Projects
                  </SocialLink>
               </IconSpan>
            </NavUlLi>
            <NavUlLi>
               <IconSpan>
                  {" "}
                  <MdComputer />
                  <SocialLink href="https://google.com" target="_blank">
                     {" "}
                     Stack and uses
                  </SocialLink>
               </IconSpan>
            </NavUlLi>
         </NavUl>
         <NavUl>
            <CategoriaTitle>Journal</CategoriaTitle>
            <NavUlLi>
               <IconSpan>
                  {" "}
                  <MdBook className="icon" />
                  <SocialLink href="https://google.com" target="_blank">
                     {" "}
                     Guestbook
                  </SocialLink>
               </IconSpan>
            </NavUlLi>
            <NavUlLi>
               <IconSpan>
                  {" "}
                  <MdNewspaper />
                  <SocialLink href="https://google.com" target="_blank">
                     {" "}
                     Blog
                  </SocialLink>
               </IconSpan>
            </NavUlLi>
         </NavUl>
         <NavUl>
            <CategoriaTitle>Socials</CategoriaTitle>
            <NavUlLi>
               <IconSpan>
                  {" "}
                  <FaGithub />{" "}
                  <SocialLink href="https://google.com" target="_blank">
                     {" "}
                     Github{" "}
                  </SocialLink>
               </IconSpan>
               <IconSpanLink>
                  <MdArrowOutward />
               </IconSpanLink>
            </NavUlLi>
            <NavUlLi>
               <IconSpan>
                  {" "}
                  <FaLinkedin />
                  <SocialLink href="https://google.com" target="_blank">
                     {" "}
                     Linkedin
                  </SocialLink>
               </IconSpan>
               <IconSpanLink>
                  <MdArrowOutward />
               </IconSpanLink>
            </NavUlLi>
            <NavUlLi>
               <IconSpan>
                  {" "}
                  <FaTwitter />
                  <SocialLink href="https://google.com" target="_blank">
                     {" "}
                     X/Twitter
                  </SocialLink>
               </IconSpan>
               <IconSpanLink>
                  <MdArrowOutward />
               </IconSpanLink>
            </NavUlLi>
            <NavUlLi>
               <IconSpan>
                  {" "}
                  <FaEnvelope />
                  <SocialLink href="https://google.com" target="_blank">
                     {" "}
                     Email
                  </SocialLink>
               </IconSpan>
               <IconSpanLink>
                  <MdArrowOutward />
               </IconSpanLink>
            </NavUlLi>
         </NavUl>
      </Container>
   );
};
export { Sidebar };

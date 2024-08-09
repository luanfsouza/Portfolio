import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Sidebar } from "../Sidebar";
import { Container } from "./style";
import { MdClose } from "react-icons/md";
import { useMediaQuery } from "react-responsive";

const Header = () => {
   const [siderbar, setSiderbar] = useState(false);
   const isDesktop = useMediaQuery({ query: "(min-width: 1224px)" });

   const showSidebar = () => setSiderbar(!siderbar);
   return (
      <Container>
         {siderbar ? (
            <MdClose onClick={showSidebar} />
         ) : (
            <FaBars onClick={showSidebar} />
         )}
         <Sidebar isOpen={siderbar} />
         {/* {siderbar && !isDesktop && <Sidebar />}
         {isDesktop && <Sidebar />} */}
      </Container>
   );
};

export { Header };

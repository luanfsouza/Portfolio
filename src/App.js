import { Header } from "./components/Header";
import { Home } from "./pages/home";
import { Projects } from "./pages/projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
   return (
      <>
         <Header />
         <Router>
            <Routes>
               <Route path="/" Component={Home} />
               <Route path="/projects" element={<Projects />} />
            </Routes>
         </Router>
      </>
   );
}

export default App;

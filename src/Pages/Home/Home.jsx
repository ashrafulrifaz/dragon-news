import Breaking from "../../Components/Breaking/Breaking";
import Content from "../../Components/Content/Content";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {

   return (
      <div className="max-w-6xl mx-auto">
         <Header></Header>
         <Breaking></Breaking>
         <Navbar></Navbar>
         <Content></Content>
      </div>
   );
};

export default Home;
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import RightSideBar from "../../Components/RightSideBar/RightSideBar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";


const Details = () => {
   const {id} = useParams()
   const {newses} = useContext(AuthContext)
   const currentNews = newses.map(news => news.includes(id))
   console.log(currentNews, id, newses);

   return (
      <div className="max-w-6xl mx-auto">
         <Header></Header>
         <div className="grid grid-cols-4 gap-5 py-10">
            <div className="col-span-3">
               <h2 className="text-lg text-primary font-medium">Dragon News</h2>
               <div className="border border-[#E7E7E7] rounded-md p-5 mt-4">
                  <h1>hello</h1>
               </div>
            </div>
            <div>
               <RightSideBar></RightSideBar>
            </div>
         </div>
      </div>
   );
};

export default Details;
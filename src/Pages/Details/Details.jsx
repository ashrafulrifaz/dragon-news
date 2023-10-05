import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import RightSideBar from "../../Components/RightSideBar/RightSideBar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";
import backIcon from '../../assets/arrow.png'
import NewsCard from "../../Components/NewsBar/NewsCard";
import DetailsCard from "./DetailsCard";


const Details = () => {
   const {id} = useParams()
   const {newses} = useContext(AuthContext)
   const currentNews = newses.find(news => news._id === id)
   const {title, rating, total_view, author, details, image_url, _id} = currentNews

   return (
      <div className="max-w-[95%] md:max-w-[85%] mx-auto">
         <Header></Header>
         <div className="grid grid-cols-4 gap-5 py-10">
            <div className="col-span-3">
               <h2 className="text-lg text-primary font-medium">Dragon News</h2>
               <div className="border border-[#E7E7E7] rounded-md p-5 mt-4 space-y-5">
                  <img src={image_url} alt="" />
                  <h2 className="text-xl font-bold text-primary">{title}</h2>
                  <p className="text-second">{details}</p>
                  <button className="text-white bg-[#D72050] flex gap-2 items-center capitalize py-2 px-6 font-medium"><img className="w-5" src={backIcon} /><span>all news in this category</span></button>
               </div>
               <div className="mt-5">
                  <h2 className="text-xl text-primary font-medium">Editors Insight</h2>
                  <div className="mt-3 grid grid-cols-3 gap-3">
                     {
                        newses.map(news => <DetailsCard key={news._id} news={news}></DetailsCard>).slice(8, 11)
                     }
                  </div>
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
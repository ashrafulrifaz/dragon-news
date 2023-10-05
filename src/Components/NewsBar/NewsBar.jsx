import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";
import NewsCard from "./NewsCard";
import notFound from '../../assets/not found.gif'
// import { useState } from "react";

const NewsBar = () => {
   const {newses, matchesID} = useContext(AuthContext)
   // const [catNews, setCatNews] = useState([])
   
   const currentNews = newses.filter(news => matchesID === news.category_id)

   return (
      <div className="col-span-2 space-y-3">
         <h2 className="text-lg font-medium">Dragon News Home</h2>
         {
            currentNews.length > 0 ? (
               currentNews.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
               )
               : matchesID === '0' ? (
                  newses.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
               )
               : matchesID === null ?(
                  newses.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
               )
               : (
                  <div className="py-10">
                     <p className="text-center text-2xl font-medium">Opps! No News Found <img className="w-1/4 mx-auto" src={notFound} /></p>
                  </div>
               )
         }
      </div>
   );
};

export default NewsBar;
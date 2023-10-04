import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";
import NewsCard from "./NewsCard";

const NewsBar = () => {
   const {newses} = useContext(AuthContext)

   return (
      <div className="col-span-2 space-y-3">
         <h2 className="text-lg font-medium">Dragon News Home</h2>
         {
            newses.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
         }
      </div>
   );
};

export default NewsBar;
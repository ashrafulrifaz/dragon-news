import LeftSideBar from "../LeftSideBar/LeftSideBar";
import NewsBar from "../NewsBar/NewsBar";
import RightSideBar from "../RightSideBar/RightSideBar";

const Content = () => {
   return (
      <div className="grid grid-cols-4 gap-5">
         <LeftSideBar></LeftSideBar>
         <NewsBar></NewsBar>
         <RightSideBar></RightSideBar>
      </div>
   );
};

export default Content;
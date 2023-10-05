import { useEffect, useState } from "react";
import Categories from "../Categories/Categories";
import firstImage from '../../assets/1.png'
import secondImage from '../../assets/2.png'
import thirdImage from '../../assets/3.png'
import calenderImage from '../../assets/calender.png'

const LeftSideBar = () => {
   const [categoryData, setCategoryData] = useState([])

   useEffect(() => {
      fetch('categories.json')
         .then(res => res.json())
         .then(data => setCategoryData(data))
   }, [])

   return (
      <div className="sticky top-0">
         <h4 className="text-lg font-medium">All Category</h4>
         <ul className="space-y-3 mt-4">
            {
               categoryData.map(data => <Categories key={data.id} data={data}></Categories>)
            }
         </ul>
         <div className="mt-5 space-y-3">
            <div className="space-y-3">
               <img src={firstImage} alt="" />
               <h2 className="text-primary text-lg font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
               <div className="flex gap-3 items-center">
                  <span className="font-medium text-primary">Sports</span>
                  <img src={calenderImage} alt="calendar" className="w-5 h-5" />
                  <span className="text-third font-medium">Jan 4, 2022</span>
               </div>
            </div>
            <div className="space-y-3">
               <img src={secondImage} alt="" />
               <h2 className="text-primary text-lg font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
               <div className="flex gap-3 items-center">
                  <span className="font-medium text-primary">Sports</span>
                  <img src={calenderImage} alt="calendar" className="w-5 h-5" />
                  <span className="text-third font-medium">Jan 4, 2022</span>
               </div>
            </div>
            <div className="space-y-3">
               <img src={thirdImage} alt="" />
               <h2 className="text-primary text-lg font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
               <div className="flex gap-3 items-center">
                  <span className="font-medium text-primary">Sports</span>
                  <img src={calenderImage} alt="calendar" className="w-5 h-5" />
                  <span className="text-third font-medium">Jan 4, 2022</span>
               </div>
            </div>
         </div>
      </div>
   );

};

export default LeftSideBar;
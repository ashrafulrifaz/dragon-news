import Facebook from '../../assets/Facebook.png';
import Twitter from '../../assets/Twitter.png';
import Instagram from '../../assets/Instagram.png';
import Zone1 from '../../assets/qZone1.png';
import Zone2 from '../../assets/qZone2.png';
import Zone3 from '../../assets/qZone3.png';

const RightSideBar = () => {
   return (
      <div>
         <div className="space-y-3">
            <h2 className="text-lg text-primary font-medium">Login With</h2>
            <button className="text-blue-500 font-medium border border-blue-500 rounded py-1 w-full">Login with Google</button>
            <button className="text-primary font-medium border border-primary rounded py-1 w-full">Login with Github</button>
         </div>
         <div className="space-y-3 mt-5">
            <h2 className="text-lg text-primary font-medium">Find Us On</h2>
            <div className='border border-[#E7E7E7] rounded'>
               <a href="https://facebook.com" className='w-full border-b border-[#E7E7E7] flex gap-3 items-center p-3'>
                  <img src={Facebook} alt="" />
                  <span className='text-second'>Facebook</span>
               </a>
               <a href="https://x.com" className='w-full border-b border-[#E7E7E7] flex gap-3 items-center p-3'>
                  <img src={Twitter} alt="" />
                  <span className='text-second'>Twitter</span>
               </a>
               <a href="https://instagram.com" className='w-full flex gap-3 items-center p-3'>
                  <img src={Instagram} alt="" />
                  <span className='text-second'>Instagram</span>
               </a>
            </div>
         </div>
         <div className="space-y-3 mt-5 bg-[#F3F3F3] p-3">
            <h2 className="text-lg text-primary font-medium">Q-Zone</h2>
            <img src={Zone1} alt="Zone" />
            <img src={Zone2} alt="Zone" />
            <img src={Zone3} alt="Zone" />
         </div>
         <div className="mt-5 space-y-5 px-6 py-16 text-center font-bold text-white" id='add-banner'>
            <h2 className='text-2xl '>Create an Amazing Newspaper</h2>
            <p className='font-normal'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
            <button className='text-white bg-[#D72050] py-3 px-4 font-medium'>Learn More</button>
         </div>
      </div>
   );
};

export default RightSideBar;
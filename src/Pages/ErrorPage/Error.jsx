import { Link } from 'react-router-dom';
import ErrorImage from '../../assets/404.jpg'

const Error = () => {
   return (
      <div className='text-center min-h-screen'>
         <img src={ErrorImage} className='w-full md:w-1/2 mx-auto mb-2 py-10' alt="404" />
         <Link className='text-white bg-[#D72050] py-2 px-5' to="/">Back to Home</Link>
      </div>
   );
};

export default Error;
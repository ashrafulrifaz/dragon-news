import { Link } from 'react-router-dom';
import ErrorImage from '../../assets/404.jpg'

const Error = () => {
   return (
      <div className='text-center'>
         <img src={ErrorImage} className='w-1/2 mx-auto mb-12' alt="404" />
         <Link className='text-white bg-[#D72050] py-2 px-5' to="/">Back to Home</Link>
      </div>
   );
};

export default Error;
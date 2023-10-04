import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {

   return (
      <div className='text-center py-7'>
         <Link to="/"><img src={Logo} alt="LOGO" className='w-2/6 mx-auto' /></Link>
         <p className='text-second mt-3 mb-2'>Journalism Without Fear or Favour</p>
         <p className='text-lg text-second'>{moment().format(`dddd, MMMM DD, YYYY`)}</p>
      </div>
   );
};

export default Header;
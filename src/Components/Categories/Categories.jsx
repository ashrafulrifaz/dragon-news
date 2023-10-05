import PropTypes from 'prop-types';
import './Categories.css'
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";
import { NavLink } from 'react-router-dom';

const Categories = ({data}) => {
   const {setMatchesID} = useContext(AuthContext)
   const {name, id} = data;

   const handleCategoryNews = () => {
      setMatchesID(id)
   }

   return (
      <li>
         <NavLink onClick={handleCategoryNews}>{name}</NavLink>
      </li>
   );
};

Categories.propTypes = {
   data: PropTypes.object.isRequired,
}

export default Categories;
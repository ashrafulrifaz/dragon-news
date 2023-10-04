import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Categories.css'
// import { useState } from 'react';

const Categories = ({data}) => {
   // const [catId, setCatId] = useState(0)
   const {name, id} = data;

   // const handleNews = () => {
   //    setCatId(id)
   // }

   return (
      <li>
         <NavLink>{name}</NavLink>
      </li>
   );
};

Categories.propTypes = {
   data: PropTypes.object.isRequired,
}

export default Categories;
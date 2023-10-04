import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import viewImage from '../../assets/view.png'
import ratingImage from '../../assets/star.png'
import emptyRatingImage from '../../assets/empty-star.png'
import shareImage from '../../assets/share.png'
import bookmarkImage from '../../assets/bookmark.png'
import Rating from 'react-rating';

const NewsCard = ({news}) => {
   const {title, rating, total_view, author, details, image_url, _id} = news

   return (
      <div className='rounded-md border border-[#F3F3F3]'>
         <div className="p-3 flex justify-between items-center bg-[#F3F3F3]">
            <div className="flex gap-2">
               <img src={author.img} className='w-10 h-10 rounded-full' alt="author" />
               <div>
                  <h3 className='text-primary font-medium'>{author.name}</h3>
                  <p className='text-sm text-second'>{author.published_date}</p>
               </div>
            </div>
            <div className="flex gap-2">
               <img src={bookmarkImage} className='w-5' alt="bookmark" />
               <img src={shareImage} className='w-5' alt="share" />
            </div>
         </div>
         <div className="p-3 space-y-4">
            <h2 className='text-primary text-lg font-semibold'>{title}</h2>
            <img src={image_url} className='w-full h-' alt="thumbnail" />
            {
               details.length > 250 ? 
               <p className='text-second'>{details.slice(0, 260)}<span>...</span> <Link id='reg-btn' to={`/news/${_id}`}>Read More</Link></p>
               : 
               <p className='text-second'>{details}</p>
            }
            <hr />
            <div className="flex justify-between items-center">
               <div className='flex gap-2' id='rating'>
                  <Rating
                     emptySymbol={<img src={emptyRatingImage} className="icon" />}
                     fullSymbol={<img src={ratingImage} className="icon" />}                   
                     initialRating={5}
                     readonly
                  />
                  <p className='text-second text-sm mt-0.5'>{rating.number}</p>
               </div>
               <div className='flex gap-2 items-center'>
                  <img src={viewImage} className='w-4 h-3' alt="view" />
                  <p className='text-second text-sm'>{total_view}</p>
               </div>
            </div>
         </div>
      </div>
   );
};

NewsCard.propTypes = {
   news: PropTypes.object.isRequired,
}

export default NewsCard;
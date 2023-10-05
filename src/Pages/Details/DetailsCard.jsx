import calendarImage from '../../assets/calender.png';

const DetailsCard = ({news}) => {
   const {image_url, title, author} = news

   return (
      <div className='space-y-3'>
         <img src={image_url} alt="" />
         <h2 className='text-lg text-primary font-semibold'>{title}</h2>
         <p className="flex gap-3 items-center">
            <img src={calendarImage} className='w-5 h-5' alt="" />
            <span className='text-third'>{author?.published_date}</span>
         </p>
      </div>
   );
};

export default DetailsCard;
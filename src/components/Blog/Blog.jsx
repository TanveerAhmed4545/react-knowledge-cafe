import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
    // console.log(blog);
    const {title,cover,reading_time,author,author_img,posted_date,hashtags,id} = blog;
    return (
        <div className='mb-20'>

            <img className='rounded-lg w-full' src={cover}  />

            <div className='flex justify-between items-center'>

                <div className='flex items-center py-6'>

                    <img className='w-16 h-16 rounded-full ' src={author_img} alt="author-img" />

                    <div className='ml-6'>
                        <h2 className='font-bold text-2xl'>{author}</h2>
                        <p className='text-[#11111199]'>{posted_date}</p>

                    </div>

                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)} className='ml-2 text-red-600 text-2xl'><CiBookmark></CiBookmark></button>



                </div>
            </div>
            <h4 className='text-4xl mb-4'>{title}</h4>
            <p>{
                hashtags.map((hash,idx)=> <span className='mr-2' key={idx}> <a href=''>{hash} </a> </span>)
                }</p>

                <button className='mt-4 text-[#6047EC]' onClick={()=>handleMarkAsRead(reading_time,id)}>Mark as read</button>
            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func
}

export default Blog;
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    // console.log(bookmarks);
    
    return (
        <div className='my-4 ml-4 p-4 bg-gray-300'>
            <div className='text-center my-3 text-[#6047EC]'>
                <h3 className='text-4xl'>Spent time on read : {readingTime} min</h3>
            </div>
            <h2 className='text-3xl text-center '>Bookmarks Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark)=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;
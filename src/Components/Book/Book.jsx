import PropTypes from 'prop-types'; 
import { CiBookmark } from "react-icons/ci";

const Book = ({book,handelAddToBookMark}) => {
    const {cover,title,author,author_img,posted_date,reading_time,hashtags} = book;
    return (
        <div className=' border-2 p-2 border-purple-400 rounded-md'>
            <div className='flex justify-center'>
                <img src={cover} alt={`Cover picture of the title ${title}`} className='w-full h-40 rounded-md'/>
            </div>
            <div className='mt-4'>
                {/* author section start */}
                <div className='flex justify-between items-center'>
                <div className='flex items-center gap-1'>
                    <img src={author_img} alt="" className='w-12 rounded-full'/>
                    <div>
                        <h1 className='font-bold font-serif'>{author}</h1>
                        <p className='text-sm'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <p>{reading_time}</p>
                    <button onClick={()=>handelAddToBookMark(book)}><CiBookmark size={20}/></button>
                </div>
                </div>
                {/* author section close  */}
                <div className='mt-6 space-y-2'>
                    <h1 className='text-xl font-bold font-serif'>{title}</h1>
                    <p className='text-blue-500'>{hashtags}</p>
                </div>

            </div>
            
        </div>
    );
};

export default Book;

Book.propTypes = {
    book: PropTypes.object.isRequired,
    handelAddToBookMark:PropTypes.func.isRequired
}
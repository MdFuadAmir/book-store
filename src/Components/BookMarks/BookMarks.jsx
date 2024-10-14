import PropTypes from 'prop-types'; 

const BookMarks = ({bookMarks, readingTime}) => {
    return (
        <div className=" my-6 w-full md:w-1/3 rounded-md">
                <h1 className="text-xl font-bold text-purple-700 p-2 border-2 border-purple-400 bg-purple-100 rounded-md">Total Reading Time: {readingTime} min</h1>
                <div className="border-blue-500 border-2 rounded-md my-6  p-2 bg-gray-200">
                    <h1 className="text-xl font-bold mb-6">Total Bookmark Books: <span className='text-green-500'>{bookMarks.length}</span></h1>
                    <div className="p-2 border border-purple-500 rounded-md space-y-3">
                        {
                            bookMarks.map((book, idx) => <h1 key={idx} className='p-2 bg-white font-bold text-lg font-serif rounded-md'>{book.title}</h1>)
                        }     
                    </div>
                </div>
        </div>
    );
};
export default BookMarks;
BookMarks.propTypes = {
    bookMarks:PropTypes.array.isRequired,
    readingTime:PropTypes.number.isRequired
}
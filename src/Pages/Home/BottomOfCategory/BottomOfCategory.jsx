import './BottomOfCategory.css';

const BottomOfCategory = () => {
    return (
        <div className="grid grid-cols-3 text-white border border-teal-600 mb-20">
            <div className="p-10 bg-red ">
                <p className='text-2xl font-bold pb-4'>School News</p>
                <p>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed...</p>
                <button>see more</button>
            </div>
            <div  className="p-10 bg-yellow">
                <p className='text-2xl font-bold pb-4'>Opening Hours</p>
                <div className='flex space-x-24 py-2'>
                    <p>Monday - Friday</p>
                    <p>8.00 - 17.00</p>
                </div>
                <div className='flex border-t-2 py-2 border-slate-400 space-x-[150px]'>
                    <p>Saturday</p>
                    <p>9.30 - 17.30</p>
                </div>
                <div className='flex border-t-2 border-slate-400 py-2 space-x-[160px]'>
                    <p>Sunday</p>
                    <p>9.30 - 15.30</p>
                </div>
                
                
            </div>
            <div  className="p-10 background-color">
                <p className='text-2xl font-bold pb-4'>Find your course</p>
                <p>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed...</p>
                <button>see more</button>
            </div>
        </div>
    );
};

export default BottomOfCategory;
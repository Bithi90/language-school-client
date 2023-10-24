/* eslint-disable react/prop-types */


const InstructorCard = ({ item }) => {

    const { name, image, email } = item;


    return (
        <div className="card w-74 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl h-[142px] w-[214]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{email}</p>
                <div className="card-actions">
                    <button className="btn text-white bg-teal-500 btn-success">see classes</button>
                </div>
            </div>
        </div>
    );

};
export default InstructorCard;
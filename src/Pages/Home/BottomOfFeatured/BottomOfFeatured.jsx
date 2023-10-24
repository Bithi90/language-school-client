

const BottomOfFeatured = () => {
    return (
        <div className="bg-amber-300 flex  py-10 space-x-reverse mb-20 w-[1280px]">
            <h2 className=" ps-10 font-semibold text-white pe-[500px] text-2xl">Subscribe to our Newsletter</h2>
            <div className=" ps-10 font-semibold text-white ps-74  text-lg">
                <div className="form-control">
                    
                    <label className="input-group">
                        <span className="text-stone-400">Email</span>
                        <input type="text" placeholder="info@site.com" className="input  input-bordered" />
                    </label>
                </div>

            </div>
        </div>
    );
};

export default BottomOfFeatured;
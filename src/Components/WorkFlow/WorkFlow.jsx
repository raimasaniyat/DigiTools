
const WorkFlow = () => {
    return (
        <div className="bg-linear-to-r from-violet-800 to-purple-600  py-20 text-center text-white">
            <div className="w-125 mx-auto">
                <h3 className="text-3xl font-bold tracking-tighter mb-2">
                    Ready to Transform Your Workflow?
                </h3>
                <p>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4 my-4 justify-center">
                <button className="bg-white px-5 py-2  rounded-full font-semibold text-lg  flex items-center gap-3 group text-purple-700 border border-transparent hover:bg-transparent hover:text-white hover:border hover:border-white">
                Explore Products
                </button>
                <button className="bg-transparent to-purple-500 px-5 py-2 rounded-full font-semibold text-lg  flex items-center gap-3 group text-white border border-white hover:bg-white hover:text-purple-700 hover:border hover:border-purple-700">
                Watch Demo
                </button>
            </div>
            
                <p>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default WorkFlow;
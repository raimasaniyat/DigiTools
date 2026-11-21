import user from '../../assets/user.png'
import packages from '../../assets/package.png'
import rocket from '../../assets/rocket.png'

const Steps = () => {
    return (
        <div className="py-20 bg-[#F9FAFC]">
            <div className="w-125 mx-auto text-center">
                <h3 className="text-4xl font-bold mb-2 ">Get Started in 3 Steps</h3>
                <p className='mb-10'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div>
                <div className='steps-parent flex justify-evenly max-w-7xl mx-auto'>
                    <div className="steps-wrap text-center bg-white py-20 px-6 relative rounded-[10px]">
                        <div className="steps-thumb flex justify-center bg-purple-200 w-25 h-25
                         p-5 rounded-full mx-auto">
                            <img src={user} alt="user" />
                        </div>
                        <div className="steps-content">
                            <h6 className='my-4 text-2xl font-bold'>Create Account</h6>
                            <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                        <div className="steps-lebel bg-linear-to-r from-violet-800 to-purple-600 w-8 p-1 rounded-full text-white font-bold absolute top-5 right-5">
                            <p>01</p>
                        </div>
                    </div>
                    <div className="steps-wrap text-center bg-white py-20 px-6 relative rounded-[10px]">
                        <div className="steps-thumb flex justify-center bg-purple-200 w-25 h-25
                         p-5 rounded-full mx-auto">
                            <img src={packages} alt="user" />
                        </div>
                        <div className="steps-content">
                            <h6 className='my-4 text-2xl font-bold'>Choose Products</h6>
                            <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                        </div>
                        <div className="steps-lebel bg-linear-to-r from-violet-800 to-purple-600 w-8 p-1 rounded-full text-white font-bold absolute top-5 right-5">
                            <p>02</p>
                        </div>
                    </div>
                    <div className="steps-wrap text-center bg-white py-20 px-6 relative rounded-[10px]">
                        <div className="steps-thumb flex justify-center bg-purple-200 w-25 h-25
                         p-5 rounded-full mx-auto">
                            <img src={rocket} alt="user" />
                        </div>
                        <div className="steps-content">
                            <h6 className='my-4 text-2xl font-bold'>Start Creating</h6>
                            <p className='text-[#627382]'>Download and start using your premium tools immediately.</p>
                        </div>
                        <div className="steps-lebel bg-linear-to-r from-violet-800 to-purple-600 w-8 p-1 rounded-full text-white font-bold absolute top-5 right-5">
                            <p>03</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;
import user from '../../assets/user.png'

const Steps = () => {
    return (
        <div className="py-20 bg-[#F9FAFC]">
            <div className="w-125 mx-auto text-center">
                <h3 className="text-4xl font-bold mb-2 ">Get Started in 3 Steps</h3>
                <p>Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div>
                <div className='steps-parent'>
                    <div className="steps-wrap text-center bg-white py-20 px-6">
                        <div className="steps-thumb flex justify-center bg-purple-400 w-25 h-25
                         p-5 rounded-full mx-auto">
                            <img src={user} alt="user" />
                        </div>
                        <div className="steps-content">
                            <h6 className='my-4 text-2xl font-bold'>Create Account</h6>
                            <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                        <div className="steps-lebel bg-linear-to-r from-violet-800 to-purple-600 w-8 p-1 rounded-full text-white">
                            <p>01</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Steps;
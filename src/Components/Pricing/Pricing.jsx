
const Pricing = () => {
    return (
        <div className="py-20">
            <div className="w-125 mx-auto text-center">
                <h3 className="text-4xl font-bold mb-2 ">Simple, Transparent Pricing</h3>
                <p className='mb-10'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className="pricing-parent flex justify-evenly max-w-7xl mx-auto">
                <div className="pricing-wrap bg-[#F9FAFC] p-5 rounded-2xl">
                    <div className="pricing-title">
                        <h6 className="my-1.5 text-2xl font-semibold">Starter</h6>
                        <p className="text-[#627382]">Perfect for getting started</p>
                    </div>
                    <div className="pricing-pack">
                        <p className='text-[#627382]  my-2.5'><span className="text-black text-[28px] font-bold">$0</span>/month</p>
                        <ul className='text-[#627382]'>
                            <li>Access to 10 free tools</li>
                            <li>Basic templates</li>
                            <li>Community support</li>
                            <li>1 project per month</li>
                        </ul>
                    </div>
                    <div className="pricing-btn"><button className="bg-linear-to-r from-purple-800 to-purple-500 w-83 px-8 py-1.5 mt-13 rounded-full font-semibold text-lg  flex justify-center gap-3 group text-white border border-transparent">
                        Get Started Free
                    </button>
                    </div>
                </div>
                <div className="pricing-wrap relative rounded-2xl bg-linear-to-r from-violet-800 to-purple-600 p-5">
                    <div className="pricing-title">
                        <h6 className="my-1.5 text-2xl text-white font-semibold">Pro</h6>
                        <p className="text-zinc-200">Best for professionals</p>
                    </div>
                    <div className="pricing-pack">
                        <p className='text-zinc-200  my-2.5'><span className="text-white text-[28px] font-bold">29</span>/month</p>
                        <ul className='text-white'>
                            <li>EAccess to all premium tools</li>
                            <li>Unlimited templates</li>
                            <li>Priority support</li>
                            <li>Unlimited projects</li>
                            <li>Cloud sync</li>
                            <li>Advanced analytics</li>
                        </ul>
                    </div>
                    <div className="pricing-btn"><button className="bg-white w-83 px-8 py-1.5 mt-1 rounded-full font-semibold text-lg  flex justify-center gap-3 group text-purple-700 border border-transparent">
                        Start Pro Trial
                    </button>
                    </div>
                    <div className="w-28 p-1 absolute -top-4 left-36 bg-[#FEF3C6] text-center rounded-[25px]">
                        <p className="text-[#BB4D00]">Most Popular</p>
                    </div>
                </div>
                <div className="pricing-wrap rounded-2xl bg-[#F9FAFC] p-5">
                    <div className="pricing-title">
                        <h6 className="my-1.5 text-2xl font-semibold">Enterprise</h6>
                        <p className="text-[#627382]">For teams and businesses</p>
                    </div>
                    <div className="pricing-pack">
                        <p className='text-[#627382]  my-2.5'><span className="text-black text-[28px] font-bold">99</span>/month</p>
                        <ul className='text-[#627382]'>
                            <li>Everything in Pro</li>
                            <li>Team collaboration</li>
                            <li>Custom integrations</li>
                            <li>Dedicated support</li>
                            <li>SLA guarantee</li>
                            <li>Custom branding</li>
                        </ul>
                    </div>
                    <div className="pricing-btn"><button className="bg-linear-to-r from-purple-800 to-purple-500 w-83 px-8 py-1.5 mt-1 rounded-full font-semibold text-lg  flex justify-center  gap-3 group text-white border border-transparent">
                        Contact Sales
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
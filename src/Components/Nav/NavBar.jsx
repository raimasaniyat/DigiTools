import logo from '../../assets/DigiTools.png'

const NavBar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="nav-logo flex items-center gap-1 font-bold text-xl">
                        <img className="w-10" src={logo} />
                    </div> 
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal gap-10 px-1 text-lg">
                    <li>
                        <a>Products</a>
                    </li>
                    <li>
                        <a>Features</a>
                    </li>
                    <li>
                        <a>Pricing</a>
                    </li>
                    <li>
                        <a>Testimonials</a>
                    </li>
                    <li>
                        <a>FAQ</a>
                    </li>
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <a href='#'>Login</a>
                    <a className="btn bg-purple-700 rounded-full text-white">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
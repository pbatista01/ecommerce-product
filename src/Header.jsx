import logo from './assets/logo.svg';
import shoppingCartIcon from "./assets/icon-cart.svg"
import profileImage from './assets/image-avatar.png'
import menuIcon from './assets/icon-menu.svg'

function Header({datos}) {


    return(
        <header className="flex flex-row justify-between py-6 px-6 md:py-10 md:px-0 md:w-[80%] md:mx-auto md:gap-2 md:border-b-2 md:border-content-muted lg:py-12 ">
            <div className="flex flex-row gap-4 items-center md:gap-4 lg:gap-10 xl:gap-12">
                <img src={menuIcon} alt="menu icon" className="w-full h-4 md:hidden"/>
                <img src={logo} alt="logo icon" className="w-full h-5"/>
                <ul className="hidden text-content-body md:flex md:flex-row md:gap-4 xl:text-xl xl:gap-7">
                    {datos.map((item) => (
                        <li key={item} className="cursor-pointer hover:border-b-3 hover:border-brand-primary"><a>{item}</a></li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-row gap-6 items-center lg:gap-8">
                <img src={shoppingCartIcon} alt="shopping cart icon" className="cursor-pointer w-full h-5 lg:h-6" />
                <img src={profileImage} alt="profile image" className="w-full h-7 cursor-pointer lg:h-10 hover:border-3 hover:rounded-full hover:border-brand-primary"/>
            </div>
        </header>

        
        
    );
}

export default Header;
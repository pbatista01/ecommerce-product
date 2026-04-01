import { useState } from 'react';
import logo from './assets/logo.svg';
import shoppingCartIcon from "./assets/icon-cart.svg"
import profileImage from './assets/image-avatar.png'
import menuIcon from './assets/icon-menu.svg'
import MobileMenu from './MobileMenu';

function Header() {

    const menuList = ["Collections","Men", "Women", "About", "Contact"];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <header className="flex flex-row justify-between pt-5 pb-6.5 px-6 md:py-0 md:px-0 md:w-[77%] md:mx-auto md:gap-2 md:border-b-1 md:border-content-muted">
            <div className="flex flex-row gap-4 items-center md:gap-4 lg:gap-10 xl:gap-13.5">
                <img src={menuIcon} alt="menu icon" className="w-full h-4 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}/>
                <img src={logo} alt="logo icon" className="w-full h-5 md:h-4.5 lg:h-5"/>
                <ul className="hidden text-content-body font-display md:flex md:flex-row md:gap-4 md:text-[0.9rem] lg:text-base xl:gap-[32.5px]   xl:text-[0.955rem]">
                    {menuList.map((item) => (
                        <li key={item} className="cursor-pointer hover:border-b-3 hover:border-brand-primary py-15"><a>{item}</a></li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-row gap-6 items-center relative xl:gap-12">
                <img src={shoppingCartIcon} alt="shopping cart icon" className="cursor-pointer w-full h-5"/><span className="hidden absolute top-0 leading-3 right-11 rounded-full w-5 h-3 text-[0.5rem] bg-brand-primary text-center text-white font-bold md:top-15 lg:w-6 lg:h-4 lg:text-[0.65rem] lg:leading-4 lg:top-14 lg:right-21">1</span>
                <img src={profileImage} alt="profile image" className="w-full h-6 cursor-pointer lg:h-12 hover:border-3 hover:rounded-full hover:border-brand-primary"/>
            </div>

            {isMenuOpen && 
            <MobileMenu datos={menuList} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
        </header>

        
        
    );
}

export default Header;
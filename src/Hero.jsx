import shoppingCartIcon from './assets/icon-cart.svg'
import previousBtn from './assets/icon-previous.svg'
import nextBtn from './assets/icon-next.svg'
import productImage from './assets/image-product-1.jpg'
import minusBtn from './assets/icon-minus.svg'
import plusBtn from './assets/icon-plus.svg'

function Hero (){
    return(
        <section>
            <div className="relative">
                <button className="w-10 h-10 rounded-full bg-white absolute top-[45%] left-4 justify-items-center cursor-pointer"><img src={previousBtn} alt="previous button" className="w-2.5 h-3.5"/></button>
                <img src={productImage} alt="product image"/>
                <button className="w-10 h-10 rounded-full bg-white absolute top-[45%] right-4 justify-items-center cursor-pointer"><img src={nextBtn} alt="previous button" className="w-2.5 h-3.5"/></button>
            </div>
            <div className="flex flex-col gap-5 px-7 py-5">
                <h3 className="uppercase text-[0.8rem] tracking-[2px] text-brand-primary font-bold">Sneaker Company</h3>
                <h2 className="font-bold text-content-main tracking-wide text-[1.75rem] leading-tight">Fall Limited Edition Sneakers</h2>
                <p className="text-content-body text-[0.98rem]">These low-profiles sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row gap-4 items-center">
                        <h2 className="font-bold text-3xl">$125.00</h2>
                        <h4 className="text-brand-primary px-2 py-3 bg-brand-highlight font-bold rounded-md leading-0.5 mt-2">50%</h4>
                    </div>
                    <h4 className="text-content-muted font-bold line-through">$250.00</h4>
                </div>
                <div className="px-5 py-4 flex flex-row justify-between bg-surface-alt rounded-lg">
                    <button className="cursor-pointer"><img src={minusBtn} alt="minus icon"/></button>
                    <h5 className="font-bold">0</h5>
                    <button className="cursor-pointer"><img src={plusBtn} alt="plus icon" /></button> 
                </div>
                <button className="flex flex-row gap-3 items-center w-full bg-brand-primary p-4 rounded-lg text-surface-base text-sm font-bold tracking-wider shadow-xl shadow-orange-100 cursor-pointer"><img src={shoppingCartIcon} alt="shopping cart icon" className="w-4 h-4"/>Add to cart</button>
            </div>    
        </section>
    );
}

export default Hero;
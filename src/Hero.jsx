import { useState } from 'react'
import shoppingCartIcon from './assets/icon-cart.svg'
import previousBtn from './assets/icon-previous.svg'
import nextBtn from './assets/icon-next.svg'
import productImage from './assets/image-product-1.jpg'
import productImage2 from './assets/image-product-2.jpg'
import productImage3 from './assets/image-product-3.jpg'
import productImage4 from './assets/image-product-4.jpg'
import minusBtn from './assets/icon-minus.svg'
import plusBtn from './assets/icon-plus.svg'

function Hero ({onAddToCart}){


    const gallery = [productImage, productImage2, productImage3, productImage4]
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [quantity, setQuantity] = useState(0)


    const reduceQuantity = () => {
        if(quantity >0 ){
            setQuantity(prev => prev - 1);
        };
    }

    const increaseQuantity = () => {
        setQuantity(prev => prev + 1);
    }

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length)
    }

    const nextImage = () => { 
        setCurrentImageIndex((prev) => (prev + 1) % gallery.length)    
    }

    const handleAddToCart = () => {
        if(quantity> 0){
            onAddToCart(prev => prev + quantity) 
            setQuantity(0)
        }

        
    }
   
    return(
        <section className="flex flex-col lg:flex-row lg:py-23.5 lg:gap-24 lg:pl-54 lg:pr-36">
            <div className="relative flex flex-col gap-8">
                <button className="w-10 h-10 rounded-full bg-white absolute top-[45%] left-4 justify-items-center cursor-pointer lg:hidden" onClick={prevImage}><img src={previousBtn} alt="previous button" className="w-2.5 h-3.5"/></button>
                <img src={gallery[currentImageIndex]} alt="product image" className="lg:rounded-2xl"/>
                <button className="w-10 h-10 rounded-full bg-white absolute top-[45%] right-4 justify-items-center cursor-pointer lg:hidden" onClick={nextImage}><img src={nextBtn} alt="previous button" className="w-2.5 h-3.5"/></button>
                <div className="hidden lg:flex flex-row gap-7">
                {gallery.map((item) => (
                    <img key={item} src={item} alt="product image" className="rounded-2xl w-22.5" />
                ))}
                </div>
            </div>
            <div className="flex flex-col gap-2 px-7 py-5.5 lg:py-6 lg:gap-3.5">
                <h3 className="uppercase text-[0.75rem] tracking-[2px] text-brand-primary font-bold lg:text-[0.8rem]">Sneaker Company</h3>
                <h2 className="font-bold text-content-main tracking-wide text-[1.75rem] leading-8.5 lg:text-[2.61rem] lg:leading-11.5">Fall Limited Edition Sneakers</h2>
                <p className="text-content-body text-[0.979rem] mt-2.5 leading-6.5 lg:mt-6">These low-profiles sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                <div className="flex flex-row justify-between items-center mt-4.5 lg:flex-col lg:items-start lg:gap-2">
                    <div className="flex flex-row gap-4 items-center">
                        <h2 className="font-bold text-3xl">$125.00</h2>
                        <h4 className="text-brand-primary px-2 py-3 bg-brand-highlight font-bold rounded-md leading-0.5 mt-2">50%</h4>
                    </div>
                    <h4 className="text-content-muted font-bold line-through">$250.00</h4>
                </div>
                <div className="flex flex-col lg:flex-row gap-10">
                <div className="mt-4 px-5 py-4 flex flex-row w-full justify-between bg-surface-alt rounded-lg lg:w-[35%]">
                    <button className="cursor-pointer" onClick={reduceQuantity}><img src={minusBtn} alt="minus icon"/></button>
                    <h5 className="font-bold">{quantity}</h5>
                    <button className="cursor-pointer" onClick={increaseQuantity}><img src={plusBtn} alt="plus icon" /></button> 
                </div>
                <button className="mt-3 flex flex-row gap-3 w-full bg-brand-primary p-4 rounded-lg text-surface-base text-sm font-bold tracking-wider shadow-xl shadow-orange-100 cursor-pointer lg:w-[56%]" onClick={handleAddToCart}><img src={shoppingCartIcon} alt="shopping cart icon" className="w-4 h-4"/>Add to cart</button>
                </div>
            </div>    
        </section>
    );
}

export default Hero;
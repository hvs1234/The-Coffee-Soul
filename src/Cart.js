import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import logo from './images/logo.png'

const Cart = () => {

    // Scroll To Top

    const scrollToTop = ()=> {
        window.scroll({top: 0, behavior: "smooth"});
    }

    // Responsive Navbar

    const [isActive, setIsActive] = React.useState(false);
    const toggleNavbar = () => {
      setIsActive(!isActive);
    };

    // Cart Functionality

    const {
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();


    return (
    <>
        {/* Header Section */}
        
        <header className={`header ${isActive ? 'active' : ''}`}>
            <div className="logo">
                <img src={logo} alt="logo" />
                <h2>The Coffee Soul</h2>
            </div>
            <div className="navbar">
                <ul>
                    <li><a href="/" className='navlink'>Home</a></li>
                    <li><NavLink className={'navlink'} to={"/cart"}>Cart({totalUniqueItems})</NavLink></li>
                    <li><a href="#checkout" className='navlink'>Total</a></li>
                    <li><NavLink className={'navlink'} to={"/checkout"}>Checkout</NavLink></li>
                </ul>
            </div>
            <div className="mobile-navbar-btn" onClick={toggleNavbar}>
                <i name="ham" className={`fa-solid fa-bars mobile-nav-icon`}></i>
                <i name="cross" className={`fa-solid fa-xmark mobile-nav-icon`}></i>
            </div>
        </header>

        {/* Cart Section */}

        <section className="section section-cart">
            <div className="container">
                <h2 className="common-heading">Your Cart&nbsp; <i className="fa-solid fa-cart-shopping"></i></h2>
                <p className="cart-para">"The Coffee Soul" - A haven for caffeine aficionados. Rich aromas, artisanal blends, cozy atmosphere, soulful music, homemade treats, friendly baristas, ethically sourced.</p>
                <h3 className='cart-total-heading'>Cart ({totalUniqueItems}) | Total Items ({totalItems})</h3>
            </div>
            <div className="table-part">
                <div className="container table-container">
                    <table>
                        <tbody>
                            {items.map((curele,index) => {
                                return (
                                    <tr className='grid grid-five-columns table-row' key={index}>
                                        <td><img className='cart-img' src={curele.image} alt="img" /></td>
                                        <td className='cart-data cart-title'>{curele.title}</td>
                                        <td className='cart-data cart-price'> ₹ {curele.price}</td>
                                        <td className='cart-data cart-quantity'>Quantity: ({curele.quantity})</td>
                                        <td className='cart-btns cart-data'>
                                            <button className='btn cart-btn' 
                                                onClick={()=> {
                                                    if(curele.quantity === 1) return '';
                                                    updateItemQuantity(curele.id , curele.quantity - 1)
                                                }}>➖
                                            </button>
                                            <button className='btn cart-btn' 
                                                onClick={()=> {
                                                    updateItemQuantity(curele.id , curele.quantity + 1)
                                                }}>➕
                                            </button>
                                            <button className='btn cart-btn' onClick={()=> removeItem(curele.id)}>❌</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <div className="cart-total-box" id='checkout'>
                        <div className="cart-total-btns">
                            <button className='btn cart-total-btn' onClick={emptyCart}>Clear Cart</button>
                            <NavLink to={'/checkout'} className='btn cart-total-btn'>Checkout</NavLink>
                        </div>
                        <div className="cart-total-price">
                            <p>Total Price: ₹ {parseInt(cartTotal)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Footer Section */}

        <footer className="section section-footer">
            <div className="container">
                <h3>The Coffee Soul ☕</h3>
            </div>
            <div className="container grid grid-three-columns">
                <div className="f-about">
                    <h3>About</h3>
                    <p>Discover the soulful essence of coffee at The Coffee Soul - your online sanctuary for exquisite blends, accessories, and brewing wisdom.</p>
                </div>
                <div className="f-links">
                    <h3>Links</h3>
                    <ul>
                        <li><a href="/"><i className="fa-solid fa-arrow-right"></i>&nbsp;Home</a></li>
                        <li><NavLink to={"/cart"}><i className="fa-solid fa-arrow-right"></i>&nbsp;Cart</NavLink></li>
                    </ul>
                </div>
                <div className="f-address">
                    <h3>Address</h3>
                    <address>
                        <div><p><i className="fa-solid fa-location-dot"></i>&nbsp; Dehradun, Uttarakhand, India</p></div>
                        <div><p><i className="fa-solid fa-phone"></i>&nbsp; <a href="tel:+919149349278">+91 9149349278</a></p></div>
                        <div><p><i className="fa-regular fa-envelope"></i>&nbsp; &nbsp;
                        <a href="mailto:3469harshsharma@gmail.com">3469harshsharma@gmail.com</a></p></div>
                    </address>

                </div>
            </div>
            <div className="container">
                <div className="f-credits">
                    <p>Copyright <i className="fa-regular fa-copyright"></i> 2024 All right reserved || The Coffee Soul ☕</p>
                    <br /> <br />
                    <p>Create By 👤 Harshvardhan Sharma</p>
                </div>
            </div>
        </footer>

        <div className="scroll-top-style">
            <i className="fa-solid fa-arrow-up scroll-top" onClick={scrollToTop}></i>
        </div>

    </>
  )
}

export default Cart
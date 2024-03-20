import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import logo from './images/logo.png'

const Checkout = ({ history }) => {
  const { items, cartTotal, emptyCart, totalUniqueItems } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    pincode: '',
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/mnqebngo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          formData: formData,
          items: items.map(item => ({
            title: item.title,
            price: item.price,
            quantity: item.quantity
          })),
          cartTotal: cartTotal
        })
      });

      if (response.ok) {
        alert('Order placed successfully! You will receive an email confirmation shortly.');
        emptyCart();
        setOrderPlaced(true);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  // Scroll To Top

  const scrollToTop = ()=> {
    window.scroll({top: 0, behavior: "smooth"});
  }

  // Responsive Navbar

  const [isActive, setIsActive] = React.useState(false);
  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

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
                    <li><a href="#checkout" className='navlink'>Order</a></li>
                </ul>
            </div>
            <div className="mobile-navbar-btn" onClick={toggleNavbar}>
                <i name="ham" className={`fa-solid fa-bars mobile-nav-icon`}></i>
                <i name="cross" className={`fa-solid fa-xmark mobile-nav-icon`}></i>
            </div>
        </header>

        <section className="section section-checkout">
            <div className="container">
                <h2 className="common-heading">Checkout&nbsp; <i className="fa-solid fa-check"></i></h2>
                { !orderPlaced ? (
                    <>

                    <div className='checkout-data'>
                        <p>Total Price: ₹ {parseInt(cartTotal)}</p>
                        <p>Total Items In Your Cart&nbsp; <i className="fa-regular fa-hand-point-down"></i></p>
                        <table className='table-container checkout-container'>
                          <tbody>
                          {items.map((curele,index) => {
                                return (
                                    <tr className='grid grid-three-columns table-row checkout-row' key={index}>
                                        <td className='cart-data cart-title checkout-title'>{curele.title}</td>
                                        <td className='cart-data cart-price checkout-price'> ₹ {curele.price}</td>
                                        <td className='cart-data cart-quantity checkout-quantity'>Quantity: ({curele.quantity})</td>
                                    </tr>
                                );
                            })}
                          </tbody>
                        </table>
                    </div>

                    <form onSubmit={handleSubmit} className='section-contact-main checkout-form' id='checkout'>
                        <h2>Customer Details ✔️</h2>
                        <hr />
                        <div className="input-here grid grid-two-columns">
                          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder='Your Name 👤' autoComplete='off'/>
                          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder='Your Email 📩' autoComplete='off'/>
                        </div>
                        <div className='input-here grid grid-two-columns'>   
                            <input type="number" id='phone' name='Phone Number' value={formData.number} onChange={handleChange} required placeholder='Your Valid Phone 📱' autoComplete='off'/>
                            <input type="number" id='pincode' name='Pin code' value={formData.number} required 
                            onChange={handleChange} placeholder='Your PinCode 🔘' autoComplete='off'/>
                        </div>
                        <div className="form-group">
                          <textarea id="address" name="address" rows={5} cols={30} value={formData.address} onChange={handleChange} required placeholder='Your Address 🏠' autoComplete='off'/>
                        </div>
                            <button type="submit" className="btn place-order-btn">Place Order ✅</button>
                    </form>
                    </>
                )   
                : 
                (
                    <div className='checkout-placed'>
                      <h2>Order Placed Successfully!</h2>
                      <p>You will receive an email confirmation shortly.</p>
                    </div>
                )}
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
  );
};

export default Checkout;

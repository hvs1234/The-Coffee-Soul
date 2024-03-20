import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import './style.css'
import logo from './images/logo.png'
import about_img from './images/about-img.webp'
import Menu from './Menu'
import MenuData from './MenuAPI'

const Home = () => {

    // Scroll To Top

    const scrollToTop = ()=> {
        window.scroll({top: 0, behavior: "smooth"});
    }

    // Responsive Navbar

    const [isActive, setIsActive] = React.useState(false);
    const toggleNavbar = () => {
      setIsActive(!isActive);
    };


    // Sticky Navbar

    React.useEffect(() => {
        const sectionHero = document.querySelector(".section-hero");
    
        const observerCallback = (entries) => {
          const ent = entries[0];
          !ent.isIntersecting ?
            document.body.classList.add("sticky") :
            document.body.classList.remove("sticky");
        };
    
        const options = {
          root: null,
          threshold: 0,
          rootMargin: "-100px",
        };
    
        const observer = new IntersectionObserver(observerCallback, options);
    
        observer.observe(sectionHero);
        
        return () => {
          observer.disconnect();
        };
    }, []);

    // Menu Data API

    const [menudata] = React.useState(MenuData);

    // Use Cart

    const {
        totalUniqueItems,
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
                    <li><a href="#about" className='navlink'>About</a></li>
                    <li><a href="#menu" className='navlink'>Menu</a></li>
                    <li><a href="#contact" className='navlink'>Contact</a></li>
                    <li><NavLink className={'navlink'} to={"/cart"}>Cart({totalUniqueItems})</NavLink></li>
                </ul>
            </div>
            <div className="mobile-navbar-btn" onClick={toggleNavbar}>
                <i name="ham" className={`fa-solid fa-bars mobile-nav-icon`}></i>
                <i name="cross" className={`fa-solid fa-xmark mobile-nav-icon`}></i>
            </div>
        </header>

        {/* Hero Section */}

        <main>
            <section className="section section-hero">
                <div className="overlay"></div>
                <div className="container section-hero-data">
                    <h2 className='hero-top-para'><i className="fa-solid fa-mug-hot"></i>&nbsp; Delicious Taste</h2>
                    <h1 className="hero-heading">The Coffee Soul For Every Time</h1>
                    <p className="hero-para"><i className="fa-solid fa-quote-left"></i>&nbsp; Indulge in aromatic blends and artisanal brews at The Coffee Soul: your online destination for exquisite coffee experiences and accessories. &nbsp;<i className="fa-solid fa-quote-right"></i></p>
                    <div>
                        <a href='#menu' className="btn">Explore More</a>
                    </div>
                </div>
            </section>
        </main>

        {/* About Section */}

        <section className="section section-about" id='about'>
            <div className="container">
                <h2 className="common-heading">About Us &nbsp;<i class="fa-solid fa-user"></i></h2>
                <p className='about-para'>Discover Coffee Soul: A virtual haven for coffee enthusiasts. Explore rich blends, accessories, and brewing tips for a soulful experience.</p>
            </div>
            <div className="container grid grid-two-columns">
                <div className="about-img">
                    <img src={about_img} alt="about" />
                </div>
                <div className="about-data">
                    <p className='strong'>About Coffee Soul</p>
                    <p>Discover Coffee Soul: A virtual haven for coffee enthusiasts. Explore rich blends, accessories, and brewing tips for a soulful experience.</p>
                    <p className="strong">Location</p>
                    <p>Dehradun - Uttarakhand, India</p>
                    <p className="strong">Founded</p>
                    <p>2004</p>
                </div>
            </div>
        </section>
        
        {/* Menu Section */}

        <section className="section section-menu" id='menu'>
            <div className="container">
                <h2 className="common-heading">Our Menu and Products&nbsp; <i className="fa-solid fa-mug-hot"></i></h2>
                <p className='menu-para'>Savor the Coffee Soul menu: aromatic espressos, creamy lattes, flavorful cappuccinos, indulgent mochas, alongside delightful pastries and refreshing teas.</p>
            </div>
            <div className="container grid grid-three-columns">
                {menudata.map((curele,index)=>{
                    return (
                        <Menu  
                            key = {index}
                            image = {curele.image}
                            title = {curele.title}
                            price = {curele.price}
                            button = {curele.button}
                            curele = {curele}
                        />
                    );
                })}
            </div>
        </section>

        {/* Contact Section */}

        <section className="section section-contact" id='contact'>
            <div className="container">
                <h2 className="common-heading">Contact Us&nbsp; <i className="fa-solid fa-cart-shopping"></i></h2>
            </div>

            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.58771735367!2d77.93473398378957!3d30.3255508049571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1707394666507!5m2!1sen!2sin" width="100%" height="350px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            <div className="section-contact-main contact-container">
                <h2 className="common-heading contact-heading">The Coffee Soul ☕</h2>
                <form action="https://formspree.io/f/mnqebngo" method="POST">
                    <div className="grid grid-two-columns">
                        <input className="input-here" id="name" name="Name" type="text" placeholder="Name" required autocomplete="off" />
                        <input className="input-here" id="email" name="Email" type="email" placeholder="Email" required autocomplete="off" />
                    </div>
                    <div className='grid grid-two-columns'>
                        <input className="input-here" id="subject" name="subject" type="text" placeholder="Subject" required autocomplete="off" />
                        <input className='input-here' type="number" id="phone" name="Phone" placeholder='Your Phone Number' required autoComplete='off'/>
                    </div>
                    <div>
                        <textarea className='input-here' id="address" name="address" cols="30" rows="5" placeholder='Your Valid Address' required autoComplete='off'/>
                    </div>
                    <div>
                      <textarea className="input-here" id="message" name="message" cols="30" rows="5" placeholder="Message" required autocomplete="off"></textarea>
                    </div>
                    <div>
                      <input id="submit" name="submit" type="submit" className="btn" value="Send Message" />
                    </div>
                </form>
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
                        <li><a href="/"><i className="fa-solid fa-arrow-right"></i>&nbsp; Home</a></li>
                        <li><a href="#about"><i className="fa-solid fa-arrow-right"></i>&nbsp; About</a></li>
                        <li><a href="#menu"><i className="fa-solid fa-arrow-right"></i>&nbsp; Menu</a></li>
                        <li><a href="#contact"><i className="fa-solid fa-arrow-right"></i>&nbsp; Contact</a></li>
                        <li><NavLink to={"/cart"}><i className="fa-solid fa-arrow-right"></i>&nbsp; Cart</NavLink></li>
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

export default Home
import Layout from "@/src/layout/Layout";
import { studiesswiper } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const Contacts = () => {
  return (
    <Layout noHeaderBg pageName={"Contact"}>
      <section
        className="splash-area-section"
        style={{ backgroundImage: "url(assets/img/banner_ContactUs.jpg)" }}
      >
        <div className="container">
          <div className="splash-area">
            <h2>Contact Us Anytime! </h2>
            <a href="#"><span>Whether you'd like more information about our products, <br></br>technical support and training, or you're looking for the <br></br>latest technology news, we look forward to hearing from you.</span></a>
          </div>
        </div>
      </section>
      <section className="contact-page gap">
        <div className="container">
          <div className="heading">
            <h2>Let's Connect!</h2>
           
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <form className="content-form">
                <div className="row">
                  <div className="col-lg-6" style={{borderRadius: "5px"}}>
                    <input type="text" style={{borderRadius: "5px"}} name="name" placeholder="Your Name *" />
                  </div>
                  <div className="col-lg-6">
                    <input
                      style={{borderRadius: "5px"}}
                      type="text"
                      name="name"
                      placeholder="Your Company *"
                    />
                  </div>
                </div>
                <input style={{borderRadius: "5px"}} type="text" name="name" placeholder="Your Email *" />
                <textarea style={{borderRadius: "5px"}} placeholder="Your Message *" defaultValue={""} />
                <button style={{background: "#087694ed"}} className="themebtu full">Submit</button>
              </form>
            </div>
            <div className="offset-lg-1 col-xl-5 col-lg-5">
              <ul className="sidebar">
                <li>
                  <h4>HQ Address : </h4>
                  <span>
                  126 Mill Street

                    <br />
                    Healdsburg, CA 95448
                  </span>
                </li>
                <li>
                  <h4>Phone :</h4>
                  <a href="callto:+18666932636">
                    <span>(866) 693-2636</span>
                  </a>
                </li>
                <li>
                  <h4>Email :</h4>
                  <a href="mailto:support@eandm.com">
                    <span>support@eandm.com</span>
                  </a>
                </li>
                <li>
                  <h4>Find us :</h4>
                  <ul className="brandicon">
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27988214366!2d-74.25986540376853!3d40.69767006922205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1672222515624!5m2!1sen!2s"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <section className="offices gap" style={{ backgroundColor: "#f3f8fb" }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="heading">
                <h2>Offices</h2>
                <p>
               <hr />
                </p>
              </div>
            </div>
            <div className="col-xl-8">
              <Swiper
                {...studiesswiper}
                className="swiper-container studiesswiper"
              >
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="view-map hoverstyle">
                      <figure>
                        <img
                          alt="img"
                          className="w-100"
                          src="assets/img/view-map-1.jpg"
                        />
                      </figure>
                      <div className="view-map-data">
                        <i className="fa-solid fa-user" />
                        <h5>Healdsburg, California</h5>
                        <p>
                          126 Mill Street, Healdsburg, CA 95448, United States
                        </p>
                        <a href="#">view map</a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="view-map hoverstyle">
                      <figure>
                        <img
                          alt="img"
                          className="w-100"
                          src="assets/img/view-map-2.jpg"
                        />
                      </figure>
                      <div className="view-map-data">
                        <i className="fa-solid fa-user" />
                        <h5>Irvine, California</h5>
                        <p>18300 Von Karman Avenue Suite 640, Irvine, CA 92612, United States</p>
                        <a href="#">view map</a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="view-map hoverstyle">
                      <figure>
                        <img
                          alt="img"
                          className="w-100"
                          src="assets/img/view-map-3.jpg"
                        />
                      </figure>
                      <div className="view-map-data">
                        <i className="fa-solid fa-user" />
                        <h5>Portland, Oregon</h5>
                        <p>10220 SW Greenburg Road Suite 100, Tigard, OR 97223, United States</p>
                        <a href="#">view map</a>
                      </div>
                    </div>
                  </SwiperSlide>
                   <SwiperSlide className="swiper-slide">
                    <div className="view-map hoverstyle">
                      <figure>
                        <img
                          alt="img"
                          className="w-100"
                          src="assets/img/view-map-3.jpg"
                        />
                      </figure>
                      <div className="view-map-data">
                        <i className="fa-solid fa-user" />
                        <h5>Seattle, Washington</h5>
                        <p>16040 Christensen Road Suite 110, Tukwila, WA 98188, United States</p>
                        <a href="#">view map</a>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
                <div className="swiper-pagination" />
              </Swiper>
            </div>
          </div>
        </div>
        <div className="tp-hero__shapes">
          <div className="style-shapes-5">
            <img alt="dots1" src="assets/img/shap-2.png" />
          </div>
          <div className="style-shapes-6">
            <img alt="dots1" src="assets/img/shap-2.png" />
          </div>
          <div className="style-shapes-7">
            <img alt="dots1" src="assets/img/shap-5.png" />
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Contacts;

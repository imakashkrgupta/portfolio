import React, { useEffect } from 'react';
import Nav from './Nav';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
  // ----------------AOS--
  useEffect(() => {
    AOS.init();
  }, [])
  // -----------------
  return (
    <div className="contact_wrapper">
      <Nav/>
      <div className="contact_content_wrap">
        <div className="contact_heading" data-aos="fade-down">
          <h3>Contact Me</h3>
          <span>I'd Love To Hear From You</span>
        </div>
        {/* CONATCT FORM AND ADDRESS SECTION WRAP */}
        <div className="contact_form_add_wrap">
          <div className="contact_add_wrap">
            <div className="contact_add_content" data-aos="fade-up">
              <div className="contact_add_pic contact_add_pic1"><i class='bx bxs-map' ></i></div>
              <div className="contact_add_write">
                <span>Address</span>
                <p>Dhanbad, Jharkhand, India</p>
              </div>
            </div>
            {/*----------------------------*/}
            <div className="contact_add_content" data-aos="fade-up">
              <div className="contact_add_pic contact_add_pic2"><i class='bx bxs-envelope'></i></div>
              <div className="contact_add_write">
                <span>Email</span>
                <p>akash4444333221@gmail.com</p>
              </div>
            </div>
            {/* *---------------------------* */}
            <div className="contact_bg_g contact_bg_g1"></div>
          </div>

          <div className="contact_form_wrap" data-aos="fade-up">
            <form action="https://formsubmit.co/8c9959bc64ebf260dc2a3aae5a0e922f" method="POST">
              <div className="form_sub_wrap">
                <div className="form_sub_wrap1">
                  <input type="text" name="Name" id="" placeholder='Your Name' required/>
                  <input type="email" name="Email" id="" placeholder='Your Email' required/>
                </div>
                <div className="form_sub_wrap1">
                  <input type="number" name="Phone" id="" placeholder='Your Phone' required/>
                  <input type="text" name="Subject" id="" placeholder='Subject' required/>
                </div>
              </div>
              <textarea name="Message" id="" cols="30" rows="10" placeholder='Write your message here' required></textarea>
              <input type="hidden" name="_captcha" value="false"/>
              <input type="hidden" name="_next" value="https://akashkumargupta.com/contact"/>
              <input type="submit" value="Submit Now" />
            </form>
          </div>
        </div>
        {/* *--------------------------------------* */}
      </div>
    </div>
  )
}

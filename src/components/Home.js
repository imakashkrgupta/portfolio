import React, { useEffect } from 'react';
import Nav from './Nav';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
    // ------------AOS---
    useEffect(() => {
        AOS.init();
      }, [])
    // ----------------------
    return (
        <>
            <div className="home_wrapper">
            <Nav />
                <div className="home_content_wrapper">
                    
                    

                        <div className="home_content_write" data-aos="fade-up">
                            <h3>Hello, I'm</h3>
                            <span>Akash Kumar Gupta</span>
                            <p>
                                An engineering student, pursuing a Bachelor of Technology in Information Technology from Asansol Engineering College, Asansol, West Bengal, India.
                                I'm very passionate about coding, love to solve real-world problems, and am always open to new opportunities and challenges.
                            </p>

                            <div className="socials_wrap">
                                <a href="https://www.linkedin.com/in/the-akash-kumar-gupta/" target='blank'><i class='bx bxl-linkedin-square' id='i1'></i></a>

                                <a href="https://github.com/imakashkrgupta" target='blank'><i class='bx bxl-github' id='i2'></i></a>

                                {/* <a href=""><i class='bx bxl-instagram' id='i3'></i></a> */}
                            </div>
                        </div>
                        <div className="home_content_pic_wrapper" data-aos="fade-up">
                            <div className="home_content_pic_side_img_wrap1">
                                <div className="side_img" id='side_img1'>
                                    <i class='bx bxl-c-plus-plus' ></i>
                                </div>
                                <div className="side_img" id='side_img2'>
                                    <i class='bx bxs-data' ></i>
                                </div>
                            </div>
                            <div className="home_content_pic"></div>
                            <div className="home_content_pic_side_img_wrap2">
                                <div className="side_img" id='side_img3'>
                                    <i class='bx bxs-bar-chart-alt-2'></i>
                                </div>
                            </div>
                        </div>
                    
                </div>
            </div>
        </>
    )
}

import React, { useEffect } from 'react';
import Nav from './Nav';
import Swal from 'sweetalert2';
import modal_img_powerbi from '../images/modal_project_powerbi.png';
import modal_img_excel from '../images/modal_project_excel.png';
import modal_img_python_eda from '../images/modal_project_python_eda.png';
import modal_img_guest_house_booking from '../images/modal_project_guest-house-booking-system.png';
import modal_img_pgbuddy from '../images/modal_project_pgbuddy.png';
import modal_img_portfolio from '../images/modal_project_portfolio.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

// or via CommonJS
// const Swal = require('sweetalert2');

export default function Projects() {
  useEffect(() => {
    AOS.init();
  }, [])

  // ---------Project 1-------------------
  function project1() {
    Swal.fire({
      html: `<img src="${modal_img_pgbuddy}" class="modal-image" />        
      <h2 class="project_modal_heading">PG Buddy</h2>
      <div class="tech_tag_wrap">
      <div class="tech_tag">Python</div>
      <div class="tech_tag">Django</div>
      <div class="tech_tag">SQLite</div>
      <div class="tech_tag">HTML</div>
      <div class="tech_tag">CSS</div>
      <div class="tech_tag">JavaScript</div>
      </div>
      <div class="project_modal_content">Developed a web platform enhancing the search for student accommodations near colleges. Features include:
      </br></br>
      - Instantaneous search by college name.</br>
      - Comprehensive listings with pricing, proximity, and descriptions.</br>
      - Innovative voice search for effortless hands-free accessibility. </br>
      - Direct communication link for user engagement.</br>
      - Technologies used: Python, Django, HTML, CSS, JavaScript, SQLite.</br>
      </div>`,
      imageAlt: "Custom image",
      width: 600,
      customClass: {
        container: 'my-swal',
        popup: 'my-swal-popup'
      }
    });
  }

  // ---------Project 2-------------------
  function project2() {
    Swal.fire({
      html: `<img src="${modal_img_guest_house_booking}"class="modal-image">        
      <h2 class="project_modal_heading">CSIR-CIMFR Guest house booking system</h2>
      <div class="tech_tag_wrap">
      <div class="tech_tag">HTML</div>
      <div class="tech_tag">CSS</div>
      <div class="tech_tag">JavaScript</div>
      <div class="tech_tag">PHP</div>
      <div class="tech_tag">MYSQL</div>
      </div>
      <div class="project_modal_content">
      - Developed an Online Guest House Booking Web App, optimizing user requests and administrative workflows.</br>
      - Designed and implemented admin dashboard for streamlined request management.</br>
      - Engineered user application status tracking with email notifications, enhancing efficiency.</br>
      - Technologies used:  HTML, CSS, JavaScript, PHP, SQL.
      </br>
      </div>`,
      imageAlt: "Custom image",
      width: 600,
      customClass: {
        container: 'my-swal',
        popup: 'my-swal-popup'
      }
    });
  }
  // ---------Project 3-------------------
  function project3() {
    Swal.fire({
      html: `<img src="${modal_img_python_eda}"class="modal-image">        
      <h2 class="project_modal_heading">Amazon Sales EDA Analysis Using Python</h2>
      <div class="tech_tag_wrap">
      <div class="tech_tag">Python</div>
      <div class="tech_tag">Numpy</div>
      <div class="tech_tag">Pandas</div>
      <div class="tech_tag">Matplotlib</div>
      <div class="tech_tag">Seaborn</div>
      </div>
      <div class="project_modal_content">
      - Spearheaded Amazon Sales EDA (Exploratory Data Analysis) project utilizing Python.</br>
      - Employed data visualization and statistical methods to uncover actionable insights.</br>
      - Analyzed sales trends, customer behavior, and product performance.</br>
      - Contributed to strategic decision-making and business optimization efforts.</br>
      - Technologies used:  Python, Numpy, Pandas, Matplotlib, Seaborn.
      </br>
      </div>`,
      imageAlt: "Custom image",
      width: 600,
      customClass: {
        container: 'my-swal',
        popup: 'my-swal-popup'
      }
    });
  }
  // ---------Project 4-------------------
  function project4() {
    Swal.fire({
      html: `<img src="${modal_img_powerbi}"class="modal-image">        
      <h2 class="project_modal_heading">Data Analysis Of Super Store With Interactive Dashboard Using Power Bi</h2>
      <div class="tech_tag_wrap">
      <div class="tech_tag">Power Bi</div>
      </div>
      <div class="project_modal_content">
      - Conducted thorough data analysis for a Super Store.</br>
      - Created an interactive dashboard for insights into sales, customer behavior, and product performance.</br>
      - Implemented intuitive design for user-friendly exploration.</br>
      - Aimed to optimize efficiency and maximize profitability.</br>
      - Technology used:  Power Bi.
      </br>
      </div>`,
      imageAlt: "Custom image",
      width: 600,
      customClass: {
        container: 'my-swal',
        popup: 'my-swal-popup'
      }
    });
  }

  // ---------Project 5-------------------
  function project5() {
    Swal.fire({
      html: `<img src="${modal_img_excel}"class="modal-image">        
      <h2 class="project_modal_heading">Mega Store's Annual Report 2023 with interactive dashboard using MS Excel</h2>
      <div class="tech_tag_wrap">
      <div class="tech_tag">MS Excel</div>
      </div>
      <div class="project_modal_content">
      - Developed an interactive MS Excel dashboard for "Mega Store's Annual Report 2023" project.</br>
      - Provided comprehensive insights into sales, inventory, and customer data.</br>
      - Facilitated data-driven strategies and informed decision-making.</br>
      - Empowered stakeholders to optimize operations and enhance profitability.</br>
      - Technology used:  MS Excel.
      </br>
      </div>`,
      imageAlt: "Custom image",
      width: 600,
      customClass: {
        container: 'my-swal',
        popup: 'my-swal-popup'
      }
    });
  }

  // ---------Project 6-------------------
  function project6() {
    Swal.fire({
      html: `<img src="${modal_img_portfolio}"class="modal-image">        
      <h2 class="project_modal_heading">Personal Portfolio Website</h2>
      <div class="tech_tag_wrap">
      <div class="tech_tag">HTML</div>
      <div class="tech_tag">CSS</div>
      <div class="tech_tag">JavaScript</div>
      <div class="tech_tag">React.js</div>
      </div>
      <div class="project_modal_content">
      Developed a sleek personal portfolio website using React, highlighting:</br>
      </br> 
      - Created a React-based personal portfolio website featuring dynamic project showcases with descriptions, links,
      and an interactive contact page for seamless communication.
      </br>
      - Hosted at akashkumargupta.com for easy accessibility.</br>
      - Technologies used: HTML, CSS, JavaScript, React.js.
      </br>
      </div>`,
      imageAlt: "Custom image",
      width: 600,
      customClass: {
        container: 'my-swal',
        popup: 'my-swal-popup'
      }
    });
  }

  const project_modal = (proj_num) => {
    console.log(proj_num);

    switch (proj_num) {
      case 1:
        project1();
        break;

      case 2:
        project2();
        break;

      case 3:
        project3();
        break;

      case 4:
        project4();
        break;

      case 5:
        project5();
        break;

      case 6:
        project6();
        break;
    }

  };

  return (
    <div className="projects_wrapper">
      <Nav />
      <div className="projects_content_wrap">
        <div className="projects_heading" data-aos="fade-down">
          <h3>Projects</h3>
          <span>My Amazing Works</span>
        </div>
        <div className="projects_project_graphic_wrapper">
          <div className="projects_graphic_wrap projects_graphic_wrap1">
            <div className="projects_graphic projects_graphic1"></div>
            <div className="projects_graphic projects_graphic2"></div>
            <div className="projects_graphic projects_graphic3"></div>
          </div>
          {/* ********************************* */}
          <div className="projects_project_wrap">
            <div className="projects_project" id='projects_project1' data-aos="fade-up">
              <div className="projects_project_overlay">
                PG Buddy
                <div className="projects_project_link_wrap">
                  <a href="https://github.com/imakashkrgupta" target='blank'><i class='bx bxl-github'></i></a>
                  <i class='bx bx-window-open' onClick={() => project_modal(1)}></i>
                  <a href="https://akashkumargupta.pythonanywhere.com/" target='blank'><i class='bx bx-link'></i></a>
                </div>
              </div>
            </div>
            <div className="projects_project" id='projects_project2' data-aos="fade-up">
              <div className="projects_project_overlay">
                CSIR-CIMFR Guest house booking system
                <div className="projects_project_link_wrap">
                  <a href="https://github.com/imakashkrgupta" target='blank'><i class='bx bxl-github'></i></a>
                  <i class='bx bx-window-open' onClick={() => project_modal(2)} ></i>
                  <a href=""><i class='bx bx-link'></i></a>
                </div>
              </div>
            </div>

            <div className="projects_project" id='projects_project3' data-aos="fade-up">
              <div className="projects_project_overlay">
                Amazon Sales EDA Analysis Using Python
                <div className="projects_project_link_wrap">
                  <a href="https://github.com/imakashkrgupta" target='blank'><i class='bx bxl-github'></i></a>
                  <i class='bx bx-window-open' onClick={() => project_modal(3)} ></i>
                  <a href="https://github.com/imakashkrgupta/Amazon-Sales-EDA-Analysis-Using-Python/blob/main/Amazon-EDA.ipynb" target='blank'><i class='bx bx-link'></i></a>
                </div>
              </div>
            </div>

            <div className="projects_project" id='projects_project4' data-aos="fade-up">
              <div className="projects_project_overlay">
                Data Analysis Of Super Store With Interactive Dashboard Using Power Bi
                <div className="projects_project_link_wrap">
                  <a href="https://github.com/imakashkrgupta" target='blank'><i class='bx bxl-github'></i></a>
                  <i class='bx bx-window-open' onClick={() => project_modal(4)}></i>
                </div>
              </div>
            </div>

            <div className="projects_project" id='projects_project5' data-aos="fade-up">
              <div className="projects_project_overlay">
                Mega Store's Annual Report 2023 with interactive dashboard using MS Excel
                <div className="projects_project_link_wrap">
                  <a href="https://github.com/imakashkrgupta" target='blank'><i class='bx bxl-github'></i></a>
                  <i class='bx bx-window-open' onClick={() => project_modal(5)}></i>
                </div>
              </div>
            </div>

            <div className="projects_project" id='projects_project6' data-aos="fade-up">
              <div className="projects_project_overlay">
                Personal Portfolio Website
                <div className="projects_project_link_wrap">
                  <a href="https://github.com/imakashkrgupta" target='blank'><i class='bx bxl-github'></i></a>
                  <i class='bx bx-window-open' onClick={() => project_modal(6)}></i>
                  <a href="/"><i class='bx bx-link'></i></a>
                </div>
              </div>
            </div>
          </div>
          {/* ************************************* */}
          <div className="projects_graphic_wrap projects_graphic_wrap2">
            <div className="projects_graphic projects_graphic4"></div>
            <div className="projects_graphic projects_graphic5"></div>
            <div className="projects_graphic projects_graphic6"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

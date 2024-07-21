import React, { useEffect } from 'react'
import Nav from './Nav';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Resume() {

  // -------------------AOS--
  useEffect(() => {
    AOS.init();
  }, [])
  // ----------------------

  function disappear_all_resume(){
    const collection = document.getElementsByClassName("resume_down_write");
    for (let i = 0; i < collection.length; i++) {
      collection[i].style.display = "none";
    }

    const resume_sec_name = document.getElementsByClassName("resume_section_name");
    for (let i = 0; i < resume_sec_name.length; i++) {
      resume_sec_name[i].style.color = "white";
      resume_sec_name[i].style.backgroundColor = "#2d2b45";
    }
  }
  function resume_education() {
    disappear_all_resume();
    document.querySelector("#resume_down_write1").style.display="block";
    document.querySelector("#resume_section_name_edu").style.backgroundColor = "#f75022";
  }
  function resume_experience() {
    disappear_all_resume();
    document.querySelector("#resume_down_write2").style.display="block";
    document.querySelector("#resume_section_name_exp").style.backgroundColor = "#f75022";
  }
  function resume_skills() {
    disappear_all_resume();
    document.querySelector("#resume_down_write3").style.display="block";
    document.querySelector("#resume_section_name_skill").style.backgroundColor = "#f75022";
  }


  return (
    <div className="resume_wrapper">
      <Nav />
      <div className="resume_content_wrap">
        <div className="resume_heading" data-aos="fade-down">
          <h3>Resume</h3>
          <span>Have a Look At My Resume</span>
        </div>
        <div className="resume_up_wrap">
          <div className="resume_section_name" id='resume_section_name_edu' onClick={resume_education}>Education</div>
          <div className="resume_section_name" id='resume_section_name_exp' onClick={resume_experience}>Experience</div>
          <div className="resume_section_name" id='resume_section_name_skill' onClick={resume_skills}>Skills</div>
        </div>

        <div className="resume_down_wrap" data-aos="fade-up">
          <div className="resume_down_pic"></div>
          {/* --------------------------------------- */}
          <div className="resume_down_write" id="resume_down_write1">
            <div className="resume_down_write_heading">
              <span>My Education</span>
            </div>
            <div className="resume_write_content">
              <div className="resume_write_content_a">2021-2025</div>
              <div className="resume_write_content_b">BTech in Information Technology <br /> <p>Asansol Engineering College <br />Asansol</p></div>
            </div>

            <div className="resume_write_content">
              <div className="resume_write_content_a">2018-2020</div>
              <div className="resume_write_content_b">Higher Secondary -Science<br /> <p>Rajasthan Vidyapith <br />Purulia</p></div>
            </div>

            <div className="resume_write_content">
              <div className="resume_write_content_a">2007-2018</div>
              <div className="resume_write_content_b">Secondary Schooling<br /> <p>De Nobili School <br />Diwadih</p></div>
            </div>

          </div>
          {/* ------------------------------------------- */}
          {/* ---------------------------------------- */}
          <div className="resume_down_write" id="resume_down_write2">
            <div className="resume_down_write_heading">
              <span>My Experiences</span>
            </div>

            <div className="resume_write_content">
              <div className="resume_write_content_a">March 2024 - Present</div>
              <div className="resume_write_content_b">Lead<br /> <p>AEC Coding Club<br />Onsite</p></div>
            </div>

            <div className="resume_write_content">
              <div className="resume_write_content_a">June 2023 - July 2023</div>
              <div className="resume_write_content_b">Research Trainee <br /> <p>CSIR - CIMFR (Ministry of Science & Technology, Govt. of India) <br />Onsite</p></div>
            </div>

            <div className="resume_write_content">
              <div className="resume_write_content_a">Jan 2022 - Mar 2022</div>
              <div className="resume_write_content_b">Coding Tutor<br /> <p>Suvidha Foundation (In collaboration with a startup- CodeKaroYaaro) <br />Remote</p></div>
            </div>

          </div>
          {/* ------------------------------------------- */}
          <div className="resume_down_write" id="resume_down_write3">
            <div className="resume_down_write_heading">
              <span>My Skills</span>
            </div>
            <div className="skills_write_content_wrap">

              <div className="skill_pic" id="skill_pic1"></div>
              <div className="skill_pic" id="skill_pic2"></div>
              <div className="skill_pic" id="skill_pic3"></div>
              <div className="skill_pic" id="skill_pic4"></div>
              <div className="skill_pic" id="skill_pic5"></div>
              <div className="skill_pic" id="skill_pic6"></div>
              <div className="skill_pic" id="skill_pic7"></div>
              <div className="skill_pic" id="skill_pic8"></div>
              <div className="skill_pic" id="skill_pic9"></div>
              <div className="skill_pic" id="skill_pic10"></div>
              <div className="skill_pic" id="skill_pic11"></div>
              <div className="skill_pic" id="skill_pic12"></div>
              <div className="skill_pic" id="skill_pic13"></div>
              <div className="skill_pic" id="skill_pic14"></div>

            </div>
          </div>
          {/* ------------------------------------------- */}
        </div>
      </div>
    </div>
  )
}

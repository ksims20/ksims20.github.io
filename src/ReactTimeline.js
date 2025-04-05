import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { ReactComponent as GraduationCapIcon } from './svg/graduation-cap.svg';
import { ReactComponent as Playground } from './svg/playground.svg';
import { ReactComponent as College } from './svg/College.svg';
import 'react-vertical-timeline-component/style.min.css';

// Link to github React-vertical-timeline component used: https://github.com/stephane-monnot/react-vertical-timeline


const ReactTime = () => {
  return (
    <VerticalTimeline>

      <VerticalTimelineElement
        className="vertical-timeline-element"
        contentStyle={{ background: '#fff', color: '#58E0C0'}}
        date="2001 - 2011"
        iconStyle={{ background: 'lightgray', color: '#fff' }}
        icon={<Playground/>}
      >
        <h3 className="vertical-timeline-element-title">Preadolescent</h3>
        <p >During the preadolescent period of my life, I would often fiddle with any piece of technology I could find, for example, I would look through all the 
        settings on my parent's Blackberry's or I would try to learn how to use Dial-up on my mom's old computer back when we didn't have wifi.</p>
      </VerticalTimelineElement>


      {/* Start of 7th grade - 12th grade Events */}


      <VerticalTimelineElement
        className="vertical-timeline-element"
        date="2012-2013"
        iconStyle={{ background: '#8892B0', color: '#fff' }}
        icon={<GraduationCapIcon/>}
      >
        <h3 className="vertical-timeline-element-title">7th Grade</h3>
        <p>In the 7th grade I took a career test at school, this was the defining
            moment where I knew in the future I would become a computer scientist.
        </p>
      </VerticalTimelineElement>
    
      <VerticalTimelineElement
        className="vertical-timeline-element"
        date="2018-2019"
        iconStyle={{ background: '#8892B0', color: '#fff' }}
        icon={<GraduationCapIcon/>}
      >
        <h3  className="vertical-timeline-element-title">12th Grade</h3>
        <p >During my senior year of High School, I took my first ever coding course, although I don't remember much,
            I do remember the course being taught Primarly in Visual Basic. 
        </p>
      </VerticalTimelineElement>
    

        {/* Start of college and beyond events  */}


      <VerticalTimelineElement
        className="vertical-timeline-element"
        date="2020-2021"
        iconStyle={{ background: '#58E0C0', color: '#fff' }}
        icon={<College/>}
      >
        <h3 className="vertical-timeline-element-title">Freshman Year of College</h3>
        <p > At the University of North Carolina at Asheville, my first semester of college I took a course
            in Processing, CSCI 182 - Intro to Programming: Media Applications. Here I created many visual programs, such as my Pong project.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element"
        date="2021-2022"
        iconStyle={{ background: '#58E0C0', color: '#fff' }}
        icon={<College/>}
      >
        <h3  className="vertical-timeline-element-title">Sophomore Year of College</h3>
        <p > During this time I took CSCI 201 - Intro to OOP, it was taught in Eclipse, Java to be specific. As that title states, I learned
           the basic principles of Object Oriented Programming.
            During the second semester I took CSCI 202 - Intro to Data structures also in Java and as the title states, learned some data structures and algorithms, 
            additionally New Media 101 - Digital Design Principles, which taught me photoshop and illustrator.
        </p>
      </VerticalTimelineElement>
    
      <VerticalTimelineElement
        className="vertical-timeline-element"
        date="2022-2023"
        iconStyle={{ background: '#58E0C0', color: '#fff' }}
        icon={<College/>}
      >
        <h3  className="vertical-timeline-element-title">Junior Year of College</h3>
        <p > Continuing on, I learned more about Web Technology through both CSCI 344 - Advanced Web Technology
            and NM 231 - Introductory Interactive Media. This was the start of my passion for Front-end Development. I learned
            technolgies such as HTML/CSS and Javascript. Additionally in NM 281 I learned more about using both Adobe After effects
            and Preimere. My "Projects" page has many examples from my time in NM 231 and NM 281. 
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element"
        date="2022-2023"
        iconStyle={{ background: '#58E0C0', color: '#fff' }}
        icon={<College/>}
      >
        <h3  className="vertical-timeline-element-title">Senior Year of College</h3>
        <p > My heaviest courseload, in Spring of 2023 I took CSCI 235 - Systems 1 which taught us C#
            CSCI 313 - Virtual Reality which taught us VR development in Unreal Engine 5, CSCI 347 - Game Programming
            which was 2d/3d game development in UE5, and CSCI 373 - ST:Natural Language Processing in Python where I learned basic machine learning in Python.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element"
        date="2023-2024"
        iconStyle={{ background: '#58E0C0', color: '#fff' }}
        icon={<College/>}
      >
        <h3  className="vertical-timeline-element-title">5th Year of College</h3>
        <p > My final year of college, during the first semester I took CSCI 333 - Algorithms in Java,
            CSCI 338 - Software Engineering and learned React, more html/css, a little python, and a little PostgreSQL
            CSCI 343 - Database Mangement Systems where I learned SQL/No SQL/Graphs, and finally
            CSCI 480 - Capstone 1 where I made my Recipe website which is located on my Projects page.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element"
        date="2024 and Beyond!"
        iconStyle={{ background: '#58E0C0', color: '#fff' }}
        icon={<College/>}
      >
        <h3  className="vertical-timeline-element-title">5th Year of College</h3>
        <p > My last semester of college, the biggest break I've gotten in a while, the only course 
            I took during this semester was a continuation of my Capstone project. CSCI 481 - Capstone II. Again, which is featured on my "Projects" page.
        </p>
      </VerticalTimelineElement>
    
    </VerticalTimeline>
  );
};

export default ReactTime;

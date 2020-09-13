import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from  './skills';
 




class  Resume extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                            src="https://thumbs.dreamstime.com/t/user-sign-icon-person-symbol-human-avatar-rich-man-84519083.jpg"
                            alt="avatar"
                            style={{height: '200px'}}
                            />
                            </div>

                            <h2 style={{paddingTop: '2em'}}> Ajay Pawar</h2>
                            <h4 style={{color: 'grey'}}>programmer</h4>
                            <hr style={{borderTop: '3px solid #833fb2', width: '50'}}/>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            <hr style={{borderTop: '3px solid #833fb2', width: '50'}}/>
                            <h5>Address</h5>
                            <p> XXXXXXX, 9045</p>
                            <h5> Phone</h5>
                            <p>(123) 456-7890</p>
                            <h5>Email</h5>
                            <p>someone@example.com</p>
                            <h5>Web</h5>
                            <p>mywebsite.com</p>
                            <hr style={{borderTop: '3px solid #833fb2', width: '50'}}/>
                     </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2> Education</h2>

                        <Education 
                        startYear={2002}
                        endYear={2006}
                        schoolName="My University"
                        schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

                        />
                        <Education
                        startYear={2007}
                        endYear={2006}
                        schoolName="My 2nd University"
                        schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Experience</h2>

                        <Experience
                        startYear={2009}
                        endYear={2012}
                        jobName="First Job"
                        jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        />

                        <Experience
                        startYear={2012}
                        endYear={2016}
                        jobName="First Job"
                        jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Skills</h2>
                        <Skills
                         skill="javascript"
                        progress={100}
                        />
                        <Skills
                         skill="HTML/CSS"
                        progress={80}
                        />
                        <Skills
                         skill="NodeJS"
                        progress={50}
                        />
                        <Skills
                         skill="react"
                        progress={30}
                        />
                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume;

        
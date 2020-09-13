import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                        src="https://icons-for-free.com/iconfiles/png/512/business+costume+male+man+office+user+icon-1320196264882354682.png"
                        alt="avatar"
                        className="avatar-img"
                        />

                    <div className="banner-text">
                        <h1> Full stack Web Developer</h1>
                        <hr/>
                        <p> HTML/CSS | JavaScript | React | React Native | NodeJS | Express | MongoDB </p>
                        
                        <div id="social-links">

                            {/* LinkedIn */}
                            <a href={'http"//google.com" rel="noopner noreferrer'} target="_blank">
                            <i className="fab fa-linkedin-in icon" aria-hidden="true" />
                            </a>

                            {/* Github */}
                            <a href={'http"//google.com" rel="noopner noreferrer'} target="_blank">
                            <i className="fab fa-github-square icon" aria-hidden="true" />
                            </a>

                            {/* Freecodecamp */}
                            <a href={'http"//google.com" rel="noopner noreferrer'} target="_blank">
                            <i className="fab fa-free-code-camp icon" aria-hidden="true" />
                            </a>

                            {/* youtube */}
                            <a href={'http"//google.com" rel="noopner noreferrer'} target="_blank">
                            <i className="fab fa-youtube-square icon" aria-hidden="true" />
                            </a>


                        </div>
                    </div>


                    </Cell>
                </Grid>
                
             </div>

        )
    }
}
export default Landing;

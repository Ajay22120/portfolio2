import React, {Component} from 'react';
import { Tabs,Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class  Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0}
    }
    toggleCategories() {
        
        if(this.state.activeTab == 0){
            return(
                <div className="projects-grid">
                {/*project 1*/}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{color: 'white', height: '176px', background: 'url(https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg) center /  cover'}} > React Project #1 </CardTitle>
                    <CardText>
                        lorean ipsum is simply  text of the printing  the typesetting industry. lorean ipsaum has been the indisrtey
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Codenpen</Button>
                        <Button colored>LiveDemo</Button>
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                   <i class="fa fa-share-alt" aria-hidden="true"></i>
                    </CardMenu>  



                    </Card>
                    {/*project 2*/}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{color: 'white', height: '176px', background: 'url(https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg) center /  cover'}} > React Project #2 </CardTitle>
                    <CardText>
                        lorean ipsum is simply  text of the printing  the typesetting industry. lorean ipsaum has been the indisrtey
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Codenpen</Button>
                        <Button colored>LiveDemo</Button>
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                   <i class="fa fa-share-alt" aria-hidden="true"></i>
                    </CardMenu>  



                    </Card>
                    {/*project 3*/}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto' }}>
                    <CardTitle style={{color: 'white', height: '176px', background: 'url(https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg) center /  cover'}} > React Project #3 </CardTitle>
                    <CardText>
                        lorean ipsum is simply  text of the printing  the typesetting industry. lorean ipsaum has been the indisrtey
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Codenpen</Button>
                        <Button colored>LiveDemo</Button>
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                       <i class="fa fa-share-alt" aria-hidden="true"></i>
                    </CardMenu>  



                    </Card>
                    </div>
                
                
                )
            } else  if(this.state.activeTab == 1) {
                return(
                <div><h1>This is Angular</h1></div>
                )
            } else if (this.state.activeTab == 2) {
                return(
                <div><h1>This is VueJS</h1></div>
                )
            } else if (this.state.activeTab == 3) {
                return(
                <div><h1>This is MongoDB</h1></div>
                )
            }

    }

    render() {
        return(
            <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onchange={(tabid) => this.setState({activeTab:tabid})} ripple>
            <Tab>React</Tab>
            <Tab>Angular</Tab>
            <Tab>VueJS</Tab>
            <Tab>MongoDB</Tab>   
            </Tabs>

           
                <Grid >
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
                {/* {this.toggleCategories()} */}
            

            </div>
            

        )
    }
}
export default Projects;

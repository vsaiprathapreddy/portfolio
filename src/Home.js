import React from 'react';
import './Home.css';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';



import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import RoomIcon from '@material-ui/icons/Room';




export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={
      currentSection:'About'
    }
  }

  handleAbout = () => {
    this.setState({
      currentSection:'About'
    })
  }
  handleEducation = () => {
    this.setState({
      currentSection:'Education'
    })
  }
  handleSkills = () => {
    this.setState({
      currentSection:'Skills'
    })
  }
  handleProjects = () => {
    this.setState({
      currentSection:'Projects'
    })
  }
  
  render(){
    return(
      <React.Fragment>
        
        <div class="row">
          <div className='left-side-content' style={{backgroundColor:"#a6a6a6",width:"340px",display:"flex",justifyContent:"spaceBetween"}}>
            <div className='all-sections'>
              <div style={{display:"flex",justifyContent:"center"}}>
                <img src="https://picsum.photos/200" style={{width:"100px", borderRadius: "50%"}}/> 
              </div>
              <div style={{marginLeft:"60px"}}>
                  <h1 className="Title">Sai Prathap </h1>
              </div>
              <div>
            <div style={{marginLeft:"60px",marginBottom:"20px"}}>
                 <RoomIcon /> Andhra Pradesh,India.
               </div>
            </div>
  
              <div className="button-left" >
                  <div class="btn-group-vertical" role="group" aria-label="Button group with nested dropdown" style={{width:"100%",display:"flex",justifyContent:"center"}}>
                    <button type="button" style={{color:"#cccccc"}} class={`btn btn-secondary ${this.state.currentSection =='About' ? 'is-active':'' }`} onClick={this.handleAbout}>About</button>
                    <button type="button" style={{color:"#cccccc"}} class={`btn btn-secondary ${this.state.currentSection == 'Education' ? 'is-active':'' }`} onClick={this.handleEducation}>Education</button>
                    <button type="button" style={{color:"#cccccc"}} class={`btn btn-secondary ${this.state.currentSection == 'Skills' ? 'is-active':'' }`} onClick={this.handleSkills}>Skills</button>
                    <button type="button" style={{color:"#cccccc"}} class={`btn btn-secondary ${this.state.currentSection == 'Projects' ? 'is-active':'' }`} onClick={this.handleProjects}>Projects</button>
                  </div>
              </div>  
            </div>
             <div>
                <div style={{marginLeft:"40px"}}>
                  <EmailIcon /> saiprathap3424@gmail.com
                </div>
                <div style={{marginLeft:"80px"}}>
                  <LocalPhoneIcon /> +91-9381148043
                </div>
             </div>
              
            
            <div className="Icons" style={{display:"flex"}}>
              <a href="https://github.com/vsaiprathapreddy" target="_blank">
                <GitHubIcon /></a>&nbsp;
                <a href="https://www.facebook.com/saiprathap3424" target="_blank">
                <FacebookIcon /></a>&nbsp;
                
                <a href="https://linkedin.com/in/saiprathap-reddy-a91a0716b"target="_blank">
                <LinkedInIcon /></a>&nbsp;
                <a href="https://www.instagram.com/prathapreddy_287/"target="_blank">
                <InstagramIcon /></a>&nbsp;
            </div>
          </div>
          
          <div class="col"style={{backgroundColor: "#262626",}}>
            {
              this.state.currentSection == 'About' && <About/>
            }
            {
              this.state.currentSection == 'Education' && <Education/>
            }      
            {
              this.state.currentSection == 'Skills' && <Skills/>
            }            
            {
              this.state.currentSection == 'Projects' && <Projects/>
            }

          </div>
        </div>
      </React.Fragment>
    )
  }
}
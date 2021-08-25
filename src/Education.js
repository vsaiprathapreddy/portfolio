import React from 'react';
// import './Education.css';

import SchoolIcon from '@material-ui/icons/School';


export default class Education extends React.Component{


    render(){
        return(
            <React.Fragment>
                <div style={{color:"red"}}>
                <div>
                    <SchoolIcon style={{ fontSize: 60 }} />
                </div>
                <div>
                    <h3>B.Tech</h3>
                    <p>Computer Science and Engineering<br/>
                        Vellore Institute of Technology<br/>Vellore</p>
                    <h3>Intermediate</h3>
                    <p>Board of Intermediate Education<br/>
                        Andhra Pradesh
                    </p>
                    <h3>X class</h3>
                    <p>Board of Secondary Education <br/>Andhra Pradesh</p>
                </div>
                </div>
                
            </React.Fragment>
        )
    }
}
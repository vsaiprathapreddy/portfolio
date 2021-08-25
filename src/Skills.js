import React from 'react';
// import './Skills.css'
import MenuBookIcon from '@material-ui/icons/MenuBook';

export default class Skills extends React.Component{


    render(){
        return(
            <React.Fragment>
            <h1 className="Skills-head">Skills :</h1>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="main-timeline">
                            <div class="timeline">
                                <a href="" class="timeline-content">
                                    <div class="timeline-icon">
                                        <i class="fa fa-globe"><MenuBookIcon style={{ fontSize: 60 }}/></i>
                                    </div>
                                    <div class="inner-content">
                                        <ul>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>JAVA SCRIPT</li>
                                            <li>CORE JAVA</li>
                                            <li>REACT JS</li>
                                            

                                        </ul>
                                        
                                        

                                    </div>
                                </a>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

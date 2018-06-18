import React, {Component} from 'react';
import SidebarMenu from '../menus/SidebarMenu';


class HomePage extends Component{
    render(){
        return(
            <div className="all-screen-div">
               <div className="column div-menu">
                   <div id="div-logo-menu">
                       <img className="div-logo-menu" id="encode-logo" src={require('../../images/Encode_logo.png')}/>
                       <SidebarMenu />
                   </div>
               </div>
                <div className="column div-body">

                </div>
                <div className="column div-options">

                </div>
            </div>
        )
    }
}

export default HomePage;
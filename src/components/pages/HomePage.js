import React, {Component} from 'react';
import SmallMenu from '../menus/SmallMenu';
import TopicMapsList from "../menus/TopicMapsList";
import { Responsive} from 'semantic-ui-react';
import TopMenu from '../menus/TopMenu';
import TopicGrid from '../component/TopicGrid';

class HomePage extends Component{
    render(){
        return(
            <div className="all-screen-div">
                <div className="div-top">
                    <Responsive minWidth={1200} as={TopMenu} />
                    <Responsive maxWidth={1200} as={SmallMenu} />
                </div>
                <div className="column div-menu">
                   <TopicGrid />
                </div>
                <div className="column div-body">

                </div>
                <div className="column div-options">
                    <TopicMapsList />
                </div>
            </div>
        )
    }
}

export default HomePage;
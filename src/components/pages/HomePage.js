import React, {Component} from 'react';
import SmallMenu from '../menus/SmallMenu';
import TopicMapsList from "../menus/TopicMapsList";
import { Responsive} from 'semantic-ui-react';
import TopMenu from '../menus/TopMenu';
import TopicGrid from '../component/TopicGrid';
import Graph from "../component/Graph";

const TOPICMAPS = [
    {
        "id": 28,
        "title": "Gli Akita inu",
        "description": "Il faccione è un akita",
        "version": "1.0",
    },
    {
        "id": 31,
        "title": "Matematica",
        "description": "Integrali e derivate",
        "version": "1.1",
    },
    {
        "id": 32,
        "title": "Gli Akita inu2",
        "description": "Il faccione è un akita",
        "version": "1.0",
    },
    {
        "id": 34,
        "title": "Pippo pluto e paperino",
        "description": "Personaggi dei fumetti",
        "version": "1.0",
    },
    {
        "id": 35,
        "title": "Pippo pluto e paperino2",
        "description": "Personaggi dei fumetti",
        "version": "1.0",
    },
    {
        "id": 41,
        "title": "Pippo pluto e paperino3",
        "description": "Personaggi dei fumetti",
        "version": "1.0",
    }
]

class HomePage extends Component{
    render(){
        let TopicMaps = TOPICMAPS;
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
                    <Graph />
                </div>
                <div className="column div-options">
                    <TopicMapsList topicmaps={TopicMaps} />
                </div>
            </div>
        )
    }
}

export default HomePage;
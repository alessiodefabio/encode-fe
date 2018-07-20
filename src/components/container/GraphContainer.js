import React, {Component} from 'react';
import Graph from "../component/Graph";
import Constants from '../utils/constants';

const TOPICS = [
    {
        "id": 6,
        "name": "Minnie",
        "subjectLocator": null,
        "subjectIdentifier": null,
        "scopeOfTopic": [],
        "varNameTopic": null,
        "outgoingTopic": [
            {
                "id": 4,
                "associationBetweenTopics": null
            }
        ]
    },
    {
        "id": 7,
        "name": "ZioPaperone",
        "subjectLocator": null,
        "subjectIdentifier": null,
        "scopeOfTopic": [],
        "varNameTopic": null,
        "outgoingTopic": [
            {
                "id": 3,
                "associationBetweenTopics": null
            }
        ]
    }
]

let topics;


class GraphContainer extends Component {

    /*openTopicMap(topicMapId){
        console.log("Sto per fare la chiamata");
        fetch(`${Constants.API_URL}/protected/v1/topics?topic_map_id=${topicMapId}`, {
            method: 'get',

        })
            .then((response) => {
                if(!response.ok){
                    throw new Error("Topic map with id " + topicMapId + " not exist!");
                }

                topics = response.json();
            })
            .catch((error) => {
                console.error("Fetch error: ", error);
            })
    };

    componentDidMount(){
        this.openTopicMap(41)
    }*/

    render(){
        return(

            <Graph/>

        )
    }

}




export default GraphContainer;
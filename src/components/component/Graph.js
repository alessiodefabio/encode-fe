import React, {Component} from 'react';
import Node from "./node/Node";
import PropTypes from 'prop-types';
import Constants from "../utils/constants";

let topics;

class Graph extends Component{

    openTopicMap(topicMapId){
        console.log("Sto per fare la chiamata");
        fetch(`${Constants.API_URL}/public/v1/topics?topic_map_id=${topicMapId}`, {
            method: 'get',
            headers: Constants.API_HEADERS
        })
        .then((response) => {
            if(!response.ok){
                throw new Error("Topic map with id " + topicMapId + " not exist!");
            }

            topics = response.json();
            console.log(topics);
        })
        .catch((error) => {
            console.error("Fetch error: ", error);
        })

        return topics;
    };

    

    componentDidMount(){
        const pippo = this.openTopicMap(41)
        console.log(pippo);
    }

    render(){
       /* console.log(this.props.topics);
        let topics = this.props.topics.map((topic) =>  {
        return <Node {...topic}  />});*/

        const svgStyle = {
            height: 100,
            width: 100
        };

        return(
            <div>
                <svg style={svgStyle}>
                    <g id="1">
                        {/*{topics}*/}
                    </g>
                </svg>
            </div>
        );
    }

}

Graph.propTypes = {
    topics: PropTypes.arrayOf(PropTypes.object)
};


export default Graph;
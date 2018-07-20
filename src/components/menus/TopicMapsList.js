import React, {Component} from 'react';
import TopicMapElement from "../component/TopicMapElement";



class TopicMapsList extends Component{
    render(){
            console.log(this.props.topicmaps);
            let topicMaps = this.props.topicmaps.map((topicMap, id) => (
                <TopicMapElement topiMap = {topicMap} key={id+1}/>
                ));

        return(
            <div className="topic-map-list">
                {topicMaps}
            </div>
        );
    }
}

export default TopicMapsList;
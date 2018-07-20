import React, {Component} from 'react';

class TopicMapElement extends Component{
    render(){
        console.log(this.props.topiMap);
        return(
            <div>
                <div key={this.props.topiMap.elementId}>
                    <p>{this.props.topiMap.title}</p>
                    <p>{this.props.topiMap.description}</p>
                    <p>{this.props.topiMap.version}</p>
                </div>
            </div>
        )
    }
}

export default TopicMapElement;
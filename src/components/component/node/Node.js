import React, {Component} from 'react';
import buildNodeFormType from '../node/node.factory';

class Node extends Component {

/*    constructor(){
        super(...props);

    };*/

    render(){

        let nodeProps = buildNodeFormType(this.props.type);

        let gProps = {};
        let node = <path {...nodeProps} /> ;
        let label =( <text > nodeProps.name</text>);

        return(
            <g {...gProps} >
                {node}
                {label}
            </g>
        );
    }
}


export default Node;
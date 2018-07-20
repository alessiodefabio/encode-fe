import constants from '../../utils/constants';

function buildNodeFromType(...nodeProps){

    switch(nodeProps.type){
        case constants.TOPIC_TYPE.TOPIC:
            let topicDetails;
            return topicDetails = {
                id : nodeProps.id,
                name: nodeProps.name,
                type: nodeProps.type,
                subjectLocator: nodeProps.subjectLocator,
                subjectIdentifier: nodeProps.subjectIdentifier,
                instanceOf: nodeProps.instance_of,
                topicMapId: nodeProps.topic_map_id
            }
    }
}



export default{buildNodeFromType};
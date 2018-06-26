import React, {Component} from 'react';
import {Menu, Dropdown, Icon, Input} from 'semantic-ui-react';

/*state = {};

handleItemClick = (e, { name }) => this.setState({ activeItem: name });*/

class SmallMenu extends Component{
    render(){

        /*const { activeItem } = this.state;*/

        return(
            <div className="sidebar-div">
                <Menu style={{"backgroundColor":"#104fa2"}} icon>
                    <Menu.Item className="top-menu-item" name='userOption'>
                        <img id="logo-top-menu" src={require('../../images/Encode_logo.png')}/>
                    </Menu.Item>
                    <span title="User">
                        <Menu.Item className="top-menu-item" name='userOption'>
                            <Icon name='user' />
                        </Menu.Item>
                    </span>
                    <span title="Save">
                        <Menu.Item className="top-menu-item" name='saveTopicMap' >
                            <Icon  name='save' />
                        </Menu.Item>
                    </span>
                    <span title="New Topic Map">
                        <Menu.Item className="top-menu-item" name='newTopicMap' >
                            <Icon  name='plus square outline' />
                        </Menu.Item>
                    </span>
                    <span title="Delete Topic Map">
                        <Menu.Item className="top-menu-item" name='deleteTopicMap'>
                            <Icon  name='remove' />
                        </Menu.Item>
                    </span>
                    <span title="Add Topic">
                        <Menu.Item className="top-menu-item" name='addTopic'>
                            <Icon  name='plus' />
                        </Menu.Item>
                    </span>
                    <span title="Remove Topic">
                        <Menu.Item className="top-menu-item" name='removeTopic'>
                            <Icon  name='minus' />
                        </Menu.Item>
                    </span>
                    <span title="Download">
                        <Menu.Item className="top-menu-item" name='downloadTopicMap'>
                            <Icon  name='download' />
                        </Menu.Item>
                    </span>
                    <span title="Upload">
                        <Menu.Item className="top-menu-item" name='uploadTopicMap'>
                            <Icon  name='upload' />
                        </Menu.Item>
                    </span>
                    <span title="Search">
                        <Menu.Item className="top-menu-item" name='search'>
                            <Icon  name='search' />
                        </Menu.Item>
                    </span>
                    <span title="Settings">
                        <Menu.Item className="top-menu-item" name='settings'>
                            <Icon  name='settings' />
                        </Menu.Item>
                    </span>
                    <Menu.Item className="top-menu-item" name='signOut' position='right' >
                        <span title="SignOut">
                            <Icon  name='sign out alternate' />
                            </span>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default SmallMenu;
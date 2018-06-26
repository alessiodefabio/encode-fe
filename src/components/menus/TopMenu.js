import React, {Component} from 'react';
import {Menu, Dropdown, Icon, Responsive} from 'semantic-ui-react';



class TopMenu extends Component{
    render(){
        return(
            <div  className="div-top-menu">
                <Menu style={{"backgroundColor":"#104fa2"}} className="top-menu" icon='labeled'>
                    <Menu.Item className="top-menu-item" name='userOption'>
                        <img id="logo-top-menu" src={require('../../images/Encode_logo.png')}/>
                    </Menu.Item>
                    <Menu.Item className="top-menu-item" name='userOption'>
                        <Icon name='user' />
                        User
                     </Menu.Item>
                    <Menu.Item className="top-menu-item" name='saveTopicMap' >
                        <Icon  name='save' />
                        Save
                    </Menu.Item>
                    <Menu.Item className="top-menu-item" name='newTopicMap' >
                        <Icon  name='plus square outline' />
                        New Topic Map
                    </Menu.Item>
                    <Menu.Item className="top-menu-item" name='deleteTopicMap'>
                        <Icon  name='remove' />
                        Delete Topic Map
                    </Menu.Item>
                    <Menu.Item className="top-menu-item" name='addTopic'>
                        <Icon  name='plus' />
                        Add Topic
                    </Menu.Item>
                    <Menu.Item className="top-menu-item" name='uploadTopicMap'>
                        <Icon  name='minus' />
                        Remove Topic
                    </Menu.Item>
                    <Menu.Item className="top-menu-item" name='downloadTopicMap'>
                        <Icon  name='download' />
                        Download
                    </Menu.Item>
                    <Menu.Item className="top-menu-item" name='uploadTopicMap'>
                        <Icon  name='upload' />
                        Upload
                    </Menu.Item>
                    <Menu.Item className="top-menu-item" name='search'>
                        <Icon  name='search' />
                        Search
                    </Menu.Item>
                    <Menu.Item className="top-menu-item" name='settings'>
                        <Icon  name='settings' />
                        Settings
                    </Menu.Item>
                    <Menu.Item className="top-menu-item" name='signOut' position='right'>
                        <Icon  name='sign out alternate' />
                        Sign Out
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default TopMenu;
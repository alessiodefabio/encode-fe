import React, {Component} from 'react';
import {Menu, Dropdown, Icon, Input} from 'semantic-ui-react';

/*state = {};

handleItemClick = (e, { name }) => this.setState({ activeItem: name });*/

class SidebarMenu extends Component{
    render(){

        /*const { activeItem } = this.state;*/

        return(
            <div className="sidebar-div">
                <Menu className="sidebar-menu" vertical size='large'>
                    <Menu.Item >
                        <Input placeholder='Search...' />
                    </Menu.Item>
                    <Menu.Item>
                        Home
                        <Menu.Menu>
                            <Menu.Item
                                name='search'>
                                Search
                            </Menu.Item>
                            <Menu.Item name='add' >
                                Add
                            </Menu.Item>
                            <Menu.Item name='about' >
                                Remove
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu.Item>

                    <Menu.Item name='browse' >
                        <Icon name='grid layout' />
                        Browse
                    </Menu.Item>
                    <Menu.Item
                        name='messages'>

                        Messages
                    </Menu.Item>

                    <Dropdown item text='More'>
                        <Dropdown.Menu>
                            <Dropdown.Item icon='edit' text='Edit Profile' />
                            <Dropdown.Item icon='globe' text='Choose Language' />
                            <Dropdown.Item icon='settings' text='Account Settings' />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu>
            </div>
        )
    }
}

export default SidebarMenu;
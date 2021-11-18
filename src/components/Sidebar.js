import React from 'react'
import {CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem} from 'cdbreact';
import {NavLink, Link} from 'react-router-dom';


const Sidebar=()=>{
    return (
        <div style={{display:'flex', height:'100%', overflow:'scroll initial'}}>
            <CDBSidebar id="side" className="text-dark" backgroundColor="rgb(255,255,255)">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <Link to="/dashboard">Bluecube</Link>
                </CDBSidebarHeader>
                <CDBSidebarContent className="sidebar-content text-light">
                    <CDBSidebarMenu className="text-dark">
                        <NavLink exact to="/dashboard" activeClassName="activeClicked" >
                            <CDBSidebarMenuItem icon="home" className="text-dark" style={{border:'1px black', borderRadius:'10px', boxShadow:'1px 1px 1px 1px #888888'}}>
                                Home
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/dashboard" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="message" className="text-dark">
                                Message
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <h5>
                             <CDBSidebarMenuItem>
                                SHARE
                            </CDBSidebarMenuItem>
                        </h5>
                        <NavLink exact to="/dashboard" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="challenge" className="text-dark">
                                Challenge
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/dashboard" activeClassName="activeClicked">
                             <CDBSidebarMenuItem icon="party" className="text-dark">
                                Party
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/dashboard" activeClassName="activeClicked">
                             <CDBSidebarMenuItem icon="connect" className="text-dark">
                                Connect
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/dashboard" activeClassName="activeClicked">
                             <CDBSidebarMenuItem icon="parade" className="text-dark">
                                Parade
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/dashboard" activeClassName="activeClicked">
                             <CDBSidebarMenuItem icon="group" className="text-dark">
                                Group
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink exact to="/dashboard" activeClassName="activeClicked">
                             <CDBSidebarMenuItem icon="columns" className="text-dark">
                                Banking
                            </CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>

            </CDBSidebar>
        </div>
    )
}

export default Sidebar;
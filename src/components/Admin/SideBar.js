
import 'react-pro-sidebar/dist/css/styles.css';
import { FaMobileAlt, FaHome, FaUser } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";

import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import img from '../../assets/bg2.jpg'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom'
const SideBar = (props) => {
    const { image, collapsed, toggled, handleToggleSidebar } = props
    return (
        <div>
            <ProSidebar

                collapsed={collapsed}>


                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        KShop
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu >
                        <MenuItem
                            icon={<FaTachometerAlt />}

                        >
                            <NavLink to="/admin"></NavLink>
                            Dashboard
                        </MenuItem>
                        <MenuItem icon={<FaHome />}><NavLink to="/">Home</NavLink></MenuItem>
                    </Menu>
                    <Menu
                    >
                        <SubMenu
                            suffix={<span className="badge yellow">2</span>}
                            title='Quản lý'
                            icon={<MdManageAccounts />}
                        >
                            <MenuItem icon={<FaUser />} ><Link to='/admin/manage-user' />Người dùng</MenuItem>
                            <MenuItem icon={<FaMobileAlt />}><Link to='/admin/manage-product' />Sản phẩm</MenuItem>
                        </SubMenu>

                    </Menu>
                </SidebarContent>
            </ProSidebar>;
        </div >
    )
}
export default SideBar;
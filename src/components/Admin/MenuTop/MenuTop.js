import React from 'react';
import { Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, PoweroffOutlined } from '@ant-design/icons'
import './MenuTop.scss';
import JHLogo from '../../../assets/img/png/logo-white.png'

export default function MenuTop(props){
    
    const {menuCollapsed, setMenuCollapsed } = props;
    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <img 
                className="menu-top__left-logo" 
                src={JHLogo}
                alt="Juan Hervas"
                />
            <Button icon={menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} type="link" onClick={() => setMenuCollapsed(!menuCollapsed)} />
            </div>
            <div className="menu-top__right">
                <Button type ="link">
                    <PoweroffOutlined />
                </Button>

            </div>
        </div>
    )
}
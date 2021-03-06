import React, { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import useAuth from '../hooks/useAuth';
import MenuTop from '../components/Admin/MenuTop';
import MenuSider from '../components/Admin/MenuSider';
import AdminSignIn from '../pages/Admin/SignIn/SingIn';


import "./LayoutAdmin.scss"

export default function LayoutAdmin(props) {
    
    const { routes } = props;
    const [ menuCollapsed, setMenuCollapsed ] = useState(false);
    const { Header, Content, Footer } = Layout
    const { user, isLoading } = useAuth();


    if(!user && !isLoading){
        return(
            <>
            <Route path="/admin/login" component={AdminSignIn}/>
            <Redirect to="/admin/login" />
            </>
        )
    }
    
    if(user && !isLoading){
        return(
            <div>
                <Layout>
                    <MenuSider menuCollapsed={menuCollapsed}/>
                <Layout className="layout-admin" style={{marginLeft: menuCollapsed ? "80px" : "200px"}}>
                        <Header className= "layout-admin__header">
                            <MenuTop menuCollapsed={menuCollapsed} setMenuCollapsed={setMenuCollapsed}/>
                            </Header>
                            <Content className= "layout-admin__content">
                                <LoadRoutes routes={routes} />
                            </Content>
                            <Footer className="layout-admin__footer">
                                Juan Hervas V
                            </Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }

    return null; 
}

function LoadRoutes({routes}){

    return (
        <Switch>
            {routes.map((route, index) =>(
        <Route
            key={index}
            path={route.path}
            exact ={route.exact}
            component = {route.component}
        />
    ))}
        </Switch>
    )
}
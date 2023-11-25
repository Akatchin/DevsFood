import React from 'react';
import { Route, Routes } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Tooltip as ReactTooltip } from "react-tooltip"

import { Container, Menu, PageBody } from './AppStyled';

import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';

import PrivateRoute from './components/PrivateRoute';
import MenuItem from './components/MenuItem';
import Cart from './components/Cart';
import ProductItem from './components/ProductItem';

export default () => {

    const name = useSelector(state => state.user.name);

    return (
        <Container>
            <Menu>
                <MenuItem title="Loja" icon="/assets/store.png" link="/"/>
                <MenuItem title="Pedidos" icon="/assets/order.png" link="/orders"/>
                <MenuItem title="Meu perfil" icon="/assets/profile.png" link="/profile"/>
            </Menu>
            <PageBody>
            <Routes>
                <Route exact path="/" element={<HomeScreen />}/>
                <Route path='/orders' element={
                <PrivateRoute>
                    <div>Tela de pedidos</div>
                </PrivateRoute>}/>
                <Route path='/profile' element={
                <PrivateRoute >
                    <div>Tela de perfil</div>
                </PrivateRoute>}/>
                <Route path="/tela2/:nome" element={<Tela2Screen />}/>
            </Routes>
            </PageBody>
            <Cart/>
            <ReactTooltip id="tip-top" place="top" effect="solid"/>
            <ReactTooltip id="tip-right" place="right" effect="solid"/>
        </Container>
    );
}

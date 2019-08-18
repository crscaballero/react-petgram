import React, { useContext, Suspense } from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo';
import { NavBar } from './components/NavBar';

const Home = React.lazy(() => import('./pages/Home'));
const Detail = React.lazy(() => import('./pages/Detail'));
const Favs = React.lazy(() => import('./pages/Favs'));
const User = React.lazy(() => import('./pages/User'));
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

import { Router, Redirect } from '@reach/router';
import { Context } from './Context';

export const App = () => {
    const { isAuth } = useContext(Context);
    return (
        <Suspense fallback={<div />}>
            <GlobalStyle />
            <Logo />
            <Router>
                <NotFound default />
                <Home path='/' />
                <Home path='/pet/:categoryId' />
                <Detail path='/detail/:detailId' />
                {!isAuth && <NotRegisteredUser path='/login' />}
                {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
                {!isAuth && <Redirect noThrow from='/user' to='/login' />}
                {isAuth && <Redirect noThrow from='/login' to='/' />}
                <Favs path='/favs' />
                <User path='/user' />
            </Router>
            <NavBar />
        </Suspense>
    );
};

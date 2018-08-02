import React from 'react'

import Header from '../common/template/header';
import SideBar from '../common/template/sidebar';
import Footer from '../common/template/footer';
import Messages from '../common/msg/message';

export default props => (
    <div className='wrapper'>
        <Header/>
        <SideBar />
        <div className='content-wrapper'>
            {props.children}
        </div>
        <Footer />
        <Messages />
    </div>
)
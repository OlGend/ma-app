import React, { Component } from 'react';

import './Footer.scss'
class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <p>All rights reserved { new Date().getFullYear() }</p>
            </div>
        );
    }
}

export default Footer;
import React from 'react';

import './Footer.scss'

interface Props {
    createdBy: string;
    link: string;
    challengeFrom?: string
}

const Footer = ({createdBy, link, challengeFrom}: Props) => {
    return (
        <div className='footer'>
            Created by <a className='footer_link' href={link} target='_blank' > {createdBy} </a> 
            {challengeFrom != null ? ` - ${challengeFrom}` : null}
        </div>
    )
}

export default Footer;
//Created by <b>leonidasdel</b> - devchallenges.io
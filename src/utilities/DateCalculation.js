import React from 'react'
import moment from 'moment';

export const DateCalculation = (date) => {
    const postData = moment(date).fromNow();
    return (
        <span className='text-[rgba(56,65,93,0.355988)] tracking-[-0.5625px]'>
            Posted {postData}
        </span>
    )
}

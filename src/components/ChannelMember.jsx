import React from 'react';

const ChannelMember = (props) => {
    const { name, role, lastSeen, status } = props;
    return (
        <div className='member xui-p-1'>
            <div className='xui-d-flex xui-flex-ai-center'>
                <div className='xui-w-45 xui-h-45'>
                    <img className='xui-w-fluid-100 xui-h-fluid-100 xui-bdr-rad-circle' src="https://img.freepik.com/free-photo/portrait-handsome-young-man-with-arms-crossed-holding-white-headphone-around-his-neck_23-2148096439.jpg?semt=ais_hybrid" alt="" />
                </div>
                <div className='member-bio'>
                    <h3 className='xui-font-sz-100 deep-blue-color'>{name}</h3>
                    <p className='xui-font-sz-70 xui-opacity-7 xui-mt-half'>{role}</p>
                </div>
                <div className='xui-w-80 xui-d-flex xui-flex-dir-column xui-flex-ai-flex-end'>
                    <p className='xui-font-sz-70 xui-opacity-7'>{lastSeen}</p>
                    <p className={`xui-font-sz-70 ${status === 'available' ? 'blue-color' : status === 'busy' ? 'secondary-color-60' : ''}`}>{status === 'available' ? 'Available' : status === 'busy' ? 'Busy' : ''}</p>
                </div>
            </div>
        </div>
    );
};

export default ChannelMember;
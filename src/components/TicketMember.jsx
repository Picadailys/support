import React from 'react';

const TicketMember = (props) => {
    const { title, lastSeen, status } = props;
    return (
        <div className='ticket-member xui-p-half'>
            <div className='xui-d-flex xui-flex-ai-center'>
                <div className='xui-w-35 xui-h-35'>
                    <img className='xui-w-fluid-100 xui-h-fluid-100 xui-bdr-rad-circle' src="https://img.freepik.com/free-photo/portrait-handsome-young-man-with-arms-crossed-holding-white-headphone-around-his-neck_23-2148096439.jpg?semt=ais_hybrid" alt="" />
                </div>
                <div className='member-bio xui-px-half' style={{width: 'calc(100% - 135px)'}}>
                    <h3 className='xui-font-sz-85'>{title}</h3>
                    <p className='xui-opacity-7 xui-font-sz-70 xui-d-flex xui-flex-ai-center xui-grid-gap-half xui-mt-half'>TCK0101 <span style={{width: '2px', height: '2px'}} className='xui-d-inline-block xui-bg-black xui-bdr-rad-circle'></span> Via App <span style={{width: '2px', height: '2px'}} className='xui-d-inline-block xui-bg-black xui-bdr-rad-circle'></span> <span className='deep-blue-color xui-font-w-600'>Incoming Call</span> </p>
                </div>
                <div className='xui-w-100 xui-d-flex xui-flex-dir-column xui-flex-ai-flex-end'>
                    <div className={`xui-font-sz-70 xui-p-half xui-text-white xui-bdr-rad-half ${status === 'high' ? 'error-bg-100' : status === 'low' ? 'secondary-bg-60' : ''}`}>{status === 'high' ? 'High Priority' : status === 'low' ? 'Low Priority' : ''}</div>
                    <p className='xui-font-sz-70 xui-opacity-7 xui-mt-half'>{lastSeen}</p>
                </div>
            </div>
        </div>
    );
};

export default TicketMember;
import React from 'react';
import Search2 from '../../components/custom-icons/Search2';
import Plus from '../../components/custom-icons/Plus';
import FileDownload from '../../components/custom-icons/FileDownload';
import DownloadFile from '../../components/custom-icons/DownloadFile';
import Dropdown from '../../components/Dropdown';
import TicketMember from '../../components/TicketMember';

const Tickets = () => {
    return (
        <div className="ui">
		<div className="left-menu">
            <div className='xui-py-1-half xui-px-1 ticket-left-header xui-d-flex xui-flex-ai-center xui-flex-jc-space-between'>
                <h3 className='xui-font-sz-120 xui-font-w-600'>All Tickets</h3>
                <div className='xui-d-flex xui-flex-ai-center xui-grid-gap-half'>
                    <div className='xui-w-35 xui-h-35 xui-bdr-rad-half nude-bg-20 xui-d-flex xui-flex-jc-center xui-flex-ai-center'>
                        <Search2 />
                    </div>
                    <div className='xui-w-35 xui-h-35 xui-bdr-rad-half nude-bg-20 xui-d-flex xui-flex-jc-center xui-flex-ai-center'>
                        <Plus />
                    </div>
                </div>
            </div>
				<div className="list-friends">
                <TicketMember title='Unable to create pin' lastSeen='8:16AM' status='high' />
                        <TicketMember title='Unable to create pin' lastSeen='8:16AM' status='high' />
                        <TicketMember title='Unable to create pin' lastSeen='8:16AM' status='high' />
                <TicketMember title='Unable to create pin' lastSeen='8:16AM' status='high' />
                <TicketMember title='Unable to create pin' lastSeen='8:16AM' status='low' />
                <TicketMember title='Unable to create pin' lastSeen='8:16AM' status='low' />
				</div>
		</div>
		<div className="chat">
            <div className='top xui-p-1 xui-bg-white xui-w-fluid-100'>
                <div className='xui-d-flex xui-flex-ai-center'>
                    <img className='xui-w-50 xui-h-50 xui-bdr-rad-circle xui-bdr-white xui-bdr-w-2 xui-bdr-s-solid' src={`https://img.freepik.com/free-photo/portrait-handsome-young-man-with-arms-crossed-holding-white-headphone-around-his-neck_23-2148096439.jpg?semt=ais_hybrid`} alt="" />
                    <div className='xui-pl-half' style={{width: 'calc(100% - 50px)'}}>
                        <h3 className='xui-font-sz-100'>Ayodele Emmauel Ukpong</h3>
                        <p className='xui-opacity-7 xui-mt-half xui-font-sz-75 xui-d-flex xui-flex-ai-center xui-grid-gap-half'>TCK0101 <span style={{width: '2px', height: '2px'}} className='xui-d-inline-block xui-bg-black xui-bdr-rad-circle'></span> Via App </p>
                    </div>
                </div>
                <Dropdown width="24" height="24">
                    <p className='xui-font-sz-80'>Low Priority</p>
                    <p className='xui-font-sz-80 xui-mt-1-half'>High Priority</p>
                    <p className='xui-font-sz-80 xui-mt-1-half'>Escalate to channel</p>
                    <p className='xui-font-sz-80 xui-mt-1-half'>Resolve</p>
                </Dropdown>
            </div>
			<div className="messages">
            <div className='xui-d-flex xui-flex-jc-flex-end xui-mt-2'>
                            <div>
                                <div className={'ticket-chat-box me blue-light'}>
                                    <p className='xui-font-sz-90 xui-opacity-7 xui-font-w-600'>Hello, How are you today?</p>
                                </div>
                                <p className='xui-font-sz-80 xui-mt-half xui-text-right'>8:16 am</p>
                            </div>
                        </div>
                        <div className='xui-d-flex xui-flex-jc-flex-start xui-mt-2'>
                            <div>
                                <div className={'ticket-chat-box xui-d-flex xui-flex-ai-center you blue-light'}>
                                    <div className='xui-w-50'>
                                        <FileDownload />
                                    </div>
                                    <div className='xui-px-1' style={{width: 'calc(100% - 95px)'}}>
                                        <p className='xui-font-sz-90 xui-opacity-7 xui-font-w-600'>Receipt of transaction for 2024 service year.</p>
                                        <p className='xui-font-sz-75 xui-opacity-7 xui-font-w-600 xui-mt-half'>PDF . 1Page . 1h ago</p>
                                    </div>
                                    <div className='download-pdf xui-w-45 xui-h-45 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-bdr-rad-circle'>
                                        <DownloadFile />
                                    </div>
                                </div>
                                <p className='xui-font-sz-80 xui-mt-half xui-text-left'>8:16 am</p>
                            </div>
                        </div>
                        <div className='xui-d-flex xui-flex-jc-flex-start xui-mt-2'>
                            <div>
                                <div className={'ticket-chat-box you blue-light'}>
                                    <p className='xui-font-sz-90 xui-opacity-7 xui-font-w-600'>Hello, How are you today?</p>
                                </div>
                                <p className='xui-font-sz-80 xui-mt-half xui-text-left'>8:16 am</p>
                            </div>
                        </div>
			</div>
            <section className='write-form xui-d-flex xui-flex-ai-center'>
                <div className='xui-w-fluid-100 xui-d-flex xui-flex-ai-center xui-mt-1 ticket-msg-box-holder'>
                    <div className='ticket-chat-msg-box-holder xui-pr-half'>
                        <div className='ticket-chat-msg-box-actions xui-d-flex xui-flex-ai-center'>
                            <div className='ticket-chat-msg-box-action xui-d-flex xui-flex-ai-center xui-flex-jc-center xui-cursor-not-allowed'>
                                <Search2 />
                            </div>
                            <input type="text" placeholder='Type a message...' />
                        </div>
                    </div>
                    <button className='ticket-chat-msg-send-box xui-d-flex xui-flex-ai-center xui-flex-jc-center'>
                        <Plus />
                    </button>
                </div>
            </section>
		</div>
	    </div>
    );
};

export default Tickets;
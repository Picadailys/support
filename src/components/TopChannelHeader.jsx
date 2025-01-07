import { React, useState } from 'react';
import Dropdown from '../components/Dropdown';
import { Close } from '@carbon/icons-react';
import ChannelMember from './ChannelMember';

const TopChannelHeader = () => {
    const [isChannelMembers, setChannelMembers] = useState(false);

    const toggleChannelMembers = () => setChannelMembers(!isChannelMembers);
    return (
        <div className='channel-top-chat-header xui-p-1 xui-bg-white xui-w-fluid-100'>
            <div className='xui-d-flex xui-flex-ai-center xui-grid-gap-half'>
                <div className='xui-d-flex xui-flex-ai-center xui-grid-gap-1'>
                    <img className='xui-w-40 xui-h-40 xui-bdr-rad-circle' src="https://img.freepik.com/free-photo/portrait-handsome-young-man-with-arms-crossed-holding-white-headphone-around-his-neck_23-2148096439.jpg?semt=ais_hybrid" alt="" />
                    <img className='xui-w-40 xui-h-40 xui-bdr-rad-circle' src="https://img.freepik.com/free-photo/portrait-handsome-young-man-with-arms-crossed-holding-white-headphone-around-his-neck_23-2148096439.jpg?semt=ais_hybrid" alt="" />
                    <img className='xui-w-40 xui-h-40 xui-bdr-rad-circle' src="https://img.freepik.com/free-photo/portrait-handsome-young-man-with-arms-crossed-holding-white-headphone-around-his-neck_23-2148096439.jpg?semt=ais_hybrid" alt="" />
                    <img className='xui-w-40 xui-h-40 xui-bdr-rad-circle' src="https://img.freepik.com/free-photo/portrait-handsome-young-man-with-arms-crossed-holding-white-headphone-around-his-neck_23-2148096439.jpg?semt=ais_hybrid" alt="" />
                    <img className='xui-w-40 xui-h-40 xui-bdr-rad-circle' src="https://img.freepik.com/free-photo/portrait-handsome-young-man-with-arms-crossed-holding-white-headphone-around-his-neck_23-2148096439.jpg?semt=ais_hybrid" alt="" />
                </div>
                <p className='xui-font-sz-85 xui-font-w-600 xui-cursor-pointer' onClick={toggleChannelMembers}>+59 others</p>
                
            </div>
            <Dropdown width="24" height="24">
                <p className='xui-font-sz-80'>Search</p>
                <p className='xui-font-sz-80 xui-mt-1-half'>Mute</p>
                <p className='xui-font-sz-80 xui-mt-1-half'>Tags</p>
            </Dropdown>
            {isChannelMembers && (
                <div className="channel-members-popup xui-p-2">
                    <div className="popup-header xui-d-flex xui-flex-jc-space-between xui-flex-ai-center">
                        <h3 className='xui-font-sz-120'>Channel members</h3>
                        <div className='xui-cursor-pointer' onClick={toggleChannelMembers}>
                            <Close size='25' color='#3D5059'/>
                        </div>
                    </div>
                    <div className="popup-content xui-mt-2 xui-d-grid xui-grid-col-1 xui-grid-gap-1">
                        <ChannelMember name='Ayodele Emmanuel Ukpong' role='Moderator' lastSeen='Last Seen' status='available' />
                        <ChannelMember name='Ayodele Emmanuel Ukpong' role='Moderator' lastSeen='Last Seen' status='available' />
                        <ChannelMember name='Ayodele Emmanuel Ukpong' role='Moderator' lastSeen='Last Seen' status='available' />
                        <ChannelMember name='Ayodele Emmanuel Ukpong' role='Moderator' lastSeen='Last Seen' status='busy' />
                        <ChannelMember name='Ayodele Emmanuel Ukpong' role='Moderator' lastSeen='Last Seen' status='busy' />
                    </div>
                </div>
            )}
        </div>
    );
};

export default TopChannelHeader;
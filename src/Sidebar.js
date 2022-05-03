import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption';
import { Button, IconButton } from '@mui/material'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import InboxIcon from '@mui/icons-material/Inbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';

function Sidebar() {
    return (
        <div className='sidebar'>
            <Button
                startIcon={<CreateOutlinedIcon fontSize='large' />}
                className='sidebar__compose'
            >
                Compose
            </Button>
            <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true} />
            <SidebarOption Icon={StarBorderIcon} title="Starred" number={54} />
            <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={54} />
            <SidebarOption Icon={LabelImportantIcon} title="Important" number={54} />
            <SidebarOption Icon={SendOutlinedIcon} title="Sent" number={54} />
            <SidebarOption Icon={InsertDriveFileOutlinedIcon} title="Drafts" number={54} />
            <SidebarOption Icon={ExpandMoreIcon} title="More" number={54} />

            <div className='sidebar__footer'>
                <div className='sidebar__footerIcons'>
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton>
                        <DuoIcon />
                    </IconButton>
                    <IconButton>
                        <PhoneIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
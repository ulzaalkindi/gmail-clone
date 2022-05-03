import React from 'react'
import './EmailRow.css'
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import { Checkbox, IconButton } from '@mui/material'

function EmailRow() {
    return (
        <div className='emailRow'>
            <div className='emailRow__options'>
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
            </div>
            <h3 className='emailRow__title'>
                Title
            </h3>
            <div className='emailRow__message'>
                <h4>
                    Subject {" "}-
                    <span className='emailRow__description'>
                        {" "}Description
                    </span>
                </h4>
            </div>
            <p className='emailRow__time'>
                30 Apr
            </p>
        </div>
    )
}

export default EmailRow
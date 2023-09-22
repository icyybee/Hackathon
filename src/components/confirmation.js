import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import Success from './success';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Confirmation({ success, setSuccess }) {
    const handleClose = () => {
        setSuccess(false);
    };

    return (
        <div>
            <Dialog
                open={success}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    <Success setSuccess={setSuccess}/>
                </DialogContent>
            </Dialog>
        </div>
    );
}
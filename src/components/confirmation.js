import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import Success from './success';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    components: {
      MuiBackdrop: {
        styleOverrides: {
          root: {
            backgroundColor: 'rgba(21, 14, 40, 0.93)'
          },
        },
      },
    },
});

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Confirmation({ success, setSuccess }) {
    const handleClose = () => {
        setSuccess(false);
    };

    return (
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
    );
}
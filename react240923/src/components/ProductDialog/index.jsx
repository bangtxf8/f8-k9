import React from "react";
import {DialogTitle, Dialog, DialogContent, DialogActions, Button, DialogContentText, TextField, Box} from "@mui/material";
import '../../index.css'


function WhiteBar() {
    return (
        <Box
            sx={(theme) => ({
                height: 20,
                backgroundColor: 'white',
                ...theme.applyStyles('dark', {
                    backgroundColor: 'rgb(255 132 132 / 25%)',
                }),
            })}
        />
    );
}

export default function ({show, onClose, width}) {
    return (
        <>
            <Dialog
                open={show}
                onClose={onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" width={width}>
                    {"Create product"}
                </DialogTitle>
                <DialogContent>
                    <WhiteBar/>
                    <TextField className={'pt-2'} fullWidth placeholder="Name"/>
                    <WhiteBar/>
                    <TextField className={'pt-2'} fullWidth placeholder="Price"/>
                    <WhiteBar/>
                    <TextField className={'pt-2'} fullWidth placeholder="Order num"/>
                    <WhiteBar/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Close</Button>
                    <Button onClick={onClose} autoFocus>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
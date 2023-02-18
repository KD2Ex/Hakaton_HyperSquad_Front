import { Box, Button, Modal, Typography } from '@mui/material';
import React from 'react'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    borderRadius: '4px',
    boxShadow: 24,
    p: 4,
  };

const ModalPage = ({open, handleClose}) => {

    {console.log(handleClose)}

  return (
    <Modal 
        open={open}
        onClose={handleClose}
        
        >
            <Box sx={style}>
                <Typography>112312</Typography>
            </Box>
    </Modal>
  )
}

export default ModalPage;

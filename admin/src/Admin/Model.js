import Modal from '@mui/material/Modal';

const Model = ({open,img,setOpen}) => {
    
  const handleClose = () => setOpen(false);
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <img src={img} alt="" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',maxWidth:'80vw' }}/>
            </Modal>
        </>
    );
}

export default Model;
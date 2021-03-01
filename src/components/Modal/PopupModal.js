import React from 'react';
import Modal from 'react-modal';
import CancelIcon from '@material-ui/icons/Cancel';
import useStyles from './styles';
import {Typography,IconButton} from '@material-ui/core';
import {Link} from 'react-router-dom'

const PopupModal = ({open,setOpen,modal}) => {
    const classes=useStyles();
    if(!modal) return null;
    console.log(modal.data)
    if(modal.type==='followers') return (
        <div >
        <Modal  style={{
            overlay: {
              position: 'fixed',
              top: '25%',
              left: '30%',
              right: '30%',
              bottom: '25%',
              backgroundColor: 'transparent',
              zIndex:1
            },
            content: {
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              border: '1px solid #ccc',
              
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '20px',
              outline: 'none',
              padding: '20px'
            }
          }} ariaHideApp={false} isOpen={open}
        initWidth={800} 
  initHeight={400}>
  <div className={classes.row}>
  <Typography className={classes.title} variant="body2">Followers</Typography>
    <CancelIcon className={classes.close} onClick={()=>setOpen(!open)}/>
  </div>
       <div>
            <ul className={classes.list}>{modal.data.map((follow)=>(
                <Link to={`/user/${follow.login}`} className={classes.listitem}> <img src={follow.avatar_url} style={{width:'30px',borderRadius:'50%'}}/> &nbsp; {follow.login}</Link>
            ))}</ul>
       </div>
     
        </Modal>
        </div>
    );
    return (
        <div >
            <Modal  ariaHideApp={false} isOpen={open}>
                <CancelIcon className={classes.close} onClick={()=>setOpen(!open)}/>
            </Modal>
        </div>
    )
};

export default PopupModal;

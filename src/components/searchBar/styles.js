import {makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    searchBar:{
        width:800 ,
        [theme.breakpoints.down('md')]:{
            width:'100%'
        }
    }
}))

import {makeStyles} from '@material-ui/core';

export default makeStyles((theme) => ({
    listitem: {
      margin:'30px auto',
      color:'black',
      lineDecoration: 'none',
      cursor:'pointer',
      display:'flex',
      flexDirection:'row',
      borderWidth:'1px black',
      textDecoration: 'none',

    '&:focus, &:hover, &:visited, &:link, &:active': {
        textDecoration: 'none',
    }
    },
    title:{
      fontSize:20,
      fontWeight:'bold',
      marginLeft:'auto',
      marginRight:'auto'
    },
    list:{
      listStyleType: 'none'
    },
    row:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between'
    }
}))
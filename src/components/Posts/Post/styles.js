import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 250,
  },
  link:{
    textDecoration: 'none',

    '&:focus, &:hover, &:visited, &:link, &:active': {
        textDecoration: 'none',
    }
  }
});
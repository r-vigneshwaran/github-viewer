import React from 'react';
import useStyles from './styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'


const Posts=({setUser,post,HandleClickFollower})=> {

  const classes = useStyles();
  return (
    <Card  className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={post.avatar_url}
          title={post.login}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.login}
          </Typography>
         
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={()=>HandleClickFollower(post.login)} size="small" color="primary">
          following
        </Button>
        <Button size="small" color="secondary">
          <Link className={classes.link} onClick={()=>setUser(post.login)} to={`/user/${post.login}`} >Learn More</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
export default Posts;
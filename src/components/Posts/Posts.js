import React from 'react'
import {Grid} from '@material-ui/core'
import Post from './Post/Post'
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './styles'

const Posts = ({setUser,posts,HandleClickFollower}) => {
    const classes=useStyles();
    return (
        !posts.length ? (
            <div style={{display:'flex',justifyContent: 'center',margin:'50px'}}>
                <strong>Search for github profile</strong>
            </div>
            ) :  ( 
            <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid  container justify='center' spacing={4}>
            {posts.map((post)=>(
                <Grid key={post.id} xs={12} sm={6} md={4} lg={3} item>
                    <Post setUser={setUser}  HandleClickFollower={HandleClickFollower} post={post} />
                </Grid>
            ))}
        </Grid>
        </main>
        )
    )
}

export default Posts

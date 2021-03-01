import React,{useEffect,useState} from 'react';
import {Container} from '@material-ui/core';
import {Link,useParams} from 'react-router-dom';
import moment from 'moment';
import {GetUser,FetchSingleUserData} from '../../api/index';
import './style.css';


const User = () => {
    
    const [user,setUser]=useState([]);
    const [repos,setRepos]=useState([]);

    const HandleUser= async(username)=>{
        const res =  await FetchSingleUserData(username);
        console.log(res,"user details");
        setUser(res[0].data);
        setRepos(res[1].data);
    }

    let { username } = useParams();

    useEffect(() => {
        HandleUser(username);
      }, [username]);

    return (
    <div className="container">
    <Link to="/" className="btn btn-sm btn-dark mt-4 mb-2">Go Back</Link>
        <div className="row row-cols-2">
            <div className="col-sm-4 profile">
                <div className="profile-image">
                    <img className="user-image" src={user.avatar_url} alt={user.login}/>
                </div>
            </div>
        <div className="col-sm-6">
            <div className="profile-user-settings">

                <h1 className="profile-user-name">{user.login}</h1>

                <button className="btn profile-edit-btn"><a className="link" href={`https:github.com/${user.login}`}>visit Profile</a></button>

                <button className="btn profile-settings-btn" aria-label="profile settings"><i class="fas fa-cog" aria-hidden="true"></i></button>

            </div>

            <div className="profile-stats">

                <ul>
                    <li><span className="profile-stat-count">{user.public_repos}</span> Repos</li>
                    <li><span className="profile-stat-count">{user.followers}</span> followers</li>
                    <li><span className="profile-stat-count">{user.following}</span> following</li>
                </ul>

            </div>

            <div className="profile-bio text-justify-center">

                <p><span className="profile-real-name">{user.login}</span> {user.bio}</p>

            </div>
            <div class="container repos">
                <div class="row row-cols-2">
                {repos.map((repo)=>(

                    <div class="col grid-item">
                        <a className="link" href={`https://github.com/${user.login}/${repo.name}`}><strong>{repo.name}</strong></a>
                        {repo.description}
                    </div>
                ))}
                </div>
            </div>
        </div>
        </div>
    </div>
        
        
        )
    }
export default User
                
import axios from 'axios';

const url = 'https://api.github.com';
const source = axios.CancelToken.source();

export const getUsers =(query,pageNo,perPage)=>axios.get(`${url}/search/users?q=${query}&page=${pageNo}&per_page=${perPage}`, {
    cancelToken: source.token,
});

export const followersList =(user)=> axios.get(`${url}/users/${user}/followers`);

export const FetchSingleUserData=async (username)=>{
    let res=[];
    const GetUser=axios.get(`${url}/users/${username}`);
    
    const GetRepos=axios.get(`${url}/users/${username}/repos`);
    await axios.all([GetUser,GetRepos]).then(
        axios.spread((...allData)=>{
            console.log(allData)
            res = allData
        })
    )
    return res;
}
import {getUsers,followersList,GetUser} from './api/index'
import React,{useEffect,useState} from 'react';
import User from './Screen/User/User'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Screen/Home/Home';

const App=()=> {


  const [currentPage,setCurrentPage]=useState(1);
  const [query,setQuery]=useState('');
  const [posts,setPosts]=useState([]);
  const [open,setOpen]=useState(false);
  const [modal,setModal]=useState([]);
  const [user,setUser]=useState({});
  
  const fetchList =async (query,pageNo,perPage)=>{
   const res = await getUsers(query,pageNo,perPage);
   console.log(res.data.items);
   setPosts(res.data.items)
  }
  
 
  const HandleClickFollower=async(user)=>{
    const res= await followersList(user);
    console.log(res.data)
    setOpen(!open);
    setModal({
      type:'followers',
      ...res
    })
    console.log(modal)
  }

  useEffect(()=>{
    fetchList(query,currentPage,10)
  },[query,currentPage]);
 
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App" >
            <Home setUser={setUser}  currentPage={currentPage}  setQuery={setQuery} modal={modal} open={open} setOpen={setOpen} HandleClickFollower={HandleClickFollower} posts={posts} setCurrentPage={setCurrentPage}/>
          </div>
        </Route>
        <Route exact path='/user/:username' component={User}>
          <User />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

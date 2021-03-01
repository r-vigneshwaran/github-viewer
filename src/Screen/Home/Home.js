import React from 'react'
import Paginate from '../../components/pagination/Pagination';
import Posts from '../../components/Posts/Posts';
import Header from '../../components/Header/Header';
import PopupModal from '../../components/Modal/PopupModal';

const Home = ({setUser,currentPage,HandleSearch,setQuery,modal,open,setOpen,HandleClickFollower,posts,setCurrentPage}) => {
    return (
        <div>
            <Header currentPage={currentPage}  setQuery={setQuery}/>
            <PopupModal modal={modal} open={open} setOpen={setOpen}/>
            <Posts setUser={setUser}  currentPage={currentPage} HandleClickFollower={HandleClickFollower} posts={posts} setOpen={setOpen} open={open} />
            <Paginate currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>
    )
}

export default Home

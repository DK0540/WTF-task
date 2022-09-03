import React, { useEffect, useState } from 'react';
import Footer from './Footer/Footer';
import FooterTop from './Footer/FooterTop';
import "./page.css";
import SocialCard from './SocialCard';

// import axios from "axios";

const Gyms = () => {
    const [users, setUsers] = useState([]);
    const [allUsers, setAllUserse] = useState([])
    // const [loading, setLoading] = useState([false]);
    // const [posts, setPosts] =useState([]);
    // const [searchTitle, setSearchTitle] = useState("");

    useEffect(()=>{

    (async()=>{
   let userData;
   try {
     const response = await fetch("https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231");
     userData = (await response.json()).data;
     console.log(userData[0].gym_name)
   }catch (error){
     console.log(error);
     userData = [];
   }

   setAllUserse(userData);
   setUsers(userData);
    })();
    }, []);

  const filterCards = (event)=>{
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(
        user =>(`${user.gym_name}`.toLowerCase().includes(value))
    );
    setUsers(filteredUsers)
}

  return (
    <>
        <div>
        <img className='bgm' src={require("../Images/bgm.png")}alt="fgg" /> 
       </div>
       <input className='search-box' placeholder='Search' onInput={filterCards}/>

       <div className='container'>

     
       <div id='div1'>
        <h2>Filters</h2>
           <div className='filters'>
            <h1 >Location</h1>
            <br /><br />
            <input className='search-box2' type="text" placeholder='Enter Location'/>
            <br /><br /><br />
            <h1 >Price</h1>
            <br /><br />
            <input className='search-box3' type="text" placeholder='Max'/>
            <input className='search-box3' type="text" placeholder='Min'/>
            <br /><br /><br />
            <h1 >Cities</h1>
            <br /><br />
            <input className='search-box2' type="text" placeholder='Select city'/>
         </div>
       </div>
       
       <div className='gym'>
      {users.map((user,index)=>(
        <SocialCard userData={user} key="index"/>
       ))}
      
    </div>
    </div>
    <div >
    <FooterTop/>
    </div>
    <div >
    <Footer/>
    </div>
    </>
  )
}

export default Gyms





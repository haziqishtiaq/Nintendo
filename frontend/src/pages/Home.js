import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './home.css'

const Home = () => {
    const [chars, setChars] = useState("");

    useEffect(() => {
        axios.get('http://localhost:5000')
        .then(response => setChars(response.data))
        .catch(error => console.error(error));
      }, []);
        
      if (!chars) {
        return (<div>Loading...</div>);
      }
      
      return( 
      <div className="home">
            <div>
              <h1 className='nintendo'>Nintendo</h1>
            </div>
            
            <nav>
              <ul>
                <li><Link to="/mario">Mario</Link><span><img src={`http://localhost:5000${chars.mario.image1}`} alt="mario img" width={350} height={800}/></span></li>
                <li><Link to="/luigi">Luigi</Link><span><img src={`http://localhost:5000${chars.luigi.image1}`} alt="luigi img" width={350} height={800} /></span></li>
                <li><Link to="/peach">Peach</Link><span><img src={`http://localhost:5000${chars.peach.image1}`} alt="peach img" width={350} height={800} /></span></li>
              </ul>
            </nav>
            <nav>
              <ul>
                <li><Link to='/login'>Log In</Link></li>
                <li><Link to='/signup'>Sign Up</Link></li>
              </ul>
            </nav>
      </div>
)};

export default Home;
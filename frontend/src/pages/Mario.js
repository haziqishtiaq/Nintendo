import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './mario.css';

const Mario = () => {
    const [char, setChar] = useState("");

    useEffect(() => {
        axios.get('http://localhost:5000/mario')
          .then(response => setChar(response.data))
          .catch(error => console.error(error));
      }, []);
    
    return (
        <div className="mario">
            {char.image && (<img src={`http://localhost:5000${char.image}`} alt="Mario" />)}
            <h1>Name: {char.name}</h1>
            <h2>Role: {char.role}</h2>
            <h2>Description</h2>
            <p>{char.description}</p>
            <Link to='/'>Home</Link>
        </div>
    );
    
    };

export default Mario;
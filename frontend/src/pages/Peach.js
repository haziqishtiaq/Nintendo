import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './peach.css';

const Peach = () => {
    const [char, setChar] = useState("");

    useEffect(() => {
        axios.get('http://localhost:5000/peach')
          .then(response => setChar(response.data))
          .catch(error => console.error(error));
      }, []);
    
    return (
        <div className="peach">
            <img src={`http://localhost:5000${char.image}`} alt="Peach" style={{ width: 200}} />
            <h1>Name: {char.name}</h1>
            <h2>Role: {char.role}</h2>
            <h2>Description</h2>
            <p>{char.description}</p>
            <Link to='/'>Home</Link>
        </div>
    );
    
    };

export default Peach;
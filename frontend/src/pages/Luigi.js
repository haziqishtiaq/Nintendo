import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './luigi.css';

const Luigi = () => {
    const [char, setChar] = useState("");

    useEffect(() => {
        axios.get('http://localhost:5000/luigi')
          .then(response => setChar(response.data))
          .catch(error => console.error(error));
      }, []);
    
    return (
        <div className="luigi">
            <img src={`http://localhost:5000${char.image}`} alt="Luigi" style={{ width: 200}} />
            <h1>Name: {char.name}</h1>
            <h2>Role: {char.role}</h2>
            <h2>Description</h2>
            <div className='description-box'><p>{char.description}</p></div>
            <Link to='/'>Home</Link>
        </div>
    );
    
    };

export default Luigi;
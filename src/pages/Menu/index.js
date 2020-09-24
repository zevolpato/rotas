import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';


export default function Menu() {
  return (
    <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/quemsomos">Quem Somos</Link>
            </li>
          </ul>
        </nav>
    </div>
    );
}
 

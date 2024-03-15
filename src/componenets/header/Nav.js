import React from 'react'
import { Link } from "react-router-dom";
import { headerData } from './Headerdata'

const Nav = () => {
  return (
    <nav>
        <ul className="flex items-center justify-between gap-x-4">
              {headerData.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
    </nav>
  )
}

export default Nav
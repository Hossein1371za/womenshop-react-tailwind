import React from 'react'
import { Link } from 'react-router-dom'
import { headerData } from './Headerdata'

const NavMobile = () => {
  return (
    <nav>
        <ul className="flex flex-col items-center space-y-4 mt-16">
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

export default NavMobile
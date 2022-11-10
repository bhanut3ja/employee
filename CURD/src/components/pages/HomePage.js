import React from 'react'
import { Link } from 'react-router-dom'
import EmpListing from '../../EmpListing'
import ReactDOM from 'react-dom'

export default function HomePage() {
    return (
        <div className="text-center">
            <EmpListing />
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    )
}

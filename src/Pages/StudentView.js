import React from 'react'
import { Link } from "react-router-dom";
import CompanyList from '../components/Student/CompanyList';

function StudentView() {
    return (
        <main className='container'>
            <section className='card mt-3 d-flex flex-row justify-content-between p-3 custom-shadow'>
                <div>
                    <h1>Rachana Jadhav</h1>
                    <p className='text-secondary'>B.tech In computer Science engineering </p>
                </div>
                <div className="btn-container">
                    <Link to="/student/selectedby">
                        <button className='btn btn-success m-3'>Selected By Company </button>
                    </Link>
                    <Link to="/student/details">
                        <button className='btn btn-info m-3'>View Details</button>
                    </Link>
                </div>
            </section>

            <CompanyList />
        </main>
    )
}

export default StudentView

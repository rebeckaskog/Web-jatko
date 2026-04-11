import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-orange-50 shadow">
            <div className="container mx-auto flex justify-between items-center px-6 py-4">
                <h1 className="text-4xl font-bold font-serif text-orange-950">Rent Instruments</h1>
            </div>
            <nav>
                <div className="container mx-auto flex justify-end items-center px-6 mb-4">
                    <ul className="flex space-x-6">
                        <li>
                            <Link to="/" className="text-orange-950 font-semibold text-xl hover:text-orange-600">Home</Link>
                        </li>
                        <li>
                            <a href="catalogue.html" className="text-orange-950 font-semibold text-xl hover:text-orange-600">Instruments</a>
                        </li>
                        <li>
                            <Link to="/rent" className="text-orange-950 font-semibold text-xl hover:text-orange-600">Rent</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
import React from "react";

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
                            <a href="index.html" className="text-orange-950 font-semibold text-xl hover:text-orange-600">Home</a>
                        </li>
                        <li>
                            <a href="catalogue.html" className="text-orange-950 font-semibold text-xl hover:text-orange-600">Instruments</a>
                        </li>
                        <li>
                            <a href="rent.html" className="text-orange-950 font-semibold text-xl hover:text-orange-600">Rent</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
import React from "react";

export default function HowItWorks() {
    return (
        <section id="rent" className="bg-orange-50 py-16">
            <h4 className="text-center text-3xl mb-10 font-semibold text-orange-900">How it works</h4>
            <div className="container mx-auto px-6 text-center">
                <div className="grid md:grid-cols-3 gap-10">
                    <div className="bg-white p-6 shadow rounded-lg">
                        <p className="text-2xl font-semibold text-orange-900 mb-2">Step 1</p>
                        <p className="m-3">Choose your instrument</p>
                    </div>
                    <div className="bg-white p-6 shadow rounded-lg">
                        <p className="text-2xl font-semibold text-orange-900 mb-2">Step 2</p>
                        <p className="m-3">Fill in the form</p>
                    </div>
                    <div className="bg-white p-6 shadow rounded-lg">
                        <p className="text-2xl font-semibold text-orange-900 mb-2">Step 3</p>
                        <p className="m-3">Take home and enjoy!</p>
                    </div>
                </div>
            </div>
            <div className="text-center mt-10">
                <a href="rent.html" className="bg-orange-800 text-white px-8 py-4 rounded-lg font-semibold text-lx shadow hover:bg-orange-600">Rent Now</a>
            </div>
        </section>
    );
}
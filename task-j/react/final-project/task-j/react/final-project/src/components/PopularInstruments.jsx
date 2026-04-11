import React from "react";

export default function PopularInstruments() {
    return (
        <section id="instruments" className="bg-orange-50 py-16">
            <h3 className="text-center text-3xl mb-10 font-semibold text-orange-900">Popular Instruments</h3>
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                        <img src="/images/violin2.jpg" className="w-64 h-64 mx-auto object-contain rounded-lg shadow bg-white" alt="Violin"/>
                        <p className="mt-3 text-lg">Violin</p>
                    </div>
                    <div>
                        <img src="/images/Guitar2.jpeg" className="w-64 h-64 mx-auto object-contain rounded-lg shadow bg-white" alt="Guitar"/>
                        <p className="mt-3 text-lg">Guitar</p>
                    </div>
                    <div>
                        <img src="/images/cello2.jpg" className="w-64 h-64 mx-auto object-contain rounded-lg shadow bg-white" alt="Cello"/>
                        <p className="mt-3 text-lg">Cello</p>
                    </div>
                </div>
            </div>
            <div className="text-center mt-10">
                <a href="catalogue.html" className="bg-orange-800 text-white px-8 py-4 rounded-lg font-semibold text-lx shadow hover:bg-orange-600">Show more</a>
            </div>
        </section>
    );
}
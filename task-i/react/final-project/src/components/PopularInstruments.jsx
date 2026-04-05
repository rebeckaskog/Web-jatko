import React from "react";

export default function PopularInstruments() {
    return (
        <section id="instruments" class="bg-orange-50 py-16">
            <h3 class="text-center text-3xl mb-10 font-semibold text-orange-900">Popular Instruments</h3>
            <div class="container mx-auto px-6">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                        <img src="/images/violin2.jpg" class="w-64 h-64 mx-auto object-contain rounded-lg shadow bg-white" alt="Violin"/>
                        <p class="mt-3 text-lg">Violin</p>
                    </div>
                    <div>
                        <img src="/images/Guitar2.jpeg" class="w-64 h-64 mx-auto object-contain rounded-lg shadow bg-white" alt="Guitar"/>
                        <p class="mt-3 text-lg">Guitar</p>
                    </div>
                    <div>
                        <img src="/images/cello2.jpg" class="w-64 h-64 mx-auto object-contain rounded-lg shadow bg-white" alt="Cello"/>
                        <p class="mt-3 text-lg">Cello</p>
                    </div>
                </div>
            </div>
            <div class="text-center mt-10">
                <a href="catalogue.html" class="bg-orange-800 text-white px-8 py-4 rounded-lg font-semibold text-lx shadow hover:bg-orange-600">Show more</a>
            </div>
        </section>
    );
}
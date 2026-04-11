import React from "react";

export default function Hero() {
    return (
        <section className="h-[70vh] flex items-center justify-center overflow-hidden pt-5">
            <div className="flex items-center space-x-8 w-full">
                <img src="images/cello2test.jpeg" className="h-[70vh] w-4/5 object-contain" alt="Cello" />

                <div className="w-4/5 text-left">
                    <h2 className="text-3xl font-bold font-serif text-orange-950">Play today, return tomorrow!</h2>
                </div>

            </div>
        </section>
    );
}
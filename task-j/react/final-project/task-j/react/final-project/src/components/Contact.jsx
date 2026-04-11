import React from "react";

export default function Contact() {
    return (
        <section className="bg-orange-50 py-16">
            <div className="container mx-auto px-6">
                <h6 className="text-3xl font-semibold text-orange-900 mb-6 text-center">Contact Us</h6>
                <div className="flex items-center gap-10 text-lg text-gray-700">
                    <p><strong className="text-orange-900">Phone:</strong> +358 50 123 4567</p>
                    <p><strong className="text-orange-900">Email:</strong> rent@instruments.com</p>
                    <p><strong className="text-orange-900">Address:</strong> Rantakatu 5, Kokkola, Finland</p>
                </div>
            </div>
        </section>
    );
}
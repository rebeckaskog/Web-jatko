import React from "react";

export default function Contact() {
    return (
        <section class="bg-orange-50 py-16">
            <div class="container mx-auto px-6">
                <h6 class="text-3xl font-semibold text-orange-900 mb-6 text-center">Contact Us</h6>
                <div class="flex items-center gap-10 text-lg text-gray-700">
                    <p><strong class="text-orange-900">Phone:</strong> +358 50 123 4567</p>
                    <p><strong class="text-orange-900">Email:</strong> rent@instruments.com</p>
                    <p><strong class="text-orange-900">Address:</strong> Rantakatu 5, Kokkola, Finland</p>
                </div>
            </div>
        </section>
    );
}
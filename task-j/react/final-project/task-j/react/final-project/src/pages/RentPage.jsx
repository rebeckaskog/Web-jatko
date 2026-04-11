import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RentInfo from "../components/RentInfo";
import RentForm from "../components/RentForm";
import RentResponse from "../components/RentResponse";
export default function RentPage() {
    const [instrument, setInstrument] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [accept, setAccept] = useState("");
    const [errors, setErrors] = useState({});
    const [response, setResponse] = useState(null);

    function validate() {
        const e = {};
        if (!instrument) e.instrument = "Please choose an instrument";
        if (!name.trim()) e.name = "Name is required";
        if (!email.includes("@")) e.email = "Enter valid email";
        if (!accept) e.accept = "You must accept the terms";
        setErrors(e);
        return Object.keys(e).length === 0;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        if (!validate()) return;

        const data = { instrument, name, email, accept };
        const res = await fetch("https://httpbin.org/post", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data),
        });
        const json = await res.json();
        setResponse(json);
    }

    function clearForm() {
        setInstrument("");
        setName("");
        setEmail("");
        setAccept("");
        setErrors({});
        setResponse(null);
    }

    return (
        <div className="bg-white min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <RentInfo />
                <RentForm
                instrument={instrument}
                setInstrument={setInstrument}
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                accept={accept}
                setAccept={setAccept}
                errors={errors}
                handleSubmit={handleSubmit}
                clearForm={clearForm} />
                <RentResponse response={response}/>
            </main>
            <Footer />
        </div>
    );
}
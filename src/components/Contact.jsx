import {useState} from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("Sending...");

        emailjs
            .send(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                form,
                "YOUR_PUBLIC_KEY"
            )
            .then(() => {
                setStatus("Message Sent Successfully!");
                setForm({ name: "", email: "", message: "" });
            })
            .catch(() => {
                setStatus("Failed to Send Message. Please Try Again.");
            });
    };

    return (
        <section id="contact" className="py-20 px-6 mx-w-3xl mx-auto">

            <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                <input
                    className="border p-3 rounded"
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                <input
                    className="border p-3 rounded"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <textarea
                    className="border p-3 rounded"
                    placeholder="Message"
                    rows="5"
                    value={form.message}
                    onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                    }
                />

                <button className="bg-blue-600 text-white py-2 rounded" type="submit">
                    Send Message
                </button>

                <p className="text-sm text-gray-500">{status}</p>

            </form>

        </section>
    );
}
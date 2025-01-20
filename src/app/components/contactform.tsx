import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const serviceId = "service_e63lf77";
      const templateId = "template_fmet7nj";
      const userId = "V71qc4AZCcf-Fnl7A";

      await emailjs.send(serviceId, templateId, formData, userId);

      //toast.success("Message sent successfully!");

      toast.success("Il messaggio è stato recapitato correttamente!", { // watch a tutorial about react-toastify
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Si è verificato un errore durante l'invio del messaggio:", error);
      toast.error("Si è verificato un errore durante l'invio del messaggio. Per favore, riprova di nuovo");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="flex flex-col flex-grow justify-center items-center p-4 min-h-screen">
      <div className="min-h-screen w-full">
        <div className="p-4">
          <h2 className="lg:text-start text-center text-black dark:text-white text-4xl font-bold">Entra in contatto da qui!</h2>
        </div>
        <div className="p-4 min-h-screen flex flex-col justify-center items-center">
          <form onSubmit={handleSubmit} className="lg:w-fit w-full p-6 flex flex-col justify-center items-center gap-4 border-4 border-black dark:border-white rounded-lg shadow-lg" autoComplete="off" encType="multipart/form-data">
            <div className="lg:w-96 w-full">
              <label htmlFor="name" className="hidden">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nome e cognome"
                className="w-full p-2 rounded-lg ring-2 ring-black dark:ring-white bg-transparent text-black dark:text-white"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="lg:w-96 w-full">
              <label htmlFor="email" className="hidden">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Indirizzo email"
                className="w-full p-2 rounded-lg ring-2 ring-black dark:ring-white bg-transparent text-black dark:text-white"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="lg:w-96 w-full">
              <label htmlFor="message" className="hidden">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="La tua richiesta"
                className="w-full h-44 p-2 rounded-lg ring-2 ring-black dark:ring-white resize bg-transparent text-black dark:text-white"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" disabled={isSending} className="outline outline-4 outline-black dark:outline-white p-3 w-52 rounded-full text-center text-black dark:text-white hover:bg-red-700 hover:text-white hover:animate-pulse">
              {isSending ? "Sto inviando..." : "Invia messaggio"}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
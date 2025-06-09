import { useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import Button from "../components/Button";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [buttonState, setButtonState] = useState({
    text: "send message",
    isSuccess: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      setButtonState({
        text: "sending...",
        isSuccess: false,
      });      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setButtonState({
        text: "EMAIL SENT",
        isSuccess: true,
      });

      setTimeout(() => {
        setButtonState({
          text: "send message",
          isSuccess: false,
        });
      }, 5000);
    } catch (error) {
      console.error("Error sending message:", error);

      alert(
        "There was a problem sending your message. Please try again later."
      );

      setButtonState({
        text: "send message",
        isSuccess: false,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex-center px-5 md:px-10 md:mt-40 mt-20"
    >
      <div className="w-full h-full md:px-10">
        <TitleHeader
          title="Get in Touch – Let’s Connect."
          sub="Contact Me"
        />
        <div className="grid-12-cols mt-16 flex flex-col lg:flex-row gap-8">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="flex-center border border-white-50/50 bg-black-100 rounded-xl p-4 lg:p-6 xl:p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7 text-white-50 mb-2"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name">Your name</label>
                  <input
                    className="w-full px-4 py-4 md:text-base text-sm placeholder:text-blue-50 bg-blue-100 rounded-md"
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email">Your Email</label>
                  <input
                    className="w-full px-4 py-4 md:text-base text-sm placeholder:text-blue-50 bg-blue-100 rounded-md"
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What’s your email address?"
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    className="w-full px-4 py-4 md:text-base text-sm placeholder:text-blue-50 bg-blue-100 rounded-md resize-none"
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Button
                    text={buttonState.text}
                    className="md:w-full md:h-16 w-60 h-12 relative z-20"
                    type="submit"
                    isSuccess={buttonState.isSuccess}
                    isLoading={loading}
                  />
                </motion.div>
              </form>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 flex items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-full">
              <motion.div
                className="relative overflow-hidden rounded-xl border border-white-50/20 h-full opacity-60"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="./contact-image.png"
                  alt="Contact Me"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent mix-blend-saturation"></div>
              </motion.div>
              <motion.div
                className="absolute bottom-6 right-6 bg-black-100 border border-white-50/30 rounded-xl p-4 shadow-lg max-w-[85%]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-medium text-white">
                    Let's work together
                  </h3>
                  <p className="text-white-50 text-sm">
                    I'm available for new projects and collaborations
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

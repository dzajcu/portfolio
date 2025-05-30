import { useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import Button from "../components/Button";
import emailjs from "@emailjs/browser";

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
    console.log("form", form);
    e.preventDefault();
    setLoading(true);

    try {
      setButtonState({
        text: "sending...",
        isSuccess: false,
      });

      const result = await emailjs.sendForm(
        "service_0e5mi5v",
        "template_p1y891s",
        formRef.current,
        "aqpaRee11daCH2Adc"
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
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect."
          sub="Contact Me"
        />
        <div className="grid-12-cols mt-16">
          {" "}
          <div className="xl:col-span-5">
            <div className="flex-center border bg-black-100 rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7 text-white-50 mb-2"
              >
                <div>
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
                </div>
                <div>
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
                </div>
                <div>
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
                </div>
                <Button
                  text={buttonState.text}
                  className="md:w-full md:h-16 w-60 h-12 relative z-20"
                  type="submit"
                  isSuccess={buttonState.isSuccess}
                  isLoading={loading}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

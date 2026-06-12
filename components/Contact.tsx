import React, { useRef, useState } from "react";
import { Mail, MapPin, Send, CheckCircle, XCircle } from "lucide-react";
import Section from "./ui/Section";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  const isFormValid =
    userName.trim() !== "" &&
    userEmail.trim() !== "" &&
    isEmailValid &&
    message.trim() !== "";

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

  const checkEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.target.value);
    setIsEmailValid(e.target.validity.valid);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userEmail.trim() || !isEmailValid) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    emailjs
      .sendForm(serviceID, templateID, formRef.current!, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setSubmitStatus("success");
          formRef.current?.reset();
          setUserName("");
          setUserEmail("");
          setMessage("");
          setIsEmailValid(false);
          setEmailTouched(false);

          // Clear success message after 5 seconds
          setTimeout(() => {
            setSubmitStatus("idle");
          }, 5000);
        },
        (error) => {
          console.error("FAILED...", error.text);
          setSubmitStatus("error");

          // Clear error message after 5 seconds
          setTimeout(() => {
            setSubmitStatus("idle");
          }, 5000);
        },
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-50/50 dark:bg-slate-900/50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary-800/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Section>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Work <span className="text-gradient">Together</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Have a project in mind or want to discuss the latest tech? I'm
              always open to new opportunities and interesting conversations.
            </p>
          </div>
        </Section>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Section delay={100} className="space-y-8">
            <div className="glass-card p-8 rounded-2xl h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-500/10 rounded-lg text-primary-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">
                      Email Me
                    </p>
                    <a
                      href="mailto:dimermichel@gmail.com"
                      className="text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors"
                    >
                      dimermichel@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-violet-500/10 rounded-lg text-violet-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">
                      Location
                    </p>
                    <p className="text-slate-600 dark:text-slate-400">
                      Orlando, FL <br />
                      Available for Remote Work <br />
                      (Worldwide)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
                <p className="text-sm text-slate-600 dark:text-slate-400 italic">
                  "The only way to do great work is to love what you do."
                </p>
                <p className="text-sm font-semibold mt-2 text-slate-900 dark:text-slate-200">
                  - Steve Jobs
                </p>
              </div>
            </div>
          </Section>

          <Section delay={200}>
            <form className="space-y-4" ref={formRef} onSubmit={sendEmail}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full placeholder:text-gray-400 px-4 py-3 rounded-lg bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    onChange={(e) => checkEmail(e)}
                    onBlur={() => setEmailTouched(true)}
                    className={`w-full placeholder:text-gray-400 px-4 py-3 rounded-lg bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all ${emailTouched && !isEmailValid ? "border-red-500 focus:border-red-500 focus:ring-red-500/20 text-red-400" : ""}`}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={8}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full placeholder:text-gray-400 px-4 py-6 rounded-lg bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {/* Success/Error Messages */}
              {submitStatus === "success" && (
                <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-400">
                  <CheckCircle size={20} />
                  <span className="font-medium">
                    Message sent successfully! I'll get back to you soon.
                  </span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400">
                  <XCircle size={20} />
                  <span className="font-medium">
                    Failed to send message. Please try again.
                  </span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || !isFormValid}
                className="w-full cursor-pointer py-4 bg-gradient-to-r from-primary-700 to-primary-900 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-primary-500/25 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 border border-primary-700/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </Section>
        </div>
      </div>
    </section>
  );
};

export default Contact;

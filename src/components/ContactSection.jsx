import React, { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  LinkedinIcon,
  Locate,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import cn from "@/lib/utils";
import { MdWhatsapp } from "react-icons/md";
import { useToast } from "@/Hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl mb-4 font-bold text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto text-center">
          I’m a Frontend Developer specializing in React.js and Next.js,
          passionate about crafting interactive and user-friendly websites.
          Let’s connect to bring your ideas to life with modern web experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start  space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4>Email :</h4>
                  <a
                    href="mailto:mukulalamba888@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    mukulalamba888@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start  space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4>Phone :</h4>
                  <a
                    href="tel:8700423483"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 - 8700423483
                  </a>
                </div>
              </div>

              <div className="flex items-start  space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4>Location :</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Delhi, India
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.facebook.com/Mukul.alamba.222"
                  target="_blank"
                >
                  <Facebook />
                </a>
                <a href="https://wa.me/8700423483" target="_blank">
                  <MdWhatsapp className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/mukulsh888?igsh=dXRsZTBjb3N2dnJi"
                  target="_blank"
                >
                  {" "}
                  <Instagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/mukul-sharma-946bb8170?utm_source=share&utm_campaign=share_via&utm_text-left=profile&utm_medium=android_app"
                  target="_blank"
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>
          {/* form */}
          <div
            className="bg-card p-8 shadow-xs rounded-lg"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-left text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-md  border border-input bg-background focus:outline-hidden focus-ring2 focus-primary"
                  placeholder="Mukul Sharma"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-left text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-md  border border-input bg-background focus:outline-hidden focus-ring2 focus-primary"
                  placeholder="mukulalamba888@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-left text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  className="w-full px-4 py-3 rounded-md  border border-input bg-background focus:outline-hidden focus-ring2 focus-primary resize-none"
                  placeholder="Hello I Like to Talk About"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cursor-pointer cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}{" "}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Button from "../Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add your form submission logic here
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="bg-zinc-50 py-24 dark:bg-zinc-900 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
              Get in Touch
            </h2>
            <p className="mt-2 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Have a project in mind? Let&apos;s discuss how we can help bring it to life.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-16 sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-50"
                >
                  Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-zinc-900 sm:text-sm sm:leading-6 dark:bg-zinc-800 dark:text-zinc-50 dark:ring-zinc-600 dark:placeholder:text-zinc-500 dark:focus:ring-zinc-50"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-50"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-zinc-900 sm:text-sm sm:leading-6 dark:bg-zinc-800 dark:text-zinc-50 dark:ring-zinc-600 dark:placeholder:text-zinc-500 dark:focus:ring-zinc-50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-50"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-zinc-900 sm:text-sm sm:leading-6 dark:bg-zinc-800 dark:text-zinc-50 dark:ring-zinc-600 dark:placeholder:text-zinc-500 dark:focus:ring-zinc-50"
                    placeholder="Tell us about your project..."
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <Button type="submit" variant="primary">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}


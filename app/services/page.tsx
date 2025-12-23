import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

export const metadata: Metadata = {
  title: "Services - Tioga Technologies Ltd",
  description: "Discover our comprehensive IoT infrastructure, embedded systems, and renewable energy management solutions.",
};

const services = [
  {
    name: "IoT Infrastructure",
    description:
      "We develop robust, scalable IoT infrastructure solutions that connect renewable energy systems, enabling real-time monitoring, data collection, and intelligent decision-making. Our infrastructure is designed to handle the unique challenges of renewable energy distribution across Africa.",
    features: [
      "Scalable IoT network architecture",
      "Real-time data collection and processing",
      "Device connectivity and management",
      "Cloud-based infrastructure solutions",
      "Edge computing capabilities",
      "Secure communication protocols",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
  },
  {
    name: "Embedded Systems",
    description:
      "Our custom embedded systems are engineered for energy management applications, including monitoring devices, control systems, and intelligent sensors. These systems are optimized for reliability, efficiency, and long-term operation in diverse environmental conditions.",
    features: [
      "Custom hardware design and development",
      "Energy monitoring and control systems",
      "Real-time processing capabilities",
      "Low-power consumption design",
      "Ruggedized for harsh environments",
      "Firmware development and optimization",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8v2.25a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 18.55v-2.25M5 14.5l-1.57.393A9.065 9.065 0 002.625 12.75a48.745 48.745 0 00-1.32-.247 2.25 2.25 0 00-1.303 2.053v2.25" />
      </svg>
    ),
  },
  {
    name: "Renewable Energy Management Platforms",
    description:
      "We create next-generation platforms for managing renewable energy resources, optimizing distribution, predicting demand, and ensuring reliable power supply. Our intelligent systems help maximize the efficiency and reliability of clean energy infrastructure.",
    features: [
      "Energy resource optimization",
      "Demand prediction and forecasting",
      "Grid management and balancing",
      "Performance monitoring and analytics",
      "Automated control systems",
      "Integration with existing infrastructure",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    name: "Clean Energy Solutions",
    description:
      "Comprehensive solutions designed to accelerate Africa&apos;s transition to clean energy through innovative technology and sustainable practices. We provide end-to-end support from design to deployment and maintenance.",
    features: [
      "System design and architecture",
      "Deployment and integration services",
      "Training and support",
      "Maintenance and updates",
      "Performance optimization",
      "Scalability planning",
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Comprehensive IoT infrastructure, embedded systems, and renewable energy management 
              solutions designed to power Africa&apos;s clean energy transition.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl space-y-20">
            {services.map((service, index) => (
              <div
                key={service.name}
                className={`flex flex-col gap-8 lg:flex-row ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div className="flex-1">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                    {service.name}
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400"
                      >
                        <svg
                          className="h-6 w-6 flex-shrink-0 text-zinc-900 dark:text-zinc-50 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200 p-8 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-center min-h-[300px]">
                  <div className="text-center">
                    <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900">
                      {service.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button href="/contact" variant="primary">
              Get Started with Our Services
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

export const metadata: Metadata = {
  title: "Services - TioGaTech",
  description: "Discover our comprehensive range of technology services for your business.",
};

const services = [
  {
    name: "Web Development",
    description:
      "We create custom web applications using modern frameworks and technologies. Our solutions are scalable, performant, and built with best practices to ensure long-term success.",
    features: [
      "Custom web applications",
      "Responsive design",
      "Performance optimization",
      "Modern frameworks (React, Next.js, etc.)",
      "API development and integration",
    ],
  },
  {
    name: "Cloud Solutions",
    description:
      "Leverage the power of cloud computing with our scalable infrastructure solutions. We help you migrate, optimize, and manage your cloud resources efficiently.",
    features: [
      "Cloud migration",
      "Infrastructure setup",
      "Serverless architecture",
      "DevOps and CI/CD",
      "Cost optimization",
    ],
  },
  {
    name: "Technology Consulting",
    description:
      "Get expert advice on technology strategy, architecture, and implementation. We help you make informed decisions and choose the right solutions for your business.",
    features: [
      "Technology strategy",
      "Architecture design",
      "Technology selection",
      "Best practices guidance",
      "Technical audits",
    ],
  },
  {
    name: "Support & Maintenance",
    description:
      "Keep your systems running smoothly with our ongoing support and maintenance services. We ensure your technology stays up-to-date and performs optimally.",
    features: [
      "24/7 monitoring",
      "Regular updates",
      "Security patches",
      "Performance tuning",
      "Bug fixes and troubleshooting",
    ],
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
              Comprehensive technology solutions tailored to your business needs.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl space-y-16">
            {services.map((service, index) => (
              <div
                key={service.name}
                className={`flex flex-col gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="flex-1">
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
                          className="h-6 w-6 flex-shrink-0 text-zinc-900 dark:text-zinc-50"
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
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900">
                      <svg
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                        />
                      </svg>
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


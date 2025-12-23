import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

export const metadata: Metadata = {
  title: "About Us - Tioga Technologies Ltd",
  description: "Learn more about Tioga Technologies and our mission to power Africa's clean energy transition.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
              About Tioga Technologies
            </h1>
            <div className="mt-10 space-y-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              <p>
                Tioga Technologies Ltd is an IoT infrastructure and embedded systems company 
                specializing in the development of core infrastructure around IoT, embedded systems, 
                and intelligent renewable energy solutions. We are at the forefront of cutting-edge 
                next-generation renewable energy management platforms designed to power Africa&apos;s 
                clean energy transition.
              </p>
              
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mt-12">
                Our Mission
              </h2>
              <p>
                Our mission is to accelerate Africa&apos;s transition to clean, renewable energy 
                through innovative IoT infrastructure and intelligent energy management solutions. 
                We develop scalable, reliable systems that enable efficient distribution and 
                management of renewable energy resources across the continent.
              </p>

              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mt-12">
                What We Do
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                    IoT Infrastructure Development
                  </h3>
                  <p>
                    We build robust, scalable IoT infrastructure that connects renewable energy 
                    systems, enabling real-time monitoring, data collection, and intelligent 
                    decision-making. Our infrastructure solutions are designed to handle the 
                    unique challenges of renewable energy distribution in Africa.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                    Embedded Systems Engineering
                  </h3>
                  <p>
                    Our team develops custom embedded systems for energy management applications, 
                    including monitoring devices, control systems, and intelligent sensors. These 
                    systems are optimized for reliability, efficiency, and long-term operation 
                    in diverse environmental conditions.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                    Renewable Energy Management Platforms
                  </h3>
                  <p>
                    We create next-generation platforms for managing renewable energy resources, 
                    optimizing distribution, predicting demand, and ensuring reliable power supply. 
                    Our intelligent systems help maximize the efficiency and reliability of clean 
                    energy infrastructure.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mt-12">
                Our Impact
              </h2>
              <p>
                By developing cutting-edge technology solutions for renewable energy management, 
                Tioga Technologies is contributing to Africa&apos;s sustainable future. Our 
                platforms enable more efficient use of renewable resources, reduce energy waste, 
                and support the continent&apos;s transition away from fossil fuels.
              </p>
              <p>
                We work with energy providers, governments, and organizations across Africa to 
                deploy intelligent energy management systems that make clean energy more accessible, 
                reliable, and cost-effective for communities and businesses.
              </p>

              <div className="mt-10">
                <Button href="/contact" variant="primary">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

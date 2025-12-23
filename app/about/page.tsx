import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

export const metadata: Metadata = {
  title: "About Us - TioGaTech",
  description: "Learn more about TioGaTech and our mission to empower businesses with technology.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
              About TioGaTech
            </h1>
            <div className="mt-10 space-y-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              <p>
                At TioGaTech, we are a team of passionate technologists dedicated to helping
                businesses thrive in the digital age. With years of combined experience in
                web development, cloud architecture, and technology consulting, we bring
                expertise and innovation to every project.
              </p>
              <p>
                Our mission is simple: to empower businesses with cutting-edge technology
                solutions that drive growth, efficiency, and success. We believe that every
                business, regardless of size, deserves access to world-class technology services.
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mt-12">
                Our Values
              </h2>
              <ul className="list-disc list-inside space-y-3 ml-4">
                <li>
                  <strong className="text-zinc-900 dark:text-zinc-50">Excellence:</strong>{" "}
                  We strive for excellence in everything we do, delivering high-quality solutions
                  that exceed expectations.
                </li>
                <li>
                  <strong className="text-zinc-900 dark:text-zinc-50">Innovation:</strong>{" "}
                  We stay at the forefront of technology, constantly learning and adopting
                  the latest tools and best practices.
                </li>
                <li>
                  <strong className="text-zinc-900 dark:text-zinc-50">Partnership:</strong>{" "}
                  We build long-term relationships with our clients, working collaboratively
                  to achieve their goals.
                </li>
                <li>
                  <strong className="text-zinc-900 dark:text-zinc-50">Integrity:</strong>{" "}
                  We conduct business with honesty, transparency, and respect for our clients
                  and team members.
                </li>
              </ul>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mt-12">
                Why Choose Us
              </h2>
              <p>
                What sets us apart is our commitment to understanding your unique business needs
                and delivering tailored solutions that make a real impact. We don&apos;t just
                build technology—we build relationships and help you achieve your vision.
              </p>
              <p>
                Whether you&apos;re a startup looking to establish your digital presence or an
                established business seeking to modernize your operations, we have the expertise
                and passion to help you succeed.
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


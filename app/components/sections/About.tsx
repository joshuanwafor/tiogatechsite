import Button from "../Button";

export default function About() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            About Us
          </h2>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            At TioGaTech, we are passionate about delivering innovative technology solutions
            that drive business success. With years of experience and a team of expert developers,
            we help businesses transform their digital presence and achieve their goals.
          </p>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Our commitment to excellence, attention to detail, and customer-focused approach
            sets us apart. We believe in building long-term partnerships with our clients,
            understanding their unique needs, and delivering solutions that make a real impact.
          </p>
          <div className="mt-10">
            <Button href="/about" variant="primary">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}


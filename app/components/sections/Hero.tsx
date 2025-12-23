import Button from "../Button";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50">
          Empowering Your Business with
          <span className="text-zinc-600 dark:text-zinc-400"> Modern Technology</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          We deliver cutting-edge solutions that help your business thrive in the digital age.
          From web development to cloud services, we&apos;ve got you covered.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button href="/contact" variant="primary">
            Get Started
          </Button>
          <Button href="/services" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}


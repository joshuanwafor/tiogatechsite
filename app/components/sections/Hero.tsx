import Button from "../Button";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-8 inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
          <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
          Powering Africa&apos;s Clean Energy Transition
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50">
          Next-Generation
          <span className="block mt-2 text-zinc-600 dark:text-zinc-400">
            Renewable Energy Management
          </span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Tioga Technologies develops cutting-edge IoT infrastructure and embedded systems 
          for intelligent renewable energy solutions. We&apos;re building the future of 
          clean energy management across Africa.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6 flex-wrap gap-y-4">
          <Button href="/contact" variant="primary">
            Get Started
          </Button>
          <Button href="/services" variant="outline">
            Our Solutions
          </Button>
        </div>
      </div>
    </section>
  );
}

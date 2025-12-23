import Button from "../Button";

export default function About() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
                Leading Africa&apos;s Clean Energy Transition
              </h2>
              <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Tioga Technologies Ltd is an IoT infrastructure and embedded systems company 
                at the forefront of developing cutting-edge next-generation renewable energy 
                management platforms. We specialize in creating intelligent solutions designed 
                to power Africa&apos;s clean energy transition.
              </p>
              <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Our expertise spans IoT infrastructure development, custom embedded systems, 
                and intelligent renewable energy management platforms. We combine innovation 
                with practical solutions to address the unique challenges of renewable energy 
                distribution and management across the continent.
              </p>
              <div className="mt-10">
                <Button href="/about" variant="primary">
                  Learn More About Us
                </Button>
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200 p-8 dark:from-zinc-800 dark:to-zinc-900">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-zinc-900 dark:bg-zinc-50 flex items-center justify-center">
                    <svg className="h-6 w-6 text-white dark:text-zinc-900" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Renewable Energy</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Intelligent management platforms</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-zinc-900 dark:bg-zinc-50 flex items-center justify-center">
                    <svg className="h-6 w-6 text-white dark:text-zinc-900" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">IoT Infrastructure</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Scalable and robust systems</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-zinc-900 dark:bg-zinc-50 flex items-center justify-center">
                    <svg className="h-6 w-6 text-white dark:text-zinc-900" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8v2.25a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 18.55v-2.25M5 14.5l-1.57.393A9.065 9.065 0 002.625 12.75a48.745 48.745 0 00-1.32-.247 2.25 2.25 0 00-1.303 2.053v2.25" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Embedded Systems</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Custom hardware solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

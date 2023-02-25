export const ErrorPage = () => (
  <>
    {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
    <main className="grid min-h-full place-items-center bg-white py-24 px-6 sm:py-32 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Something went wrong.
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, it looks like you encountered an error.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="mailto:hello@marklyck.com"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send us an email so we can fix it
          </a>
        </div>
      </div>
    </main>
  </>
)
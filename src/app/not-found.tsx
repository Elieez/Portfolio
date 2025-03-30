export default function NotFound() {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-primary text-white rounded hover:bg-primary-dark transition-colors"
        >
          Go Home
        </a>
      </main>
    );
  }
  
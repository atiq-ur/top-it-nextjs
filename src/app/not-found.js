import Link from "next/link";

const NotFound = () => {
  return (
    <section className="flex items-center h-screen p-16 bg-gray-300 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <h2 className="text-7xl font-bold text-primary mb-6">Oops!</h2>
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-4xl text-gray-600">
            <span className="sr-only">Error</span> 404 Page Not Found
          </h2>
          <Link href="/" className="btn-primary">
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;

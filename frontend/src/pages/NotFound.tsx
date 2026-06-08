import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#09090B] text-[#FAFAFA]">

      <div className="flex min-h-screen flex-col items-center justify-center px-6">

        <div className="text-center">

          <h1
            className="
              text-8xl
              font-bold
              tracking-[-0.06em]
              text-[#E4E4E7]
            "
          >
            404
          </h1>

          <h2 className="mt-4 text-2xl font-semibold">
            Page Not Found
          </h2>

          <p className="mt-3 text-sm text-[#A1A1AA]">
            The page you're looking for doesn't exist
            or may have been moved.
          </p>

          <Link
            to="/"
            className="
              mt-8
              inline-flex
              items-center
              justify-center
              rounded-xl
              bg-[#E4E4E7]
              px-5
              py-3
              text-sm
              font-medium
              text-black
              transition
              hover:bg-white
            "
          >
            Back Home
          </Link>

        </div>

      </div>

    </div>
  );
}
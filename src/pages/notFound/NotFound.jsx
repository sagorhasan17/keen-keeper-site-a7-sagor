import { Link } from "react-router";
const NotFound = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-gray-900 to-slate-800 flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        {/* 404 Number */}
        <h1 className="text-[100px] sm:text-[140px] md:text-[180px] font-extrabold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-green-500 to-purple-500 drop-shadow-lg leading-none">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-300 mt-4 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
          The page you are looking for doesn’t exist, has been removed, or the
          link might be broken.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="px-8 py-3 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-cyan-500/30 transition-all duration-300"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-8 py-3 rounded-2xl border border-white/20 text-white font-semibold bg-white/5 backdrop-blur-md hover:bg-white/10 hover:scale-105 transition-all duration-300"
          >
            Go Back
          </button>
        </div>

        {/* Decorative Glow */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-52 h-52 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default NotFound;

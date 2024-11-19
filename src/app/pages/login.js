export default function Login() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#1a1a1a] text-white">
        <div className="bg-[#2b2b2b] p-8 rounded-lg shadow-lg w-[90%] max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded bg-[#383838] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 rounded bg-[#383838] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 rounded hover:bg-blue-700 transition"
            >
              Sign In
            </button>
          </form>
          <p className="mt-4 text-center text-sm">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    );
  }
  
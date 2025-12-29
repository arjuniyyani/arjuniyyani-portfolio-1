export default function Footer() {
    return (
      <footer className="border-t border-gray-800 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between gap-4">
          <p>© {new Date().getFullYear()} Arjun Iyyani. All rights reserved.</p>
  
          <div className="flex gap-4">
            <a
              href="https://github.com/arjuniyyani"
              target="_blank"
              className="hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/arjuniyyani"
              target="_blank"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:arjuniyyani@gmail.com"
              className="hover:text-white transition"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    );
  }
  
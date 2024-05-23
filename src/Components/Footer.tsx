
export default function Footer() {
  return (
   <footer className="bg-black text-gray-400 py-12">
<div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
<div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
          A passionate Full-Stack Developer who thrives on building websites and
          applications. Explore my work and discover how I can help you
          transform your digital ideas into reality.
          </p>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-white transition-colors duration-300"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-white transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <ul>
              <li>
            <a
              href="https://github.com/Vaibhavghugretkar"
              className="hover:text-white transition-colors duration-300"
            >
              Github
            </a>
            </li>
            <li>
            <a
              href="https://x.com/Vaibhav_Gh7"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            </li>

            <li>
            <a
              href="https://www.instagram.com/vaibhav_gh7/"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
            </li>

            <li>
            <a
              href="https://www.linkedin.com/in/vaibhav-ghugretkar-97b024257/"
              className="hover:text-white transition-colors duration-300"
            >
              Linkedin
            </a>
            </li>

            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Me</h2>
          <p>Email: vaibhavghugretkar23@gmail.com</p>
          <p>Phone: +91 7676317955</p>
        </div>
        </div>
        
        <p className="text-center text-xs pt-8">© 2024 Vaibhav Gh | All rights reserved.</p>
   </footer>
  )
}

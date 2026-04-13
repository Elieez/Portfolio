export default function Hero() {
    return (
      <section className="hero">
        <div className="hero-content">
          <h1 className="font-bold">Elie Bou Absi</h1>
          <h1 className="font-bold">
            System Developer <span className="highlight">Building Digital Solutions</span>
          </h1>
          <p>
            Hi, I&apos;m Elie - a 24-year-old .NET developer based in Gothenburg. I specialize in C# and
            fullstack development, with a focus on building clean, practical software. Most recently I built
            AktieKoll, a Swedish insider trading tracker, and I&apos;m currently looking for my next junior or
            trainee role.
          </p>
          <div className="social-links">
            <a 
            href="https://github.com/Elieez" 
            target="_blank" 
            rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/elie-bou-absi-5b722123a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </section>
    );
  }
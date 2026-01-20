export default function SiteLayout({ children }) {
  return (
    <div>
      <header>
        <strong>Zamor Data & Models</strong>{" "}
        <nav style={{ display: "inline-block", marginLeft: 12 }}>
          <a href="/" style={{ marginRight: 10 }}>Home</a>
          <a href="/services" style={{ marginRight: 10 }}>Services</a>
          <a href="/demos" style={{ marginRight: 10 }}>Demos</a>
          <a href="/projects" style={{ marginRight: 10 }}>Projects</a>
          <a href="/about" style={{ marginRight: 10 }}>About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <main style={{ paddingTop: 20 }}>{children}</main>

      <footer style={{ marginTop: 40 }}>
        © {new Date().getFullYear()} Zamor Data & Models
      </footer>
    </div>
  );
}

import Navbar from '@/components/layout/Navbar';

export default function SiteLayout({ children }) {
  return (
    <div>
      
      {/* This is the only navbar */}
      <Navbar />

      <main>{children}</main>

      <footer>
        © {new Date().getFullYear()} Zamor Data & Models
      </footer>
    </div>
  );
}

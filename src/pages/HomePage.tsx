import NavBar from '../components/naviguation/NavBar';
import SectionPresentation from '../components/presensation/SectionPresentation';
import SectionProjects from '../components/projects/SectionProjects';
import SectionExperience from '../components/experience/SectionExperience';
import Footer from '../components/footer/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-slate-900 dark:text-slate-100 font-sans antialiased scroll-smooth transition-colors duration-300">

      <NavBar />

      <SectionPresentation />

      <SectionProjects />

      <SectionExperience />

      <Footer />
    </div>
  );
}

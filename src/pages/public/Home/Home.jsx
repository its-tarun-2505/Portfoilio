import AboutSummary from '../../../components/home/AboutSummary';
import HeroSection from '../../../components/home/HeroSection/HeroSection';
import FeaturedProjects from '../../../components/home/FeaturedProjects';
import SkillsSection from '../../../components/home/SkillsSection';
import ContactPreview from '../../../components/home/ContactPreview';

const Home = () => {

  return (
    <div>
        <HeroSection />
        <AboutSummary />
        <FeaturedProjects />
        <SkillsSection />
        <ContactPreview />
    </div>
  )
}

export default Home;
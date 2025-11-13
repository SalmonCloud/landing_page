import Hero from '../components/sections/Hero';
import Metrics from '../components/sections/Metrics';
import Services from '../components/sections/Services';
import MapPanel from '../components/sections/MapPanel';
import OSLibrary from '../components/sections/OSLibrary';
import CallToAction from '../components/sections/CallToAction';
import CommunitySection from '../components/sections/CommunitySection';
import StatusLegalBar from '../components/sections/StatusLegalBar';

const Home = () => (
  <>
    <Hero />
    <Metrics />
    <Services />
    <MapPanel />
    <OSLibrary />
    <CallToAction />
    <CommunitySection />
    <StatusLegalBar />
  </>
);

export default Home;

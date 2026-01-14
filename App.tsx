import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesBar from './components/ServicesBar';
import FeatureSection from './components/FeatureSection';
import CTASection from './components/CTASection';
import Logos from './components/Logos';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ServicesBar />

        {/* Main Info Section */}
        <section className="text-center feature-section-top">
          <div className="container">
            <h2 className='feature-heading'>
              Lorem Ipsum is simply dummy text of the printing.
            </h2>
            <p className='feature-text'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
              Lorem Ipsum has been the industry's
            </p>
          </div>
        </section>
        <section className="feature-wrapper">
          <FeatureSection
            title="is simply dummy text of the printing."
            highlight="Lorem Ipsum"
            description="KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. "
            image="public/images/activities.png"
          />

          <FeatureSection
            title="is simply dummy text of the printing."
            highlight="Lorem Ipsum"
            description="KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. "
            image="public/images/mockups.png"
            reverse
          />

          <FeatureSection
            title="is simply dummy text of the printing."
            highlight="Lorem Ipsum"
            description="KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. "
            image="public/images/vrman.png"
          />
        </section>

        <CTASection />
        <Logos />
        <Newsletter />
      </main>

      <Footer />
    </>
  );
};

export default App;

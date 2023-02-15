import React from 'react';
import About from './components/about';
import Contact from './components/contact';
import Heading from './components/heading';
import Navbar from './components/navbar';
import Project from './components/project';
// import Social from './components/social';
import Work from './components/work';

function App() {
  return (
    <div className="bg-[#292929] text-white snap-y snap-mandatory z-0">
      <header>
        {/* Navbar */}
        <Navbar />
      </header>
      <section className="md:px-20 sm:px-4 snap snap-y overflow-y-hidden">
        {/* About */}
        <Heading />
        {/* <About /> */}
        <About />
        {/* Work */}
        <Work />
        {/* Project */}
        <Project />
        {/* Contact */}
        <Contact />

      </section>
    </div>
  );
}

export default App;

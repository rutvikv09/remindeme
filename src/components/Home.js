// import React from 'react'
// import { Button, Typography } from '@mui/material'
// import { useNavigate } from 'react-router-dom'

// const Home = () => {
//     const Navigate=useNavigate();
//     return (
//         <>
//             <div className='home'>
//                 <Typography variant='h3'>Welcome</Typography>
//                 <div className='homeButtons'>
//                     <Button style={{margin:'10px'}} variant='contained' onClick={()=>Navigate('/signup')}>
//                         Signup
//                     </Button>
//                     <Button style={{margin:'10px'}} variant='contained' onClick={()=>Navigate('/login')}>
//                         Login
//                     </Button>
//                 </div>
//             </div>
//         </>
//     )
// }



// HomePage.js
// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';



// Hero Section Component
const HeroSection = () => (
  <div className="bg-gradient-to-b from-blue-200 to-blue-500 h-screen flex flex-col items-center justify-center text-center text-white">
    <h1 className="text-6xl font-bold mb-4">Never Forget Again!</h1>
    <p className="text-xl mb-6">Your ultimate solution for reminders, tasks, and organization.</p>
    <Link to="/signup" className="px-6 py-3 bg-purple-700 rounded-lg shadow-lg hover:bg-purple-600 transition duration-300">
      Get Started for Free
    </Link>
  </div>
);

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
    <div className="text-5xl mb-4">{icon}</div>
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
);

// Features Section
const FeaturesSection = () => (
  <section className="py-20 bg-gray-100">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold mb-10">Features You'll Love</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard 
          icon="🗓️" 
          title="Smart Reminders" 
          description="Set intelligent reminders that adapt to your schedule." 
        />
        <FeatureCard 
          icon="🔔" 
          title="Instant Notifications" 
          description="Receive notifications via email and push alerts." 
        />
        <FeatureCard 
          icon="📱" 
          title="Mobile Friendly" 
          description="Access your reminders from any device, anywhere." 
        />
        <FeatureCard 
          icon="🔒" 
          title="Data Security" 
          description="We prioritize your data privacy and security." 
        />
        <FeatureCard 
          icon="🧑‍🤝‍🧑" 
          title="Community Support" 
          description="Join a community of users for tips and support." 
        />
        <FeatureCard 
          icon="🕒" 
          title="24/7 Availability" 
          description="Our services are available around the clock." 
        />
      </div>
    </div>
  </section>
);

// Call to Action Section
const CallToAction = () => (
  <section className="py-20 bg-purple-600 text-white text-center">
    <h2 className="text-3xl font-bold mb-4">Join Us Today!</h2>
    <p className="mb-4">Start managing your tasks effortlessly with RemindMe.</p>
    <Link to="/signup" className="px-6 py-3 bg-white text-purple-600 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300">
      Sign Up Now
    </Link>
  </section>
);

// Footer Component
const Footer = () => (
  <footer className="py-6 bg-gray-800 text-white text-center">
    <p>&copy; 2024 RemindMe. All rights reserved.</p>
    <p>Contact us: <a href="mailto:support@remindme.com" className="text-purple-400">vaghanirutvik777@gmail.com</a></p>
  </footer>
);

// Main Home Page Component
const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default HomePage;

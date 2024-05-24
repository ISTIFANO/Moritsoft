import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import connect from '../assets/connect.gif';
import efacturation from '../assets/efacturation.gif';
import Smart from '../assets/Smart.gif';

import { Link } from "react-router-dom";
export default function Nosrealisations() {
    const [sectionTitle, setSectionTitle] = useState('Websites'); // Initial section title

    // Function to handle button clicks and update section title
    const handleButtonClick = (title) => {
        setSectionTitle(title);
    };

    return (
        <>
            <Navbar  /> 
            <div className="container pt-11 mx-auto p-4">
                <div className="flex justify-center space-x-4 mb-8">
                    <button className="bg-teal-500 text-white py-2 px-4 rounded-t-lg" onClick={() => handleButtonClick('Websites')}>Websites</button>
                   
                    <button className="bg-zinc-200 text-zinc-800 py-2 px-4 rounded-t-lg" onClick={() => handleButtonClick('Software')}>Software</button>
                </div>

                <div className="text-center mb-8">
                    <h2 className="text-2xl font-semibold" id="sectionTitle">{sectionTitle}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="contentSection">

                    {/* Conditional rendering based on section title */}
                    {sectionTitle === 'Websites' && (
                        <>
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                                <img src="https://placehold.co/600x400" alt="Billionaire Immo" className="w-full" />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">Billionaire Immo</h3>
                                </div>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                                <img src="https://placehold.co/600x400" alt="Billionaire Immo" className="w-full" />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">Billionaire Immo</h3>
                                </div>
                            </div><div className="bg-white shadow-lg rounded-lg overflow-hidden">
                                <img src="https://placehold.co/600x400" alt="Billionaire Immo" className="w-full" />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">Billionaire Immo</h3>
                                </div>
                            </div>
                            {/* Add other website content here */}
                        </>
                    )}


{sectionTitle === 'Software' && (
  <>
    <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
      <img
        alt=""
        src={efacturation}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
        <div className="p-4 sm:p-6">
          <time dateTime="2022-10-10" className="block text-xs text-white/90">10th Oct 2022</time>
          <a href="#">
            <h3 className="mt-0.5 text-lg text-white">How to position your furniture for positivity</h3>
          </a>
          <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?
          </p>
        </div>
      </div>
    </article>
    <article className="relative overflow-hidden rounded-lg  shadow transition hover:shadow-lg">
      <img
        alt="connect"
        src={connect}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
        <div className="p-4 sm:p-6">
          <time dateTime="2022-10-10" className="block text-xs text-white/90">10th Oct 2022</time>
          <a href="#">
            <h3 className="mt-0.5 text-lg text-white">How to position your furniture for positivity</h3>
          </a>
          <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?
          </p>
        </div>
      </div>
    </article>
  </>
)}

                </div>
            </div>
            {/* section 2 */}
            <div className="bg-slate-50 text-black py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Are you ready to launch your online business?</h2>
            <p className="text-xl mb-8">Contact us</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white text-zinc-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">24/7 customer service</h3>
                <p className="mb-4">Smart influencer technical support is available to answer all your questions and resolve your issues at any time.</p>
                <div className="flex items-center">
                  <img src="https://placehold.co/40x40" alt="phone icon" className="w-10 h-10 mr-4" />
                  <div>
                    <p className="font-bold">Telephone</p>
                    <p>+212 668 513 685</p>
                  </div>
                </div>
              </div>
              <div className="bg-white text-zinc-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Smart solutions</h3>
                <p className="mb-4">We develop tailor-made solutions, personalized and adapted to customers' needs in order to meet their expectations. Smart influencer supports you for a better digital transformation!</p>
                <Link to="/contactus" className="text-blue-500 font-bold">START NOW</Link>
              </div>
            </div>
          </div>
        </div>
            <Footer />
        </>
    );
}

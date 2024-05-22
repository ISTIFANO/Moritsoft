import devvideo from '../assets/devvideo.mp4';

export default function MainSection() {
  return (
      <div className="relative overflow-hidden w-full h-screen">
         <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
          <source src={devvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-50 p-4">
          <h1 className="text-5xl font-bold">Smart Influencer</h1>
          <p className="mt-4 text-xl">Smart up your business and join us in the future!</p>
          <p className="mt-6 max-w-2xl">
            Smart Influencer is a digital transformation agency based in Marrakech, specialized in the creation of websites, the development of management software, the development of personalized applications and SEO natural referencing.
          </p>
          <div className="mt-8 flex space-x-4">
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full">
              SEE OUR SOLUTIONS
            </button>
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full">
              CONTACT US
            </button>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 z-10">
  <img src="https://placehold.co/150x150" alt="Smart Influencer Logo" className="w-24 h-24" />
  <p className="mt-2 text-white text-center">
    Smart Influencer<br />
    Activer Windows
  </p>
</div>

      </div>
  )
}
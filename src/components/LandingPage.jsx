// src/components/LandingPage.jsx
import landingImg from '../Assets/landig.jpeg';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen"
      style={{
        backgroundImage: `url(${landingImg})`,
        backgroundSize: 'cover', // or 'contain', '100% 100%'
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center">
        <Link
          to="/jobs"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Explore
        </Link>
      </div>
    </div>
  );
}
import Spline from '@splinetool/react-spline/next';

export default function Hero() {
  return (
    // Use flex-col for mobile (default), md:relative for desktop overlay
    <main className="relative flex flex-col md:mb-[17rem]">
      {/* Heading - Stays in flow on mobile, becomes absolute overlay on desktop */}
      {/* Adjusted container for positioning context */}
      <div className="w-full md:absolute md:inset-0 md:flex md:flex-col md:items-center md:pointer-events-none md:z-10">
        {/* Responsive top margin */}
        <div className="mt-12 md:mt-16 lg:mt-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-b from-gray-500 via-gray-500 to-gray-600 text-transparent bg-clip-text text-center px-4">
            Yantra - IITM BS Robotics Club
          </h1>
        </div>
      </div>
      {/* Watermark cover - Hidden on mobile, shown on medium screens and up */}
      <div className="hidden md:block absolute bottom-0 right-0 w-40 h-14 bg-black z-20"></div>
      
      {/* 3D component - Added top margin for mobile to avoid overlap and increased height */}
      <div className="mt-8 md:mt-0 h-[600px] md:h-auto"> {/* Add margin-top on mobile, remove on desktop, set height */}
        <Spline
          scene="https://prod.spline.design/WFR1rUQyllwc9xUk/scene.splinecode"
        />
      </div>
    </main>
  );
}

import Spline from '@splinetool/react-spline/next';

export default function Hero() {
  return (
    <main className="relative mb-[17rem]">
      {/* Positioned text overlay */}
      <div className="absolute inset-0 flex flex-col items-center pointer-events-none z-10">
        <div className="mt-26 md:mt-16 lg:mt-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-b from-gray-500 via-gray-500 to-gray-600 text-transparent bg-clip-text text-center px-4">
            Yantra - IITM BS Robotics Club
          </h1>
        </div>
      </div>
      
      {/* Watermark cover */}
      <div className="absolute bottom-0 right-0 w-40 h-14 bg-black z-20"></div>
      
      {/* 3D component */}
      <Spline
        scene="https://prod.spline.design/WFR1rUQyllwc9xUk/scene.splinecode" 
      />
    </main >
  );
}

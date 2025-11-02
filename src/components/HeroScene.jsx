import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroScene = () => {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] overflow-hidden rounded-2xl" aria-label="Futuristic identity scene">
      <div className="absolute inset-0" role="img" aria-label="Interactive 3D identity card">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* gradient and vignette overlays - pointer-events none to keep Spline interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#0A0A1A]/70 via-transparent to-[#1B1A55]/50" />
      <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 140px rgba(0,0,0,0.45)' }} />

      <div className="relative z-10 p-6 md:p-10 flex items-end h-full">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 shadow-xl max-w-xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-[#EDEDED]">
            Venyo
          </h1>
          <p className="mt-2 text-sm md:text-base text-white/80">
            A smart, simple venue management system built for colleges and communities.
          </p>
          <div className="mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-[#F5B841] to-[#7DE2D1]" />
        </div>
      </div>
    </section>
  );
};

export default HeroScene;

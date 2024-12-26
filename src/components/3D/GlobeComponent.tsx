import React from 'react';
import Globe from 'react-globe.gl'; // Import the Globe component

const GlobeComponent: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <Globe
        height={326}
        width={326}
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere
        showGraticules
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      />
    </div>
  );
};

export default GlobeComponent;

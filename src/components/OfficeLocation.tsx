import React from 'react';
import { OfficeLocationProps } from '../types';

export const OfficeLocation: React.FC<OfficeLocationProps> = ({ country, address, iconSrc }) => (
  <div className="flex bg-gradient-to-b from-[#1d1d1f] to-[#0d0d0d] flex-col items-start px-6 pt-8 pb-10  w-[310px] h-[300px]  text-white border border-solid border-cyan-400 rounded-[30px] bg-[#000000] hover:!bg-black hover:!bg-none hover:shadow-[inset_0_0_20px_#0dd3ff]  transition-all duration-300 ease-in-out shadow-md max-md:w-full max-md:px-5 max-md:pt-6 max-md:pb-8 max-md:h-auto">
    {/* Wrapping image with a white background */}
    <div className="flex items-center justify-center w-[70px] h-[70px] bg-white rounded-sm">
      <img
        loading="lazy"
        src={iconSrc} // Using the public path here
        alt={`${country} office icon`}
        className="object-contain w-[50px] max-md:w-[40px]" // Ensure size consistency
      />
    </div>
    <div className="mt-4 text-2xl font-medium max-md:text-xl">{country}</div>
    <div className="mt-2 text-sm leading-6 max-md:text-base">{address}</div>
  </div>
);

// import React from 'react';
// import { OfficeLocationProps } from '../types';

// export const OfficeLocation: React.FC<OfficeLocationProps> = ({ country, address, iconSrc }) => (
//   <div className="flex bg-gradient-to-b from-[#1d1d1f] to-[#0d0d0d] flex-col items-start px-6 pt-8 pb-10 w-[320px] h-[300px]  text-white border border-solid border-cyan-400 rounded-[30px] bg-[#000000] hover:!bg-black hover:!bg-none hover:shadow-[inset_0_0_20px_#0dd3ff]  transition-all duration-300 ease-in-out shadow-md max-md:w-full max-md:px-5 max-md:pt-6 max-md:pb-8 max-md:h-auto">
//     {/* Wrapping image with a white background */}
//     <div className="flex items-center justify-center w-[70px] h-[70px] bg-white rounded-sm">
//       <img
//         loading="lazy"
//         src={iconSrc} // Using the public path here
//         alt={`${country} office icon`}
//         className="object-contain w-[50px] max-md:w-[40px]" // Ensure size consistency
//       />
//     </div>
//     <div className="mt-4 text-2xl font-medium max-md:text-xl">{country}</div>
//     <div className="mt-2 text-sm leading-6 max-md:text-base">{address}</div>
//   </div>
// );


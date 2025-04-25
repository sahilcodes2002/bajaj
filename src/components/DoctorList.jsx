
// import React from 'react';

// const DoctorList = ({ doctors }) => (
//   <div className="grid grid-cols-1 gap-4 pb-4 overflow-y-auto">
//     {doctors?.map(doctor => (
//       <div 
//         key={doctor?.id} 
//         className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
//         data-testid="doctor-card"
//       >
//         <div className="flex gap-4">
//           <img
//             className="w-20 h-20 rounded-full object-cover border-2 border-gray-100"
//             src={doctor?.photo}
//             alt={doctor?.name || 'Doctor image'}
//             onError={(e) => e.target.style.display = 'none'}
//           />
//           <div className="flex-1">
//             <h3 
//               className="font-semibold text-gray-800 text-lg"
//               data-testid="doctor-name"
//             >
//               {doctor?.name || 'Unknown Doctor'}
//             </h3>
//             <p 
//               className="text-sm text-gray-600 mt-1"
//               data-testid="doctor-specialty"
//             >
//               {(doctor?.specialities || [])
//                 .map(s => s?.name)
//                 .filter(Boolean)
//                 .join(', ') || 'No specialties listed'}
//             </p>
//             <div className="mt-2 flex flex-wrap gap-4 text-sm">
//               <p 
//                 className="text-gray-700"
//                 data-testid="doctor-experience"
//               >
//                 <span className="font-medium">Experience:</span> {doctor?.experience || 'Not available'}
//               </p>
//               <p 
//                 className="text-gray-700"
//                 data-testid="doctor-fee"
//               >
//                 <span className="font-medium">Fee:</span> {doctor?.fees || 'Not available'}
//               </p>
//             </div>
//             <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium transition-colors">
//               Book Appointment
//             </button>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// );

// export default DoctorList;

import React from 'react';
//import DoctorCard from './DoctorCard';

const DoctorList = ({ doctors = [] }) => (
  <div className="grid grid-cols-1 gap-4 pb-4 overflow-y-auto">
    {doctors.map(doctor => (
      <DoctorCard key={doctor.id} doctor={doctor} />
    ))}
  </div>
);

export default DoctorList;

function DoctorCard({ doctor }) {
  return (
    <div
      key={doctor.id}
      className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
      data-testid="doctor-card"
    >
      <div className='flex gap-7'>
      <div className="flex gap-4">
        <img
          className="w-20 h-20 rounded-full object-cover border-2 border-gray-100"
          src={doctor.photo}
          alt={doctor.name || 'Doctor image'}
          onError={e => (e.target.style.display = 'none')}
        />
        <div className="flex-1">
          <h3
            className="font-semibold text-gray-800 text-lg"
            data-testid="doctor-name"
          >
            {doctor.name || 'Unknown Doctor'}
          </h3>
          <p
            className="text-sm text-gray-600 mt-1"
            data-testid="doctor-specialty"
          >
            {(doctor.specialities || [])
              .map(s => s.name)
              .filter(Boolean)
              .join(', ') || 'No specialties listed'}
          </p>
          <div className="mt-2 flex flex-wrap gap-4 text-sm">
            <p data-testid="doctor-experience">
              <span className="font-medium">Experience:</span>{' '}
              {doctor.experience || 'Not available'}
            </p>
            <p data-testid="doctor-fee">
              <span className="font-medium">Fee:</span>{' '}
              {doctor.fees || 'Not available'}
            </p>
          </div>
          <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium transition-colors">
            Book Appointment
          </button>
        </div>
      </div>
      <div>
      <div className="mt-2 flex flex-col flex-wrap gap-4 text-sm">
            <p data-testid="doctor-experience">
              <span className="font-medium">clinic:</span>{' '}
              {doctor.clinic.name || 'Not available'}
            </p>
            <p data-testid="doctor-fee">
              <span className="font-medium">city:</span>{' '}
              {doctor.clinic.address.city || 'Not available'}
            </p>
          </div>
      </div>
      </div>
    </div>
  );
}
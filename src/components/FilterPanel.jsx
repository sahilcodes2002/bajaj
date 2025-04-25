// // FilterPanel.js
// import React from 'react';

// const FilterPanel = ({
//   consultationType,
//   selectedSpecialties,
//   sortBy,
//   specialties,
//   onConsultationChange,
//   onSpecialtyChange,
//   onSortChange
// }) => (
//   <div className="filters">
//     <div className="filter-section flex flex-col">
//       <h3 data-testid="filter-header-sort">Sort By</h3>
//       <label>
//         <input
//           type="radio"
//           checked={sortBy === 'fees'}
//           onChange={() => onSortChange('fees')}
//           data-testid="sort-fees"
//         />
//         Fees - Low to High
//       </label>
//       <label>
//         <input
//           type="radio"
//           checked={sortBy === 'experience'}
//           onChange={() => onSortChange('experience')}
//           data-testid="sort-experience"
//         />
//         Experience - High to Low
//       </label>
//     </div>
//     <div className="filter-section">
//       <h3 data-testid="filter-header-moc" className=''>Consultation Mode</h3>
//       <div className='flex flex-col'>
//       <label>
//         <input
//           type="radio"
//           checked={consultationType === 'Video Consult'}
//           onChange={() => onConsultationChange('Video Consult')}
//           data-testid="filter-video-consult"
//         />
//         Video Consult
//       </label>
//       <label>
//         <input
//           type="radio"
//           checked={consultationType === 'In Clinic'}
//           onChange={() => onConsultationChange('In Clinic')}
//           data-testid="filter-in-clinic"
//         />
//         In Clinic
//       </label>
//       </div>
//     </div>

//     <div className="filter-section">
//       <h3 data-testid="filter-header-speciality">Speciality</h3>
//       <div className='flex flex-col'>
//       {specialties.map(specialty => {
//         const testId = `filter-specialty-${specialty.replace(/[\s/]+/g, '-')}`;
//         return (
//           <label key={specialty}>
//             <input
//               type="checkbox"
//               checked={selectedSpecialties.includes(specialty)}
//               onChange={(e) => onSpecialtyChange(specialty, e.target.checked)}
//               data-testid={testId}
//             />
//             {specialty}
//           </label>
//         );
//       })}
//       </div>
//     </div>

    
//   </div>
// );

// export default FilterPanel;


// FilterPanel.jsx
import React from 'react';

const FilterPanel = ({
  consultationType,
  selectedSpecialties,
  sortBy,
  specialties,
  onConsultationChange,
  onSpecialtyChange,
  onSortChange
}) => (
  <div className="space-y-8">
    <div className="rounded-md bg-white space-y-4 p-5 text-xs">
      <h3 
        className="text-xs font-semibold text-gray-700 uppercase tracking-wide"
        data-testid="filter-header-sort"
      >
        Sort By
      </h3>
      <div className="space-y-2">
        <label className="flex items-center space-x-2  text-gray-600">
          <input
            type="radio"
            className="form-radio text-blue-600"
            checked={sortBy === 'fees'}
            onChange={() => onSortChange('fees')}
            data-testid="sort-fees"
          />
          <span>Fees - Low to High</span>
        </label>
        <label className="flex items-center space-x-2 text-sm text-gray-600">
          <input
            type="radio"
            className="form-radio text-blue-600"
            checked={sortBy === 'experience'}
            onChange={() => onSortChange('experience')}
            data-testid="sort-experience"
          />
          <span>Experience - High to Low</span>
        </label>
      </div>
    </div>
    
    {/* Specialities */}
    <div>
      
    <div className="rounded-md bg-white p-5 space-y-4 text-xs">
    <div className='font-bold text-slate-800'>Filters</div>
      <h3 
        className="text-xs font-semibold text-gray-700 uppercase tracking-wide"
        data-testid="filter-header-speciality"
      >
        Speciality
      </h3>
      <div className="grid grid-cols-1 gap-2 max-h-32 overflow-y-auto">
        {specialties.map(specialty => {
          const testId = `filter-specialty-${specialty.replace(/[\s/]+/g, '-')}`;
          return (
            <label 
              key={specialty} 
              className="flex items-center space-x-2  text-gray-600"
            >
              <input
                type="checkbox"
                className="form-checkbox text-blue-600 rounded"
                checked={selectedSpecialties.includes(specialty)}
                onChange={(e) => onSpecialtyChange(specialty, e.target.checked)}
                data-testid={testId}
              />
              <span>{specialty}</span>
            </label>
          );
        })}
      </div>
    </div>

    {/* Consultation Mode */}
    <div className="space-y-4 rounded-md bg-white p-5 text-xs">
      <h3 
        className="text-xs font-semibold text-gray-700 uppercase tracking-wide"
        data-testid="filter-header-moc"
      >
        Consultation Mode
      </h3>
      <div className="space-y-2">
        <label className="flex items-center space-x-2 text-gray-600">
          <input
            type="radio"
            className="form-radio text-blue-600"
            checked={consultationType === 'Video Consult'}
            onChange={() => onConsultationChange('Video Consult')}
            data-testid="filter-video-consult"
          />
          <span>Video Consult</span>
        </label>
        <label className="flex items-center space-x-2 text-sm text-gray-600">
          <input
            type="radio"
            className="form-radio text-blue-600"
            checked={consultationType === 'In Clinic'}
            onChange={() => onConsultationChange('In Clinic')}
            data-testid="filter-in-clinic"
          />
          <span>In Clinic</span>
        </label>
      </div>
    </div>
    </div>

    
  </div>
);

export default FilterPanel;
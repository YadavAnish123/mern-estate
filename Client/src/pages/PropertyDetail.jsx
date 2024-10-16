// import React, { useEffect } from 'react';
// import { useLocation, Link } from 'react-router-dom';

// const PropertyDetail = () => {
//   const location = useLocation();
//   const { property, relatedProperties } = location.state || {};
//   console.log('Location state:', location.state); // Debugging line

//   if (!property) {
//     return <div>No property found.</div>;
//   }

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [property]);
//   return (
//     <div className="p-10 bg-gray-100">
//       <h2 className="text-3xl font-semibold">{property.name}</h2>
//       <img src={property.img} alt={property.name} className="rounded mb-3 justify-center" />
//       <p>Location: {property.location}</p>
//       <p>Price: {property.price}</p>
//       <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

//       <Link to="/" className="text-blue-500 underline">Back to Home</Link>

//       {/* Related Properties Section */}
//       <h3 className="text-2xl mt-5">Related Properties</h3>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3">
//         {relatedProperties.map((relatedProperty) => (
//           <div key={relatedProperty.id} className="bg-white p-5 rounded shadow-lg border border-gray-200">
//             <img src={relatedProperty.img} alt={relatedProperty.name} className="rounded mb-3" />
//             <h4 className="text-xl font-semibold">{relatedProperty.name}</h4>
//             <p>Price: {relatedProperty.price}</p>
//             <Link 
//   to={`/property/${relatedProperty.id}`} 
//   state={{ property: relatedProperty, relatedProperties }} 
//   className="text-blue-500 underline">
//   View Details
// </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PropertyDetail;


import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const PropertyDetail = () => {
  const location = useLocation();
  const { property, relatedProperties } = location.state || {};
  console.log('Location state:', location.state); // Debugging line

  if (!property) {
    return <div>No property found.</div>;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [property]);

  // Example coordinates for the location (you should replace these with the actual coordinates)
   

  return (
    <div className="p-10 bg-gray-100">
      <h2 className="text-3xl font-semibold ">{property.name}</h2>
      
      <div className="flex flex-col md:flex-row mt-5 justify-center">
        <div className="md:w-1/2">
          <img src={property.img} alt={property.name} className="rounded mb-3 h-96" />
          <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Price: {property.price}</p>
        </div>

        {/* Google Map on the right */}
        <div className="md:w-1/2 md:ml-5 md:-mt-12 gap-2">
          <h4 className="text-xl font-semibold">Location</h4>
          <p className='mt-2'>{property.location}</p>
          <googlemap>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.2260021269212!2d77.30258417375065!3d28.592996085878134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f13f630773%3A0x93e9cbf1d2f53217!2sDelhi%20NCR!5e0!3m2!1sen!2sin!4v1729061615211!5m2!1sen!2sin" width="600" height="370"   allowfullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </googlemap>
        </div>
      </div>

      <Link to="/" className="text-blue-500 underline mt-5 block">Back to Home</Link>

      {/* Related Properties Section */}
      <h3 className="text-2xl mt-5">Related Properties</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3">
        {relatedProperties.map((relatedProperty) => (
          <div key={relatedProperty.id} className="bg-white p-5 rounded shadow-lg border border-gray-200">
            <img src={relatedProperty.img} alt={relatedProperty.name} className="rounded mb-3" />
            <h4 className="text-xl font-semibold">{relatedProperty.name}</h4>
            <p>Price: {relatedProperty.price}</p>
            <Link 
              to={`/property/${relatedProperty.id}`} 
              state={{ property: relatedProperty, relatedProperties }} 
              className="text-blue-500 underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyDetail;

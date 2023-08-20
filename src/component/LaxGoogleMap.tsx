// import React from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// interface MapContainerProps {
//   selectedLocation: string;
// }

// const MapContainer: React.FC<MapContainerProps> = ({ selectedLocation }) => {
//   const mapContainerStyle = {
//     width: '100%',
//     height: '100%'
//   };

// //   const MapKey = import.meta.env.VITE_APP_GOOGLE_API_KEY

//   const defaultCenter = { lat: 64.836328, lng: -18.430083 };

//   const locations = {
//     Kirkjubœr: { lat: 63.791333, lng: -18.050333 },
//     Norðmœrr: { lat: 63.006833, lng: 8.619000 },
//     Norway: { lat:60.239833, lng: 7.734333 },
//     Raumsdal: { lat: 62.590833, lng: 7.811333 },
//     Sunnmœrr: { lat: 62.033167, lng: 6.683667 },
//   };

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyAbXREGEQHraHWJAnNDiiPgOBAaHrn7eK8">
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         center={locations[selectedLocation] || defaultCenter}
//         zoom={5}
//       >
//         {locations[selectedLocation] && <Marker position={locations[selectedLocation]} />}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default MapContainer;

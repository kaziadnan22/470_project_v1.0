import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const RescueMap = () => {
  const [rescueLocations] = useState([
    { id: 1, lat: 23.8103, lng: 90.4125, title: 'Rescue Point 1' },
    { id: 2, lat: 23.8223, lng: 90.4265, title: 'Rescue Point 2' }
  ])

  const mapStyles = {
    height: '100%',
    width: '100%'
  }

  const defaultCenter = {
    lat: 23.8103,
    lng: 90.4125
  }

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      >
        {rescueLocations.map(location => (
          <Marker
            key={location.id}
            position={{ lat: location.lat, lng: location.lng }}
            title={location.title}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  )
}

export default RescueMap
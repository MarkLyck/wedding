'use client'

import GoogleMapReact from 'google-map-react'
import { ErrorBoundary } from 'react-error-boundary'

const GOOGLE_MAPS_API_KEY = 'AIzaSyDHFG3jUPC7biS233PhPSBoxzMDFQPylPA'

const AnyReactComponent = ({ text }: any) => <div>{text}</div>

export const MapInner = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  }
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
    </GoogleMapReact>
  )
}

export const MapComponent = () => (
  <ErrorBoundary FallbackComponent={() => <div>error</div>}>
    <MapInner />
  </ErrorBoundary>
)

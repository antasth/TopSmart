import React from 'react'
import ContentLoader from 'react-content-loader'

const CardLoader = (props) => (
  <ContentLoader
  speed={2}
  width={270}
  height={400}
  viewBox="0 0 270 400"
  backgroundColor="#ededed"
  foregroundColor="#d6d6d6"
  {...props}
>
  <rect x="12" y="236" rx="6" ry="6" width="225" height="10" /> 
  <rect x="18" y="307" rx="10" ry="10" width="115" height="18" /> 
  <rect x="105" y="350" rx="10" ry="10" width="35" height="35" /> 
  <rect x="148" y="349" rx="10" ry="10" width="80" height="35" /> 
  <rect x="50" y="10" rx="15" ry="15" width="150" height="200" /> 
  <rect x="12" y="256" rx="6" ry="6" width="225" height="10" /> 
  <rect x="12" y="277" rx="6" ry="6" width="90" height="10" />
  </ContentLoader>
)

export { CardLoader }

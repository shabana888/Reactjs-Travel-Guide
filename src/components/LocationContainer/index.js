import {
  ListContainer,
  LocationCardContainer,
  Image,
  HeadingDescriptionContainer,
  Heading,
  Paragraph,
} from './styledComponents'

const LocationContainer = props => {
  const {locationData} = props
  const {imageUrl, description, name} = locationData

  return (
    <ListContainer>
      <LocationCardContainer>
        <Image src={imageUrl} alt={name} />
        <HeadingDescriptionContainer>
          <Heading>{name}</Heading>
          <Paragraph>{description}</Paragraph>
        </HeadingDescriptionContainer>
      </LocationCardContainer>
    </ListContainer>
  )
}

export default LocationContainer

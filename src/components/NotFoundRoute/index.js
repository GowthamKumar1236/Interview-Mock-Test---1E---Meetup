import {
  NotFoudContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

const NotFoundRoute = () => (
  <NotFoudContainer>
    <NotFoundImg
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotFoundHeading>Page Not Found</NotFoundHeading>
    <NotFoundDescription>
      We are sorry, the page you requested could not be found
    </NotFoundDescription>
  </NotFoudContainer>
)

export default NotFoundRoute

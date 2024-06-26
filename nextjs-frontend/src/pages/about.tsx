import Container from '../components/Container';
import Carousel from '../components/Carousel';
import OnlyClient from '../components/OnlyClient';

const AboutPage = () => {
  return (
    <Container bgColor="bg-blue-100">
      <h1>Welcome to My Next.js App</h1>
      <p>This is the about page.</p>
    </Container>

    //Rendering Carousel here while I try to get this feature to work
    //Wrapped in "OnlyClient" component as part fo effort to de-bug
    // <OnlyClient>
    //   {/* <Carousel /> */}
    // </OnlyClient>
  );
};

export default AboutPage;

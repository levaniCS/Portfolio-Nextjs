import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage'

const About = (props) => (
  <BaseLayout {...props.auth}>
    <BasePage className="about-page" title="I Am About Page">
      <h1> I am About Page </h1>
    </BasePage>
  </BaseLayout>
)

export default About;

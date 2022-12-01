import { getMainLayout } from "../components/core/layout/main";
import { AboutBanner } from "../components/features/About/AboutBanner";
import { Head } from "../components/shared/Head";

const AboutPage = () => (
  <>
    <Head title="About" description="PRD Ghosts" imageAlt="PRD Logo" />
    <AboutBanner />
  </>
);

AboutPage.getLayout = getMainLayout;

export default AboutPage;

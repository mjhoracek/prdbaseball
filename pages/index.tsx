import { getMainLayout } from "../components/core/layout/main";
import { HeroComponent } from "../components/features/Hero";
import { Head } from "../components/shared/Head";

const HomePage = () => (
  <>
    <Head title="Home" description="PRD Ghosts" imageAlt="Yakkertech Logo" />
    <HeroComponent />
  </>
);

HomePage.getLayout = getMainLayout;

export default HomePage;

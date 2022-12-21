import { getMainLayout } from "../components/core/layout/main";
import { Head } from "../components/shared/Head";
import { ShowcasesBanner } from "../components/features/Showcases/ShowcasesBanner";

const ShowcasesPage = () => (
  <>
    <Head
      title="College Showcases and Planning"
      description="PRD Ghosts"
      imageAlt="PRD Logo"
    />
    <ShowcasesBanner />
  </>
);

ShowcasesPage.getLayout = getMainLayout;

export default ShowcasesPage;

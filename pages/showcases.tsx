import { getMainLayout } from "../components/core/layout/main";
import { Head } from "../components/shared/Head";

const ShowcasesPage = () => (
  <>
    <Head
      title="College Showcases and Planning"
      description="PRD Ghosts"
      imageAlt="PRD Logo"
    />
    <p>showcases and planning</p>
  </>
);

ShowcasesPage.getLayout = getMainLayout;

export default ShowcasesPage;

import { getMainLayout } from "../components/core/layout/main";
import { Head } from "../components/shared/Head";

const SupportPage = () => (
  <>
    <Head title="PRD Support" description="PRD Ghosts" imageAlt="PRD Logo" />
    <p>support</p>
  </>
);

SupportPage.getLayout = getMainLayout;

export default SupportPage;

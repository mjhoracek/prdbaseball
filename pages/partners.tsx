import { getMainLayout } from "../components/core/layout/main";
import { Head } from "../components/shared/Head";

const PartnersPage = () => (
  <>
    <Head title="Our Partners" description="PRD Ghosts" imageAlt="PRD Logo" />
    <p>partners</p>
  </>
);

PartnersPage.getLayout = getMainLayout;

export default PartnersPage;

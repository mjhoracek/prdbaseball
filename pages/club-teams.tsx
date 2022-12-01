import { getMainLayout } from "../components/core/layout/main";
import { Head } from "../components/shared/Head";

const ClubTeamsPage = () => (
  <>
    <Head title="About" description="PRD Ghosts" imageAlt="PRD Logo" />
    <p>prd club teams</p>
  </>
);

ClubTeamsPage.getLayout = getMainLayout;

export default ClubTeamsPage;

import { getMainLayout } from "../components/core/layout/main";
import { Head } from "../components/shared/Head";
import { ClubBanner } from "../components/features/ClubTeams/ClubBanner";
import { ClubSelections } from "../components/features/ClubTeams/ClubSelections";

const ClubTeamsPage = () => (
  <>
    <Head title="About" description="PRD Ghosts" imageAlt="PRD Logo" />
    <ClubBanner />
    <ClubSelections />
  </>
);

ClubTeamsPage.getLayout = getMainLayout;

export default ClubTeamsPage;

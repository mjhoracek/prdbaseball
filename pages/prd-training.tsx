import { getMainLayout } from "../components/core/layout/main";
import { Head } from "../components/shared/Head";
import { TrainingBanner } from "../components/features/Training/TrainingBanner";
import { MembershipSection } from "../components/features/Training/MembershipSection";
import { ProgramsSection } from "../components/features/Training/ProgramsSection";

const PrdTrainingPage = () => (
  <>
    <Head title="PRD Training" description="PRD Ghosts" imageAlt="PRD Logo" />
    <TrainingBanner />
    <MembershipSection />
    <ProgramsSection />
  </>
);

PrdTrainingPage.getLayout = getMainLayout;

export default PrdTrainingPage;

import { getMainLayout } from "../components/core/layout/main";
import { Head } from "../components/shared/Head";

const PrdTrainingPage = () => (
  <>
    <Head title="PRD Training" description="PRD Ghosts" imageAlt="PRD Logo" />
    <p>prd training</p>
  </>
);

PrdTrainingPage.getLayout = getMainLayout;

export default PrdTrainingPage;

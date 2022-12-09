import { getMainLayout } from "../components/core/layout/main";
import { Head } from "../components/shared/Head";
import { SupportBanner } from "../components/features/Support/SupportBanner";

const SupportPage = () => (
  <>
    <Head title="PRD Support" description="PRD Ghosts" imageAlt="PRD Logo" />
    <SupportBanner />
  </>
);

SupportPage.getLayout = getMainLayout;

export default SupportPage;

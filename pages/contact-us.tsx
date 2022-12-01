import { getMainLayout } from "../components/core/layout/main";
import { Head } from "../components/shared/Head";

const ContactPage = () => (
  <>
    <Head title="Contact Us" description="PRD Ghosts" imageAlt="PRD Logo" />
    <p>contact us</p>
  </>
);

ContactPage.getLayout = getMainLayout;

export default ContactPage;

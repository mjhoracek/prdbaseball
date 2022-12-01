import { getMainLayout } from "../components/core/layout/main";
import { Head } from "../components/shared/Head";

const GalleryPage = () => (
  <>
    <Head
      title="Championship Gallery"
      description="PRD Ghosts"
      imageAlt="PRD Logo"
    />
    <p>gallery</p>
  </>
);

GalleryPage.getLayout = getMainLayout;

export default GalleryPage;

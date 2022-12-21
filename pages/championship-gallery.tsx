import { getMainLayout } from "../components/core/layout/main";
import { Head } from "../components/shared/Head";
import { Gallery } from "../components/features/Gallery/Gallery";

const GalleryPage = () => (
  <>
    <Head
      title="Championship Gallery"
      description="PRD Ghosts"
      imageAlt="PRD Logo"
    />
    <Gallery />
  </>
);

GalleryPage.getLayout = getMainLayout;

export default GalleryPage;

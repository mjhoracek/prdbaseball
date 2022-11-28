import NextHead from "next/head";

interface Props {
  title: string;
  description: string;
  /** Relative path in public folder! Lead with slash and DO NOT INCLUDE SITE ROOT! */
  imagePath?: string;
  imageAlt: string;
  noIndex?: boolean;
  subject?: string;
  canonical?: string;
  children?: React.ReactNode;
}

// TODO: This isn't set up for a PWA if we ever want to do that.
/** Contains default values if not otherwise specified.
 * Follows best practices as found in https://github.com/joshbuchea/HEAD
 * */
export const Head = ({
  title,
  canonical,
  noIndex,
  subject,
  children,
}: Props) => {
  return (
    <NextHead>
      <meta name="robots" content={noIndex ? "noindex" : "index,follow"} />
      <meta name="googlebot" content={noIndex ? "noindex" : "index,follow"} />
      <meta name="subject" content={subject || "PRD Ghosts"} />
      <meta name="rating" content="General" />
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      {canonical && <link rel="canonical" href={canonical} />}

      <title>{`${title} | PRD Ghosts`}</title>
      {children}
    </NextHead>
  );
};

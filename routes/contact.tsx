import { PageLayout } from "../components/PageLayout.tsx";
import { CONTACT_INFO, SOCIAL_LINKS } from "../constants.ts";
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "../components/Icons.tsx";
import { Button } from "../components/Button.tsx";
import { PageProps } from "$fresh/server.ts";

function SocialLink(
  { href, icon: Icon, label }: {
    href: string;
    icon: typeof XIcon;
    label: string;
  },
) {
  return (
    <a
      className="group -m-1 p-1"
      aria-label={label}
      href={href}
    >
      <Icon className="h-6 w-6 fill-lightmode-text transition group-hover:fill-lightmode-text-hover dark:fill-darkmode-text dark:group-hover:fill-darkmode-text-hover" />
    </a>
  );
}

export default function Contact(props: PageProps) {
  const url = new URL(props.url);
  return (
    <PageLayout
      currentPage="contact"
      title="Contact"
      url={url}
      description="Audrow Nash's contact information"
    >
      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold mb-6 text-lightmode-heading dark:text-darkmode-heading">
          Get in Touch
        </h2>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-lightmode-heading dark:text-darkmode-heading">
            Direct Contact
          </h3>
          <p className="mb-4 text-lightmode-text dark:text-darkmode-text">
            Feel free to reach out to me directly:
          </p>
          <Button
            as="a"
            href={`mailto:${CONTACT_INFO.EMAIL}`}
            className="w-full text-center"
          >
            {CONTACT_INFO.EMAIL}
          </Button>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-lightmode-heading dark:text-darkmode-heading">
            Social Media
          </h3>
          <p className="mb-6 text-lightmode-text dark:text-darkmode-text">
            Connect with me on various social media platforms. I'm most active
            on 𝕏 (formerly, Twitter).
          </p>
          <div className="flex space-x-4 mb-8">
            <SocialLink
              href={SOCIAL_LINKS.X}
              icon={XIcon}
              label="X (Twitter)"
            />
            <SocialLink
              href={SOCIAL_LINKS.LINKEDIN}
              icon={LinkedInIcon}
              label="LinkedIn"
            />
            <SocialLink
              href={SOCIAL_LINKS.YOUTUBE}
              icon={YouTubeIcon}
              label="YouTube"
            />
            <SocialLink
              href={SOCIAL_LINKS.GITHUB}
              icon={GitHubIcon}
              label="GitHub"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

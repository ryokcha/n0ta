import { FaTwitter, FaGithub,FaFacebook,FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const socialLinks = [
    {
      name: "Twitter",
      url: "https://twitter.com/Nakai_0r314",
      icon: FaTwitter,
      color: "hover:text-black",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/ryokcha",
      icon: FaFacebook,
      color: "hover:text-black",
    },
    {
      name: "GitHub",
      url: "https://github.com/ryokcha",
      icon: FaGithub,
      color: "hover:text-black",
    },
  ];

  return (
    <>
      {/* Main Content */}
      <main className="container container--medium py-20">
        {/* Page Title */}
        <section className="mb-16">
          <h2 className="text-heading-display mb-8">
            Get In Touch
          </h2>
          <p className="text-body-large text-[var(--color-text-secondary)]">
            お気軽にご連絡ください。
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-16">
          <div className="paper-outline card card--elevated card--fluid">
            <h3 className="text-heading-h1 mb-8">
              Connect With Me
            </h3>

            {/* Social Links */}
            <div className="space-y-4 md:space-y-4">
              {/* PC版：カード型 */}
              <div className="hidden md:space-y-4 md:block">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-[var(--radius-lg)] bg-[var(--color-bg-surface-muted)] hover:bg-[var(--color-bg-accent-subtle)] transition-all duration-300 ease-out group"
                  >
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300 text-[var(--color-bg-main)]">
                      <IconComponent />
                    </div>
                    <div>
                      <h4 className="text-heading-h3 group-hover:text-[var(--color-text-accent)] transition-colors duration-300">
                        {link.name}
                      </h4>
                      <p className="text-body-medium text-[var(--color-text-secondary)] transition-colors duration-300">
                        {link.url.replace("https://", "")}
                      </p>
                    </div>
                    <span className="ml-auto text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-accent)] transition-all duration-300 transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                  );
                })}
                <a
                  href="mailto:922ryouka@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-[var(--radius-lg)] bg-[var(--color-bg-surface-muted)] hover:bg-[var(--color-bg-accent-subtle)] transition-all duration-300 ease-out group"
                >
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300 text-[var(--color-bg-main)]">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="text-heading-h3 group-hover:text-[var(--color-text-accent)] transition-colors duration-300">
                      Send a Message
                    </h4>
                    <p className="text-body-medium text-[var(--color-text-secondary)] transition-colors duration-300">
                      お使いのメールクライアントが開きます
                    </p>
                  </div>
                  <span className="ml-auto text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-accent)] transition-all duration-300 transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>

              {/* モバイル版：アイコンのみ */}
              <div className="md:hidden flex items-center justify-center gap-6">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-4xl text-[var(--color-bg-main)] hover:text-[var(--color-bg-accent)] hover:scale-110 transition-all duration-300"
                      aria-label={link.name}
                    >
                      <IconComponent />
                    </a>
                  );
                })}
                <a
                  href="mailto:922ryouka@gmail.com"
                  className="text-4xl text-[var(--color-bg-main)] hover:text-[var(--color-bg-accent)] hover:scale-110 transition-all duration-300"
                  aria-label="Send a Message"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

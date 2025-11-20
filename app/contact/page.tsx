import { FaXTwitter, FaGithub, FaEnvelope } from "react-icons/fa6";

export default function Contact() {
  const socialLinks = [
    {
      name: "Twitter",
      url: "https://x.com/Nakai_0r314",
      icon: FaXTwitter,
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
      <main className="max-w-4xl mx-auto px-6 py-20">
        {/* Page Title */}
        <section className="mb-16">
          <h2 className="text-5xl font-bold text-[#6C8FA3] mb-8">
            Get In Touch
          </h2>
          <p className="text-xl text-[#4A4F52]">
            Feel free to reach out and connect with me on social media.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-16">
          <div className="bg-[#fcf7f8]/50 backdrop-blur-lg rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-[#6C8FA3] mb-8">
              Connect With Me
            </h3>
            <p className="text-lg text-[#4A4F52] mb-12 leading-relaxed">
              新しいプロジェクトやコラボレーションについて常に興味があります。何か質問がある場合やご挨拶をしたい場合は、下記のリンクからお気軽にご連絡ください。
            </p>

            {/* Social Links */}
            <div className="space-y-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border-2 border-[#D9DEE2] rounded-2xl bg-white/50 backdrop-blur-lg hover:bg-[#E5D5CE] hover:border-[#D5848C] transition-all duration-300 ease-out group"
                >
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300 text-[#6C8FA3]">
                    <IconComponent />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#6C8FA3] group-hover:text-[#D5848C] transition-colors duration-300">
                      {link.name}
                    </h4>
                    <p className="text-[#4A4F52] group-hover:text-[#A0695F] transition-colors duration-300">
                      {link.url.replace("https://", "")}
                    </p>
                  </div>
                  <span className="ml-auto text-[#4A4F52] group-hover:text-[#D5848C] transition-all duration-300 transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
                );
              })}
              <a
                href="mailto:922ryouka@gmail.com"
                className="flex items-center gap-4 p-4 border-2 border-[#D9DEE2] rounded-2xl bg-white/50 backdrop-blur-lg hover:bg-[#E5D5CE] hover:border-[#D5848C] transition-all duration-300 ease-out group"
              >
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300 text-[#6C8FA3]">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#6C8FA3] group-hover:text-[#D5848C] transition-colors duration-300">
                    Send a Message
                  </h4>
                  <p className="text-[#4A4F52] group-hover:text-[#A0695F] transition-colors duration-300">
                    お使いのメールクライアントが開きます
                  </p>
                </div>
                <span className="ml-auto text-[#4A4F52] group-hover:text-[#D5848C] transition-all duration-300 transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

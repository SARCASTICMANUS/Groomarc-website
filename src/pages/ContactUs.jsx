import React, { useState } from "react";


const POLICY_TABS = [
  { key: "privacy", label: "Privacy Policy" },
  { key: "cookie", label: "Cookie Policy" },
  { key: "delete", label: "Account Deletion" },
  { key: "contact", label: "Contact Us" },
];

const POLICY_CONTENT = {
  privacy: `
    GROOMARC PRIVACY POLICY\n\n
    Effective Date:\n\n
    At Groomarc, we prioritize the privacy of our users. This Privacy Policy describes how Groomarc (also referred to as “we”, “our” or “us”) collect, use, and safeguard your personal information when you use our platform, including our website, mobile applications, and any other services we provide (collectively referred to as the "Services"). By accessing or using Groomarc, you agree to this Privacy Policy.\n\n
    1. Scope:\n    This Privacy Policy applies to all content, products, services, and websites operated by Groomarc, including any mobile applications or online platforms provided under the Groomarc brand.\n\n    This Privacy Policy does not apply to the practices of companies or third-party service providers that Groomarc does not own or control, nor does it apply to individuals that Groomarc does not employ or manage. Any interactions with third-party platforms, such as social media services or payment processors, are subject to the privacy policies of those respective services.\n\n
    2. Information We Collect:\n    To provide a seamless and personalized experience, we collect certain information from you when you interact with our Services:\n    - Account Information: When you create an account, we collect basic details such as your name, email address, phone number, and password to manage your profile.\n    - Profile Information: You may choose to provide additional information, including a profile photo, grooming preferences, and service history, to personalize your experience.\n    - Location Data: If you permit location services, we collect location data to suggest nearby barbershops, grooming providers, and relevant offers.\n    - Usage Information: To enhance our Services, we collect data on how you interact with Groomarc, including your device type, IP address, and browsing history within our platform.\n    - Payment Information: When booking services, we collect your payment details to process transactions securely. Payment processing is managed by third-party payment processors.\n    - Communications: We collect information about your communication preferences and any messages you send to service providers or our support team.\n\n
    3. How We Use Your Information:\n    Groomarc uses your information to improve our Services, personalize user experience, and maintain the quality of our platform:\n    - Service Delivery: Facilitate bookings, enable personalized recommendations, and process payments for services.\n    - User Experience: Personalize content, suggest relevant grooming services, and streamline interactions with service providers based on your preferences.\n    - Community Engagement: Enable you to leave reviews, share feedback, and view other users' experiences to foster a transparent community.\n    - Customer Support: Assist you with questions, address concerns, and improve our customer support experience.\n    - Security and Compliance: Monitor usage patterns to detect fraudulent activities and ensure compliance with our policies and applicable laws.\n    - Marketing and Communication: Send promotional messages and updates relevant to your grooming preferences, unless you opt out of marketing communications.\n\n
    4. Sharing of Your Information\n    We take careful measures to protect your information. However, we may share your information in the following cases:\n    - With Grooming Service Providers: For booking services, we share relevant information (e.g., your name and appointment details) with the chosen service provider.\n    - With Third-Party Service Providers: We use third-party vendors to help operate our platform, such as payment processors, cloud storage providers, and analytics services. These providers are bound by confidentiality agreements and only process data as necessary to assist us.\n    - For Legal Compliance: We may disclose information if required by law, court order, or to protect our rights, safety, and the security of our users.\n    - Business Transfers: In case of mergers, acquisitions, or sales of assets, user information may be transferred to the new owner to continue operating our Services.\n\n
    5. Data Security:\n    We are committed to protecting your data. Groomarc implements appropriate security measures, including encryption and secure server storage, to safeguard your information against unauthorized access, disclosure, or alteration. While we strive for security, no system can be completely secure, and we cannot guarantee absolute protection of your information.\n\n
    6. Your Rights and Choices\n    You have the right to control your personal information. Depending on your location, your rights may include:\n    - Accessing and Correcting Information: You can access and update your personal information within your account settings.\n    - Deleting Your Account: You may request to delete your account, subject to certain legal or operational restrictions.\n    - Managing Communications: You can opt out of marketing emails by following the unsubscribe link in our emails or adjusting your communication preferences.\n    - Location Data Control: Adjust your device settings to control whether location data is shared with Groomarc.\n\n
    7. Data Retention\n    We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. When your information is no longer needed, we will securely delete or anonymize it.\n\n
  `,
  cookie: `
    GROOMARC COOKIE POLICY\n\n
    This Cookie Policy explains how Groomarc uses cookies and similar technologies to recognize you when you visit our website or use our services. It explains what these technologies are, why we use them, and your rights to control our use of them.\n\n
    1. What are cookies?\n    Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.\n\n
    2. Why do we use cookies?\n    We use first and third-party cookies for several reasons. Some cookies are required for technical reasons for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our website. Third parties serve cookies through our website for analytics and other purposes.\n\n
    3. How can you control cookies?\n    You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in your web browser. Please note that if you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.\n\n
    4. Changes to this Cookie Policy\n    We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons.\n\n
    5. Where can you get further information?\n    If you have any questions about our use of cookies or other technologies, please email us at support@groomarc.com.\n\n
  `,
  contact: `
    Contact Us\n\n
    For any inquiries, feedback, or support, please contact us at:\n\n
    Email: <a href="mailto:info.groomarc@gmail.com" class="text-[#A5D80A] underline">info.groomarc@gmail.com</a>\n\n
    We aim to respond to all queries as quickly as possible.\n\n
  `,
};

function Policy() {
  const [activeTab, setActiveTab] = useState("privacy");
  const [fade, setFade] = useState(true);

  // Animate fade on tab change
  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    setFade(false);
    setTimeout(() => {
      setActiveTab(tab);
      setFade(true);
    }, 180);
  };

  return (
    <div className="min-h-screen bg-primary flex flex-col items-center py-10 px-2 sm:px-6 md:px-8">
      <div className="w-full max-w-4xl flex flex-col  md:flex-row gap-8">
        {/* Sidebar / Tab Switcher */}
        <div className="md:w-1/4 w-full flex md:flex-col  flex-col  gap-2 md:gap-4 mb-2 md:mb-0">
          {POLICY_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabChange(tab.key)}
              className={`transition-colors duration-200 rounded-lg px-4 py-2 font-semibold text-left md:text-base text-sm whitespace-nowrap
                ${activeTab === tab.key
                  ? 'bg-[#A5D80A] text-white shadow-md'
                  : 'bg-white text-secondary hover:bg-[#A5D80A]/80 hover:text-white border border-gray-200'}
              `}
              style={{ outline: 'none' }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Policy Content Card & Delete Request Form */}
        <div className={`flex-1 bg-white/90 rounded-2xl shadow-lg p-6 md:p-10 transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`} style={{ minHeight: 320 }}>
          {/* Policy Content */}
          {activeTab !== 'delete' && (
            <div className="prose max-w-none text-gray-800 text-base sm:text-lg leading-relaxed">
              {POLICY_CONTENT[activeTab]?.split('\n').map((line, idx) => {
                // Icon mapping for headings
                const icons = {
                  privacy: <span className="inline-block align-middle mr-2 text-[#A5D80A]">🔒</span>,
                  cookie: <span className="inline-block align-middle mr-2 text-[#A5D80A]">🍪</span>,
                  delete: <span className="inline-block align-middle mr-2 text-[#A5D80A]">🗑️</span>,
                  contact: <span className="inline-block align-middle mr-2 text-[#A5D80A]">✉️</span>,
                };
                if (idx === 0 && (activeTab in icons)) {
                  // First heading line, add icon to the left of the text (inline, not above)
                  return (
                    <h2 key={idx} className="text-2xl font-bold mb-4 text-[#A5D80A] flex items-center">
                      <span className="mr-3 flex-shrink-0 flex items-center">{icons[activeTab]}</span>
                      <span>{line.replace(/\*\*/g, '')}</span>
                    </h2>
                  );
                } else if (line.startsWith('- ') || line.startsWith('•')) {
                  return <li key={idx} className="ml-4 list-disc">{line.replace(/^[-•] /, '')}</li>;
                } else if (line.trim() === '') {
                  return <div key={idx} className="my-2" />;
                } else if (activeTab === 'contact' && line.includes('info.groomarc@gmail.com')) {
                  // Render mailto link for contact tab
                  return <p key={idx}><a href="mailto:info.groomarc@gmail.com" className="text-[#A5D80A] underline">info.groomarc@gmail.com</a></p>;
                } else if (line.startsWith('**')) {
                  // Other headings (shouldn't occur, but fallback)
                  return <h2 key={idx} className="text-2xl font-bold mb-4 text-[#A5D80A]">{line.replace(/\*\*/g, '')}</h2>;
                } else {
                  return <p key={idx}>{line}</p>;
                }
              })}
            </div>
          )}

          {/* Delete Account Request Form - only show on Account Deletion tab */}
          {activeTab === 'delete' && (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#A5D80A]">Request Account Deletion</h2>
              <form className="space-y-4 max-w-lg" onSubmit={e => { e.preventDefault(); alert('Your request has been submitted.'); }}>
                <div>
                  <label className="block font-semibold mb-1" htmlFor="delete-fullname">Full Name</label>
                  <input id="delete-fullname" name="fullname" type="text" required className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#A5D80A]" />
                </div>
                <div>
                  <label className="block font-semibold mb-1" htmlFor="delete-email">Email</label>
                  <input id="delete-email" name="email" type="email" required className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#A5D80A]" />
                </div>
                <div>
                  <label className="block font-semibold mb-1" htmlFor="delete-username">Username</label>
                  <input id="delete-username" name="username" type="text" required className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#A5D80A]" />
                </div>
                <div>
                  <label className="block font-semibold mb-1" htmlFor="delete-reason">Reason for Deletion</label>
                  <textarea id="delete-reason" name="reason" required rows={3} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#A5D80A]" />
                </div>
                <button type="submit" className="bg-[#A5D80A] text-white font-bold px-6 py-2 rounded-lg shadow hover:bg-[#8bb80a] transition">Submit Request</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Policy;

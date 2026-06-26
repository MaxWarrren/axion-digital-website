import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy — Axion Digital',
  description: 'How Warren Digital Consulting, LLC (Axion Digital) collects, uses, and protects your information.',
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="June 25, 2026"
      intro="This Privacy Policy describes how Warren Digital Consulting, LLC, operating as Axion Digital (“we,” “us,” or “our”), collects, uses, and shares information when you visit our website, contact us, or engage our services."
      sections={[
        {
          heading: 'Information We Collect',
          body: [
            'We collect information you provide directly to us, such as your name, email address, company, and any details you share when you book a consultation, fill out a form, or communicate with us.',
            'We also automatically collect certain technical information when you visit our website, including your IP address, browser type, device information, and pages viewed, through cookies and similar technologies.',
          ],
        },
        {
          heading: 'How We Use Your Information',
          body: [
            'We use the information we collect to respond to your inquiries, schedule and conduct consultations, provide and improve our services, communicate with you about our offerings, and comply with legal obligations.',
          ],
        },
        {
          heading: 'How We Share Information',
          body: [
            'We do not sell your personal information. We may share information with trusted third-party service providers who help us operate our business (such as scheduling, hosting, and analytics providers), and where required by law.',
          ],
        },
        {
          heading: 'Data Security',
          body: [
            'We implement reasonable technical and organizational measures designed to protect your information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
          ],
        },
        {
          heading: 'Your Rights',
          body: [
            'Depending on your location, you may have the right to access, correct, or delete the personal information we hold about you, or to object to certain processing. To exercise these rights, contact us using the details below.',
          ],
        },
        {
          heading: 'Contact Us',
          body: [
            'If you have questions about this Privacy Policy or our data practices, contact us at maxwell@axiondigital.io.',
            'Warren Digital Consulting, LLC',
          ],
        },
      ]}
    />
  );
}

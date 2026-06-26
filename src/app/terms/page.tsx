import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Terms of Service — Axion Digital',
  description: 'The terms governing your use of the Axion Digital website and services, operated by Warren Digital Consulting, LLC.',
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      lastUpdated="June 25, 2026"
      intro="These Terms of Service (“Terms”) govern your access to and use of the website and services provided by Warren Digital Consulting, LLC, operating as Axion Digital (“we,” “us,” or “our”). By using our website or engaging our services, you agree to these Terms."
      sections={[
        {
          heading: 'Use of Our Website',
          body: [
            'You may use our website for lawful purposes only. You agree not to use the site in any way that could damage, disable, or impair it, or interfere with any other party’s use of it.',
          ],
        },
        {
          heading: 'Services',
          body: [
            'Any services we provide are governed by a separate written agreement between you and Warren Digital Consulting, LLC. In the event of a conflict between these Terms and such an agreement, the signed agreement controls.',
            'Information on this website, including descriptions of services and expected results, is provided for general informational purposes and does not constitute a guarantee of specific outcomes.',
          ],
        },
        {
          heading: 'Intellectual Property',
          body: [
            'All content on this website, including text, graphics, logos, and software, is the property of Warren Digital Consulting, LLC or its licensors and is protected by applicable intellectual property laws. You may not reproduce or distribute it without our prior written consent.',
          ],
        },
        {
          heading: 'Disclaimers',
          body: [
            'Our website and its content are provided “as is” without warranties of any kind, whether express or implied. We do not warrant that the site will be uninterrupted, error-free, or free of harmful components.',
          ],
        },
        {
          heading: 'Limitation of Liability',
          body: [
            'To the fullest extent permitted by law, Warren Digital Consulting, LLC will not be liable for any indirect, incidental, special, or consequential damages arising out of or related to your use of our website.',
          ],
        },
        {
          heading: 'Changes to These Terms',
          body: [
            'We may update these Terms from time to time. Changes are effective when posted on this page with an updated “Last updated” date.',
          ],
        },
        {
          heading: 'Contact Us',
          body: [
            'Questions about these Terms can be directed to maxwell@axiondigital.io.',
            'Warren Digital Consulting, LLC',
          ],
        },
      ]}
    />
  );
}

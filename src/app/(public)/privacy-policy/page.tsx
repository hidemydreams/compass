// app/privacy/page.tsx

import { settings } from '@/settings';

export default function PrivacyPolicy() {
  return (
    <main className='max-w-3xl mx-auto px-4 py-10 text-gray-800'>
      <h1 className='text-3xl font-bold mb-6'>Privacy Policy</h1>
      <p className='mb-6 text-sm text-gray-500'>Effective Date: 15 May 2025</p>

      <section className='space-y-6'>
        <div>
          <p>
            At <strong>Linkoo</strong>, we are committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, and
            protect your personal data in accordance with the General Data
            Protection Regulation (GDPR).
          </p>
        </div>

        <div>
          <h2 className='font-semibold text-xl mb-2'>1. Who We Are</h2>
          <p>
            Linkoo
            <br />
            Hubska 64a, Wrocław, Poland
            <br />
            Email:{' '}
            <a
              href={`mailto:${settings.email}`}
              className='text-blue-600 underline'
            >
              {settings.email}
            </a>
          </p>
        </div>

        <div>
          <h2 className='font-semibold text-xl mb-2'>
            2. What Data We Collect
          </h2>
          <p>We may collect the following types of personal data:</p>
          <ul className='list-disc ml-6'>
            <li>Full name</li>
            <li>Email address</li>
            <li>Billing details (handled by Stripe)</li>
            <li>Information you provide via contact forms</li>
          </ul>
        </div>

        <div>
          <h2 className='font-semibold text-xl mb-2'>
            3. How We Use Your Data
          </h2>
          <p>Your personal data is used to:</p>
          <ul className='list-disc ml-6'>
            <li>Create and manage your Linkoo account</li>
            <li>Process payments and manage subscriptions</li>
            <li>Respond to inquiries submitted through contact forms</li>
            <li>Ensure compliance with legal obligations</li>
          </ul>
        </div>

        <div>
          <h2 className='font-semibold text-xl mb-2'>4. Payment Processing</h2>
          <p>
            We use Stripe to securely process all payments. Linkoo does not
            store or access your credit card information. Stripe handles all
            billing details in compliance with PCI-DSS and GDPR.
          </p>
        </div>

        <div>
          <h2 className='font-semibold text-xl mb-2'>5. Cookies & Tracking</h2>
          <p>
            Linkoo does not use any cookies, tracking pixels, or analytics tools
            that store information on your device. No cookie consent banner is
            currently required or displayed.
          </p>
        </div>

        <div>
          <h2 className='font-semibold text-xl mb-2'>6. Sharing of Data</h2>
          <p>
            We do not share your personal data with any third parties for
            marketing or analytics purposes. Data may be shared only with Stripe
            for payment processing.
          </p>
        </div>

        <div>
          <h2 className='font-semibold text-xl mb-2'>7. Your Rights</h2>
          <p>Under the GDPR, you have the right to:</p>
          <ul className='list-disc ml-6'>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Request a copy of your data (data portability)</li>
          </ul>
          <p className='mt-2'>
            To exercise these rights, please email us at:{' '}
            <a
              href={`mailto:${settings.email}`}
              className='text-blue-600 underline'
            >
              {settings.email}
            </a>
          </p>
        </div>

        <div>
          <h2 className='font-semibold text-xl mb-2'>8. Data Retention</h2>
          <p>
            We retain personal data only for as long as necessary to fulfill the
            purposes for which it was collected, including to comply with legal,
            accounting, or reporting requirements.
          </p>
        </div>

        <div>
          <h2 className='font-semibold text-xl mb-2'>9. Children’s Privacy</h2>
          <p>
            Linkoo is not intended for use by children under the age of 16. We
            do not knowingly collect personal data from children.
          </p>
        </div>

        <div>
          <h2 className='font-semibold text-xl mb-2'>
            10. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated effective date.
          </p>
        </div>

        <div>
          <h2 className='font-semibold text-xl mb-2'>11. Contact</h2>
          <p>
            For any questions regarding this Privacy Policy, or to exercise your
            rights under GDPR, contact:
            <br />
            <strong>Linkoo</strong>
            <br />
            Email:{' '}
            <a
              href={`mailto:${settings.email}`}
              className='text-blue-600 underline'
            >
              {settings.email}
            </a>
            <br />
            Address: Hubska 64a, Wrocław, Poland
          </p>
        </div>
      </section>
    </main>
  );
}

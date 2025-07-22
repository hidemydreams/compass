// app/terms/page.tsx

import { settings } from '@/settings';

export default function TermsPage() {
  return (
    <main className='max-w-3xl mx-auto px-4 py-10 text-gray-800'>
      <h1 className='text-3xl font-bold mb-6'>Terms of Service</h1>
      <p className='mb-6 text-sm text-gray-500'>Effective Date: 15 May 2025</p>

      <section className='space-y-6'>
        <div>
          <h2 className='font-semibold text-xl mb-2'>1. Acceptance of Terms</h2>
          <p>
            By accessing or using Linkoo (the “Service”), operated by Linkoo Sp.
            z o.o., you agree to comply with and be bound by these Terms. If you
            do not agree, please do not use our Service.
          </p>
        </div>

        <div>
          <h2 className='font-semibold text-xl mb-2'>2. Eligibility</h2>
          <p>
            You must be at least 18 years old or the age of majority in your
            jurisdiction to use this Service. By using Linkoo, you represent and
            warrant that you meet this requirement.
          </p>
        </div>

        <div>
          <h2 className='font-semibold text-xl mb-2'>3. Use of the Service</h2>
          <p>
            You agree to use the Service only for lawful purposes and in
            accordance with these Terms. You may not:
          </p>
          <ul className='list-disc ml-6'>
            <li>
              Use the Service in any way that violates applicable laws or
              regulations.
            </li>
            <li>
              Attempt to gain unauthorized access to the Service or related
              systems.
            </li>
          </ul>
        </div>

        <div>
          <h2 className='font-semibold text-xl mb-2'>
            4. Subscriptions & Billing
          </h2>
          <p>Linkoo offers paid subscription plans:</p>
          <ul className='list-disc ml-6'>
            <li>
              <strong>Billing Cycle:</strong> Subscriptions are billed monthly
              or annually, depending on your plan.
            </li>
            <li>
              <strong>Auto-Renewal:</strong> Plans renew automatically unless
              cancelled before the renewal date.
            </li>
            <li>
              <strong>Cancellation:</strong> You can cancel anytime via your
              account settings. It takes effect at the end of the current
              billing cycle.
            </li>
            <li>
              <strong>Refunds:</strong> Refunds are not provided except as
              required by Polish or EU law.
            </li>
          </ul>
        </div>

        <div>
          <h2 className='font-semibold text-xl mb-2'>5. User Accounts</h2>
          <p>
            You’re responsible for safeguarding your account information and for
            any activity under your account.
          </p>
        </div>

        <div>
          <h2 className='font-semibold text-xl mb-2'>
            6. Intellectual Property
          </h2>
          <p>
            All content on Linkoo is the property of Linkoo Sp. z o.o. or its
            licensors. You may not copy, modify, or distribute any part without
            our permission.
          </p>
        </div>

        <div>
          <h2 className='font-semibold text-xl mb-2'>7. Disclaimers</h2>
          <p>
            The Service is provided “as is.” We do not guarantee uninterrupted,
            error-free service or outcomes.
          </p>
        </div>

        <div>
          <h2 className='font-semibold text-xl mb-2'>
            8. Limitation of Liability
          </h2>
          <p>
            Linkoo Sp. z o.o. is not liable for any indirect, incidental, or
            consequential damages arising from your use of the Service, to the
            fullest extent permitted by Polish law.
          </p>
        </div>

        <div>
          <h2 className='font-semibold text-xl mb-2'>9. Termination</h2>
          <p>
            We may suspend or terminate your account at any time for violating
            these Terms or for harmful behavior.
          </p>
        </div>

        <div>
          <h2 className='font-semibold text-xl mb-2'>10. Changes to Terms</h2>
          <p>
            We may update these Terms at any time. Significant changes will be
            posted on our site. Continued use of Linkoo means you accept the new
            Terms.
          </p>
        </div>

        <div>
          <h2 className='font-semibold text-xl mb-2'>11. Governing Law</h2>
          <p>
            These Terms are governed by the laws of Poland and the European
            Union.
          </p>
        </div>

        <div>
          <h2 className='font-semibold text-xl mb-2'>12. Contact Us</h2>
          <p>
            If you have any questions, please contact us at:
            <br />
            <strong>Email:</strong> {settings.email}
            <br />
            <strong>Address:</strong> Linkoo Sp. z o.o., Poland
          </p>
        </div>
      </section>
    </main>
  );
}

/**
 * Privacy Policy Page
 * 
 * Provides information about data handling and privacy practices:
 * - Data collection
 * - Data usage
 * - User rights
 * 
 * File path: src/app/privacy/page.tsx
 */

import { Card } from '@/components/ui/card';

export default function PrivacyPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <Card className="p-6 mb-8">
          <p className="text-sm text-gray-500 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="prose dark:prose-invert max-w-none">
            <h2>1. Introduction</h2>
            <p>
              Welcome to anyone ("we," "our," or "us"). We respect your privacy and are committed 
              to protecting your personal data. This privacy policy will inform you about how we look 
              after your personal data when you visit our website and tell you about your privacy rights 
              and how the law protects you.
            </p>
            
            <h2>2. Data We Collect</h2>
            <p>
              When you use our platform, we may collect the following types of information:
            </p>
            <ul>
              <li>
                <strong>Account Information:</strong> When you create an account, we collect your name, 
                email address, and password.
              </li>
              <li>
                <strong>Repository Data:</strong> When you upload or connect a repository, we process the 
                code and metadata to provide our analysis services.
              </li>
              <li>
                <strong>Usage Data:</strong> We collect information about how you interact with our platform, 
                including pages visited, features used, and time spent.
              </li>
              <li>
                <strong>Technical Data:</strong> We collect information about your device, browser, IP address, 
                and other technical details.
              </li>
            </ul>
            
            <h2>3. How We Use Your Data</h2>
            <p>
              We use your personal data for the following purposes:
            </p>
            <ul>
              <li>To provide and maintain our services</li>
              <li>To analyze and improve your repositories</li>
              <li>To generate integration guides</li>
              <li>To communicate with you about our services</li>
              <li>To detect and prevent fraud and abuse</li>
              <li>To comply with legal obligations</li>
            </ul>
            
            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal data against 
              unauthorized access, alteration, disclosure, or destruction. We regularly review 
              and update our security practices to enhance protection.
            </p>
            
            <h2>5. Your Rights</h2>
            <p>
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul>
              <li>The right to access your personal data</li>
              <li>The right to correct inaccurate or incomplete data</li>
              <li>The right to delete your personal data</li>
              <li>The right to restrict processing of your data</li>
              <li>The right to data portability</li>
              <li>The right to object to processing of your data</li>
            </ul>
            
            <h2>6. Third-Party Services</h2>
            <p>
              Our platform may integrate with third-party services, such as GitHub or other version 
              control systems. When you connect these services, their privacy policies may also apply. 
              We encourage you to review the privacy policies of any third-party services you use with 
              our platform.
            </p>
            
            <h2>7. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes 
              by posting the new privacy policy on this page and updating the "Last updated" date.
            </p>
            
            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our data practices, please 
              contact us at:
            </p>
            <p>
              Email: privacy@anyone.example.com<br />
              Address: 123 Main Street, Anytown, USA
            </p>
          </div>
        </Card>
      </div>
    </main>
  );
} 
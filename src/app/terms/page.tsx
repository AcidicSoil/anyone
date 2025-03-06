/**
 * Terms of Service Page
 * 
 * Provides information about the legal terms of using the platform:
 * - User responsibilities
 * - Platform limitations
 * - Intellectual property
 * 
 * File path: src/app/terms/page.tsx
 */

import { Card } from '@/components/ui/card';

export default function TermsPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <Card className="p-6 mb-8">
          <p className="text-sm text-gray-500 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="prose dark:prose-invert max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the anyone platform ("Service"), you agree to be bound by these 
              Terms of Service ("Terms"). If you do not agree to these Terms, you may not use the Service.
            </p>
            
            <h2>2. Description of Service</h2>
            <p>
              anyone is a platform that provides repository analysis and Ollama integration services. 
              The Service includes:
            </p>
            <ul>
              <li>Repository upload and analysis</li>
              <li>Compatibility scoring</li>
              <li>Integration guide generation</li>
              <li>Related tools and features</li>
            </ul>
            
            <h2>3. User Accounts</h2>
            <p>
              To use certain features of the Service, you may need to create an account. You are 
              responsible for maintaining the confidentiality of your account credentials and for 
              all activities that occur under your account. You agree to:
            </p>
            <ul>
              <li>Provide accurate and complete information when creating your account</li>
              <li>Update your information to keep it current</li>
              <li>Protect your account credentials</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
            
            <h2>4. User Responsibilities</h2>
            <p>
              When using the Service, you agree to:
            </p>
            <ul>
              <li>Comply with all applicable laws and regulations</li>
              <li>Respect the intellectual property rights of others</li>
              <li>Not upload malicious code or content</li>
              <li>Not attempt to gain unauthorized access to the Service</li>
              <li>Not use the Service to harm others or damage the Service</li>
            </ul>
            
            <h2>5. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are owned by anyone 
              and are protected by international copyright, trademark, patent, trade secret, and other 
              intellectual property laws.
            </p>
            <p>
              You retain ownership of any code or repositories you upload to the Service. By uploading 
              content, you grant us a license to use, process, and analyze that content solely for the 
              purpose of providing the Service to you.
            </p>
            
            <h2>6. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, anyone shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages, including without limitation, 
              loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul>
              <li>Your use or inability to use the Service</li>
              <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
              <li>Any interruption or cessation of transmission to or from the Service</li>
              <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through the Service</li>
            </ul>
            
            <h2>7. Disclaimer of Warranties</h2>
            <p>
              The Service is provided "as is" and "as available" without warranties of any kind, 
              either express or implied, including, but not limited to, implied warranties of 
              merchantability, fitness for a particular purpose, or non-infringement.
            </p>
            
            <h2>8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of 
              significant changes by posting the new Terms on this page and updating the "Last updated" date.
            </p>
            
            <h2>9. Termination</h2>
            <p>
              We may terminate or suspend your account and access to the Service immediately, 
              without prior notice or liability, for any reason, including without limitation 
              if you breach these Terms.
            </p>
            
            <h2>10. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of 
              the United States, without regard to its conflict of law provisions.
            </p>
            
            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              Email: terms@anyone.example.com<br />
              Address: 123 Main Street, Anytown, USA
            </p>
          </div>
        </Card>
      </div>
    </main>
  );
} 
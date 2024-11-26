
'use client'

import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const TermsConent = () => {

  const [tabIndex, setTabIndex] = useState(0);

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    let index = 0; // default to the first tab
    if (hash) {
      switch (hash) {
        case 'terms_of_use':
          index = 0;
          break;
        case 'privacy_policy':
          index = 1;
          break;
        // case 'cookie_policy':
        //   index = 2;
        //   break;
        case 'best_price_guarantee':
          index = 3;
          break;
        default:
          break;
      }
      setTabIndex(index);
    }
  }, []);

  useEffect(() => {
    // Scroll when the tabIndex is updated and the component re-renders
    const tabs = ['terms_of_use', 'privacy_policy', 'cookie_policy', 'best_price_guarantee'];
    const currentTabId = tabs[tabIndex];
    if (currentTabId) {
      scrollToElement(currentTabId);
    }
  }, [tabIndex]);

  return (
    <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
      <div className="row y-gap-30">
        <div className="col-lg-3">
          <div className="px-30 py-30">
            <TabList className="tabs__controls row text-16 y-gap-10 js-tabs-controls">
              <Tab className="col-12 tabs__button js-tabs-button" id="terms_of_use">
                Terms of Use
              </Tab>
              <Tab className="col-12 tabs__button js-tabs-button" id="privacy_policy">
                Privacy policy
              </Tab>
              {/*<Tab className="col-12 tabs__button js-tabs-button" id="cookie_policy">
                Cookie Policy
              </Tab>*/}
              <Tab className="col-12 tabs__button js-tabs-button" id="best_price_guarantee">
                Best Price Guarantee
              </Tab>
            </TabList>
          </div>
        </div>
        {/* End .col-lg-3 */}

        <div className="col-lg-9">
          <TabPanel>
            <div className="tabs__content js-tabs-content" data-aos="fade">
              <h1>Terms of Use</h1>

              <h2 className="text-22 mt-20">1. Introduction</h2>
                <p className="text-16 mt-5">
                    Welcome to Jetting.com Ltd. (“<strong>Company</strong>”, “<strong>we</strong>”, “<strong>our</strong>”, “<strong>us</strong>”, “<strong>Jetting.com</strong>”)! As you have just clicked our Terms of Use, please pause, grab a cup of coffee, and carefully read the following pages. It will take you approximately 20 minutes.
                </p>
                <p className="text-16 mt-5">
                    These Terms of Use (“<strong>Terms</strong>”, “<strong>Terms of Use</strong>”) govern your use of our web pages located at https://jetting.com (“<strong>Website</strong>”), operated by Jetting.com Ltd.
                </p>
                <p className="text-16 mt-5">
                    For the purposes of these Terms, the term "Service" exclusively refers to Jetting.com's services, information, content, and links provided on our Website.
                </p>
                <p className="text-16 mt-5">
                    Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard, and disclose information resulting from your use of our web pages. Please read it here: <a href="https://jetting.com/terms#privacy_policy">https://jetting.com/terms#privacy_policy</a>.
                </p>
                <p className="text-16 mt-5">
                    Your agreement with us includes these Terms and our Privacy Policy (“<strong>Agreements</strong>”). You acknowledge that you have read and understood the Agreements and agree to be bound by them.
                </p>
                <p className="text-16 mt-5">
                    If you do not agree with (or cannot comply with) the Agreements, then you may not use the Service, but please let us know by emailing at <a href="mailto:info@jetting.com">info@jetting.com</a> so we can try to find a solution. These Terms apply to all visitors, users, and others who wish to access or use the Service.
                </p>
                <p className="text-16 mt-5">
                    Thank you for being responsible.
                </p>
                <h2 className="text-22 mt-20">2. Communications</h2>
                <p className="text-16 mt-5">
                    By creating an Account on our Service, you agree to subscribe to newsletters, marketing, or promotional materials, and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing at <a href="mailto:unsubscribe@jetting.com">unsubscribe@jetting.com</a>.
                </p>
                <h2 className="text-22 mt-20">3. Information Accuracy</h2>
                <p className="text-16 mt-5">
                    While Jetting.com strives to provide accurate and up-to-date information, we do not guarantee the accuracy, completeness, or reliability of any content on our Website. The travel-related details, including but not limited to prices, availability, and terms, are subject to change without notice. Users are encouraged to verify all information directly with the respective travel providers before making any travel-related decisions. Jetting.com assumes no responsibility for discrepancies or inaccuracies and disclaims liability for any loss or inconvenience incurred due to reliance on the information provided on our platform. We aim to facilitate informed decision-making, and users are advised to cross-check details and policies with the relevant travel service providers for the most current and accurate information.
                </p>
                <h2 className="text-22 mt-20">4. Affiliate Links and Redirects</h2>
                <p className="text-16 mt-5">
                    Jetting.com operates as a travel aggregator, connecting users to a variety of travel options through affiliate programs with different providers. Throughout our Website, you may encounter affiliate links that redirect you to third-party websites. These links are a result of our partnerships with various travel service providers. When you click on a link or make a purchase through an affiliate link, we may earn a commission. This commission does not affect the price you pay for the product or service. Please be aware that we do not directly sell any travel products or services on our platform. By clicking on these affiliate links, you may be redirected to our partner sites where you can explore and make bookings directly with them. It's important to note that any transactions or interactions on the third-party websites are subject to the terms and policies of those respective providers. Jetting.com assumes no responsibility for the content, accuracy, or practices of external sites and encourages users to review the terms of service and privacy policies of these third-party providers.
                </p>
                <h2 className="text-22 mt-20">5. Refunds</h2>
                <p className="text-16 mt-5">
                    As Jetting.com does not directly sell travel products or services, refunds are subject to the policies of the respective affiliate partners. In the event of any changes, cancellations, refusals, or incidents related to services purchased or booked on our partner sites, the user should apply for refunds directly through the customer support channels provided by our partner services where such services were directly purchased. It's important to familiarize yourself with the refund policies of the specific travel service providers, as they may vary. Jetting.com acts as an intermediary, and any refund requests or disputes are to be addressed directly with the relevant partner services, which are responsible for the fulfillment and resolution of transactions conducted on their platforms.
                </p>
                <h2 className="text-22 mt-20">6. Contests, Sweepstakes, and Promotions</h2>
                <p className="text-16 mt-5">
                    Any contests, sweepstakes, or other promotions (collectively, “Promotions”) made available through the Service may be governed by rules that are separate from these Terms of Use. If you participate in any Promotions, please review the applicable rules as well as our Privacy Policy. If the rules for a Promotion conflict with these Terms of Use, Promotion rules will apply.
                </p>
                <h2 className="text-22 mt-20">7. Content</h2>
                <p className="text-16 mt-5">
                    Content found on or through this Service is the property of Jetting.com Ltd. or used with permission. You may not distribute, modify, transmit, reuse, download, repost, copy, or use said Content, whether in whole or in part, for commercial purposes or for personal gain, without express advance written permission from us.
                </p>
                <h2 className="text-22 mt-20">8. Analytics</h2>
                <p className="text-16 mt-5">
                    We may use third-party Service Providers to monitor and analyze the use of our Service.
                </p>
                <p className="text-16 mt-5">
                    - Google Analytics: Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google may use the collected data to contextualize and personalize ads. For more information, please visit: <a href="https://policies.google.com/privacy?hl=en">https://policies.google.com/privacy?hl=en</a>
                </p>
                <p className="text-16 mt-5">
                    - Cloudflare Analytics: Cloudflare analytics is a web analytics service operated by Cloudflare Inc. Read the Privacy Policy here: <a href="https://www.cloudflare.com/privacypolicy/">https://www.cloudflare.com/privacypolicy/</a>
                </p>
                <h2 className="text-22 mt-20">9. No Use By Minors</h2>
                <p className="text-16 mt-5">
                    The Service is intended only for access and use by individuals at least eighteen (18) years old. By accessing or using any of Company, you warrant and represent that you are at least eighteen (18) years of age. If you are not at least eighteen (18) years old, you are prohibited from both the access and usage of Service.
                </p>
                <h2 className="text-22 mt-20">10. Accounts</h2>
                <p className="text-16 mt-5">
                    When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on Service.
                </p>
                <p className="text-16 mt-5">
                    You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                </p>
                <p className="text-16 mt-5">
                    You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than you, without appropriate authorization. You may not use as a username any name that is offensive, vulgar, or obscene.
                </p>
                <p className="text-16 mt-5">
                    We reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders in our sole discretion.
                </p>
                <h2 className="text-22 mt-20">11. Intellectual Property</h2>
                <p className="text-16 mt-5">
                    The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of Jetting.com Ltd. and its licensors. Service is protected by copyright, trademark, and other laws of the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Jetting.com Ltd.
                </p>
                <h2 className="text-22 mt-20">12. Error Reporting and Feedback</h2>
                <p className="text-16 mt-5">
                    You may provide us directly at <a href="mailto:info@jetting.com">info@jetting.com</a> with information and feedback concerning errors, suggestions for improvements, ideas, problems, complaints, and other matters related to our Service (“Feedback”). You acknowledge and agree that: (i) you shall not retain, acquire, or assert any intellectual property right or other right, title, or interest in or to the Feedback; (ii) Company may have development ideas similar to the Feedback; (iii) Feedback does not contain confidential information or proprietary information from you or any third party; and (iv) Company is not under any obligation of confidentiality with respect to the Feedback. In the event the transfer of the ownership to the Feedback is not possible due to applicable mandatory laws, you grant Company and its affiliates an exclusive, transferable, irrevocable, free-of-charge, sub-licensable, unlimited, and perpetual right to use (including copy, modify, create derivative works, publish, distribute, and commercialize) Feedback in any manner and for any purpose.
                </p>
                <h2 className="text-22 mt-20">13. Links To Other Web Sites</h2>
                <p className="text-16 mt-5">
                    Our Service may contain links to third-party websites or services that are not owned or controlled by Jetting.com Ltd.
                </p>
                <p className="text-16 mt-5">
                    Jetting.com Ltd. has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. We do not warrant the offerings of any of these entities/individuals or their websites.
                </p>
                <p className="text-16 mt-5">
                    YOU ACKNOWLEDGE AND AGREE THAT JETTING.COM LTD. SHALL NOT BE RESPONSIBLE OR LIABLE, DIRECTLY OR INDIRECTLY, FOR ANY DAMAGE OR LOSS CAUSED OR ALLEGED TO BE CAUSED BY OR IN CONNECTION WITH USE OF OR RELIANCE ON ANY SUCH CONTENT, GOODS, OR SERVICES AVAILABLE ON OR THROUGH ANY SUCH THIRD-PARTY WEBSITES OR SERVICES.
                </p>
                <p className="text-16 mt-5">
                    WE STRONGLY ADVISE YOU TO READ THE TERMS OF SERVICE AND PRIVACY POLICIES OF ANY THIRD-PARTY WEBSITES OR SERVICES THAT YOU VISIT.
                </p>
                <h2 className="text-22 mt-20">14. Disclaimer Of Warranty</h2>
                <p className="text-16 mt-5">
                    THESE SERVICES ARE PROVIDED BY COMPANY ON AN “AS IS” AND “AS AVAILABLE” BASIS. COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR SERVICES, OR THE INFORMATION, CONTENT, OR MATERIALS INCLUDED THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES, THEIR CONTENT, AND ANY SERVICES OR ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK.
                </p>
                <p className="text-16 mt-5">
                    NEITHER COMPANY NOR ANY PERSON ASSOCIATED WITH COMPANY MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES. WITHOUT LIMITING THE FOREGOING, NEITHER COMPANY NOR ANYONE ASSOCIATED WITH COMPANY REPRESENTS OR WARRANTS THAT THE SERVICES, THEIR CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE SERVICES OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR THAT THE SERVICES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.
                </p>
                <p className="text-16 mt-5">
                    COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR PURPOSE.
                </p>
                <p className="text-16 mt-5">
                    THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
                </p>
                <h2 className="text-22 mt-20">15. Limitation Of Liability</h2>
                <p className="text-16 mt-5">
                    EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT ARISES (INCLUDING ATTORNEYS' FEES AND ALL RELATED COSTS AND EXPENSES OF LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL, IF ANY, WHETHER OR NOT LITIGATION OR ARBITRATION IS INSTITUTED), WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, INCLUDING WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY OR PROPERTY DAMAGE, ARISING FROM THIS AGREEMENT AND ANY VIOLATION BY YOU OF ANY FEDERAL, STATE, OR LOCAL LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF COMPANY HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. EXCEPT AS PROHIBITED BY LAW, IF THERE IS LIABILITY FOUND ON THE PART OF COMPANY, IT WILL BE LIMITED TO THE AMOUNT PAID FOR THE PRODUCTS AND/OR SERVICES, AND UNDER NO CIRCUMSTANCES WILL THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES. SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF PUNITIVE, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, SO THE PRIOR LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.
                </p>
                <h2 className="text-22 mt-20">16. Termination</h2>
                <p className="text-16 mt-5">
                    We may terminate or suspend your account and bar access to Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of Terms.
                </p>
                <p className="text-16 mt-5">
                    If you wish to terminate your account, you may simply discontinue using our website.
                </p>
                <p className="text-16 mt-5">
                    All provisions of Terms that by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                </p>
                <h2 className="text-22 mt-20">17. Governing Law</h2>
                <p className="text-16 mt-5">
                    These Terms shall be governed and construed in accordance with the laws of the United Kingdom without regard to its conflict of law provisions.
                </p>
                <p className="text-16 mt-5">
                    Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service and supersede and replace any prior agreements we might have had between us regarding Service.
                </p>
                <h2 className="text-22 mt-20">18. Changes To Service</h2>
                <p className="text-16 mt-5">
                    We reserve the right to withdraw or amend our Service, and any service or material we provide via Service, in our sole discretion without notice. We will not be liable if for any reason all or any part of Service is unavailable at any time or for any period. From time to time, we may restrict access to some parts of Service or the entire Service to users, including registered users.
                </p>
                <h2 className="text-22 mt-20">19. Amendments To Terms</h2>
                <p className="text-16 mt-5">
                    We may amend Terms at any time by posting the amended terms on this site. It is your responsibility to review these Terms periodically.
                </p>
                <p className="text-16 mt-5">
                    Your continued use of our Website following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you.
                </p>
                <p className="text-16 mt-5">
                    By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use Service.
                </p>
                <h2 className="text-22 mt-20">20. Waiver And Severability</h2>
                <p className="text-16 mt-5">
                    No waiver by Company of any term or condition set forth in Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of Company to assert a right or provision under Terms shall not constitute a waiver of such right or provision.
                </p>
                <p className="text-16 mt-5">
                    If any provision of Terms is held by a court or other tribunal of competent jurisdiction to be invalid, illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of Terms will continue in full force and effect.
                </p>
                <h2 className="text-22 mt-20">21. Acknowledgment</h2>
                <p className="text-16 mt-5">
                    BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM.
                </p>
                <h2 className="text-22 mt-20">22. Contact Us</h2>
                <p className="text-16 mt-5">
                    Please send your feedback, comments, requests for technical support:
                    <br />
                    By email at <a href="mailto:info@jetting.com">info@jetting.com</a>.
                    <br />
                    By visiting Contact page on our website: <a href="https://jetting.com/contact" target="_blank">https://jetting.com/contact</a>.
                </p>
            </div>
          </TabPanel>
          {/* End Terms of Use */}

          <TabPanel>
            <div className="tabs__content js-tabs-content" data-aos="fade">
              <h1>Privacy Policy</h1>

              <p className="text-16 mt-20">
                  This document outlines how we collect, use, disclose, and protect your personal information when you access or use our services. By using our website at https://jetting.com (“<strong>Website</strong>”) or any associated services, you agree to the terms of this Privacy Policy.
              </p>

              <h2 className="text-22 mt-20">1. Information We Collect</h2>
              <p className="text-16 mt-5">
                  We may collect various types of information from users, including personal information provided voluntarily and data collected automatically through the use of our services. The types of information we collect include:
              </p>
              <ul className="list-disc text-15 ml-10">
                  <li>Personal Information: This may include your name, email address, and other details provided when you create an account with us.</li>
                  <li>Usage Data: We may collect information about your interactions with our Website, such as pages visited, links clicked, and other actions taken.</li>
                  <li>Device Information: We may collect information about the device you use to access our services, including the device type, operating system, and browser type.</li>
              </ul>

              <h2 className="text-22 mt-20">2. How We Use Your Information</h2>
              <p className="text-16 mt-5">
                  The information we collect is used for various purposes, including but not limited to:
              </p>
              <ul className="list-disc text-15 ml-10">
                  <li>Providing and maintaining our services</li>
                  <li>Personalizing your experience on our Website</li>
                  <li>Improving our services and user experience</li>
                  <li>Sending promotional materials and newsletters, where consent is provided</li>
                  <li>Responding to user inquiries and providing customer support</li>
                  <li>Ensuring the security and integrity of our services</li>
              </ul>

              <h2 className="text-22 mt-20">3. Information Sharing and Disclosure</h2>
              <p className="text-16 mt-5">
                  We may share your information with third parties in the following circumstances:
              </p>
              <ul className="list-disc text-15 ml-10">
                  <li>With your consent</li>
                  <li>To comply with legal obligations</li>
                  <li>With service providers and partners who assist us in delivering our services</li>
                  <li>In connection with mergers, acquisitions, or other business transactions</li>
                  <li>To protect our rights, privacy, safety, or property, and that of our users</li>
              </ul>

              <h2 className="text-22 mt-20">4. Cookies and Similar Technologies</h2>
              <p className="text-16 mt-5">
                  We use cookies and similar technologies to enhance your experience on our Website. You can manage your preferences for cookies through your browser settings.
              </p>

              <h2 className="text-22 mt-20">5. Your Choices and Rights</h2>
              <p className="text-16 mt-5">
                  You have the right to access, correct, or delete your personal information. You can also opt-out of receiving promotional communications from us. Please contact us at <a href="mailto:privacy@jetting.com">privacy@jetting.com</a> for assistance with your privacy-related requests.
              </p>

              <h2 className="text-22 mt-20">6. Security</h2>
              <p className="text-16 mt-5">
                  We implement reasonable security measures to protect your information. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-22 mt-20">7. Changes to Privacy Policy</h2>
              <p className="text-16 mt-5">
                  We may update our Privacy Policy from time to time. Any changes will be posted on this page, and the effective date will be indicated.
              </p>

              <h2 className="text-22 mt-20">8. Contact Us</h2>
              <p className="text-16 mt-5">
                  If you have any questions or concerns about our Privacy Policy, please contact us at <a href="mailto:privacy@jetting.com">privacy@jetting.com</a>.
              </p>
            </div>
          </TabPanel>
          {/* End Privacy Policy */}

          {/*<TabPanel>
            <div className="tabs__content js-tabs-content" data-aos="fade">
              <h1>Cookie Policy</h1>
            </div>
          </TabPanel>*/}
          {/* End Cookie Policy */}

          <TabPanel>
            <div className="tabs__content js-tabs-content" data-aos="fade">
              <h1>Best Price Guarantee</h1>

              <p className="text-16 mt-20">
                 At Jetting.com, we are committed to providing you with the best possible prices for your travel needs. As a travel booking aggregator, we strive to offer a comprehensive platform where you can compare prices and options from various travel providers all in one place. Our goal is to help you find the most competitive deals that suit your preferences and budget.
              </p>

              <p className="text-16 mt-20">
                 Our Best Price Guarantee ensures that if you find a lower price for the same itinerary on another website within 24 hours of booking through our platform, we will provide you with the necessary assistance to secure the best available deal, subject to the terms and conditions outlined below:
              </p>
              <ul className="list-disc text-15 ml-10">
                  <li><b>Eligibility:</b> The lower price must be for the same itinerary, including the same dates, flights, accommodations, and any other pertinent details.</li>
                  <li><b>Comparison:</b> The lower price must be publicly available and accessible for booking on a different website at the time of our verification.</li>
                  <li><b>Verification:</b> To process a claim under our Best Price Guarantee, you must provide us with evidence of the lower price, such as a screenshot or link to the competing offer, within 24 hours of booking through Jetting.com.</li>
                  <li><b>Assistance:</b> Upon verification of the competing offer, we will provide you with assistance to secure the best available deal through our platform, which may include adjusting your booking or providing alternative options from our partner travel providers.</li>
                  <li><b>Exclusions:</b> Our Best Price Guarantee does not apply to bookings made through opaque or auction websites, loyalty program rates, group rates, corporate discounts, package deals, or any other special promotions or offers.</li>
              </ul>

              <p className="text-16 mt-20">
                 Jetting.com serves as a facilitator for connecting travelers with various travel providers, and we do not sell tickets or services directly. Therefore, any refunds or adjustments resulting from a successful claim under our Best Price Guarantee will be subject to the policies and procedures of the respective travel providers.
              </p>

              <p className="text-16 mt-20">
                 Jetting.com reserves the right to modify or terminate the Best Price Guarantee program at any time without prior notice. Our decisions regarding eligibility and application of the guarantee are final and binding.
              </p>

              <p className="text-16 mt-20">
                 By using our platform and submitting a booking, you acknowledge and agree to abide by the terms and conditions of our Best Price Guarantee.
              </p>

              <p className="text-16 mt-20">
                 For inquiries or to submit a claim under our Best Price Guarantee, please contact our customer service team at <a href="mailto:support@jetting.com">support@jetting.com</a>.
              </p>
            </div>
          </TabPanel>
          {/* End Best Price Guarantee */}
        </div>
        {/* End col-lg-9 */}
      </div>
    </Tabs>
  );
};

export default TermsConent;

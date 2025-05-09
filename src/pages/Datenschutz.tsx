
import React from 'react';
import { Link } from 'react-router-dom';
import PixelButton from '../components/PixelButton';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import HeaderNavigation from '../components/HeaderNavigation';

const Datenschutz: React.FC = () => {
  const { translate, language } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4">
      <div className="absolute top-4 right-4 z-10">
        <HeaderNavigation />
      </div>
      
      <div className="text-center mb-8 animate-appear flex flex-col items-center">
        <div className="inline-block bg-retro-purple-700 px-4 py-1 rounded mb-2">
          <h1 className="font-pixel text-retro-light text-xs">PURPLE HABIT SCROLLS</h1>
        </div>
        <h2 className="font-pixel text-xl text-retro-purple-200 leading-relaxed text-center">
          {translate('footer.datenschutz')}
        </h2>
        <div className="mt-2">
          <Link to="/?showHabit=true">
            <PixelButton onClick={() => {}}>
              {translate('button.home')}
            </PixelButton>
          </Link>
        </div>
      </div>
      
      <div className="w-full max-w-2xl flex flex-col items-center">
        <div className="mb-8 text-left w-full p-6 scroll-paper rounded-lg">
          <h3 className="font-pixel-text text-xl mb-4 text-center">
            {language === 'en' ? 'Data Protection Policy' : 'Datenschutzerklärung'}
          </h3>
          
          <div className="font-pixel-text text-base space-y-4 max-h-[60vh] overflow-y-auto pr-2">
            {language === 'en' ? (
              // English Version - Complete translation of the German text
              <>
                <h4 className="text-lg font-bold mt-6 mb-2">1. Data Protection at a Glance</h4>
                
                <p>
                  <strong>General Information</strong><br />
                  The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to identify you personally. For detailed information on data protection, please refer to our privacy policy listed below this text.
                </p>
                
                <p>
                  <strong>Data Collection on this Website</strong><br />
                  <strong>Who is responsible for data collection on this website?</strong><br />
                  Data processing on this website is carried out by the website operator. You can find their contact details in the "Notice on the Responsible Party" section of this privacy policy.
                </p>
                
                <p>
                  <strong>How do we collect your data?</strong><br />
                  On the one hand, your data is collected when you provide it to us. This could be data that you enter in a contact form, for example.
                  
                  Other data is automatically collected by our IT systems when you visit the website. This is primarily technical data (e.g., internet browser, operating system, or time of page visit). This data is collected automatically as soon as you enter our website.
                </p>
                
                <p>
                  <strong>What do we use your data for?</strong><br />
                  Some of the data is collected to ensure error-free provision of the website. Other data may be used to analyze your user behavior.
                </p>
                
                <p>
                  <strong>What rights do you have regarding your data?</strong><br />
                  You have the right to receive information about the origin, recipient, and purpose of your stored personal data free of charge at any time. You also have the right to request the correction or deletion of this data. If you have given consent for data processing, you can revoke this consent at any time for the future. You also have the right, under certain circumstances, to request the restriction of the processing of your personal data. Furthermore, you have the right to lodge a complaint with the competent supervisory authority.
                  
                  You can contact us at any time regarding this and other questions on the subject of data protection.
                </p>
                
                <p>
                  <strong>Analysis Tools and Third-Party Tools</strong><br />
                  When visiting this website, your browsing behavior may be statistically analyzed. This is done primarily with analysis programs.
                  
                  Detailed information about these analysis programs can be found in the following privacy policy.
                </p>
                
                <h4 className="text-lg font-bold mt-6 mb-2">2. Hosting</h4>
                
                <p>
                  We host the contents of our website with the following provider:
                </p>
                
                <p>
                  <strong>Hostinger.com</strong><br />
                  This website is externally hosted. The personal data collected on this website is stored on the servers of the host(s). This may include, in particular, IP addresses, contact requests, meta and communication data, contract data, contact details, names, website accesses, and other data generated via a website.
                </p>
                
                <p>
                  External hosting is carried out for the purpose of contract fulfillment with our potential and existing customers (Art. 6 para. 1 lit. b GDPR) and in the interest of secure, fast, and efficient provision of our online offering by a professional provider (Art. 6 para. 1 lit. f GDPR). If appropriate consent has been obtained, the processing is carried out exclusively on the basis of Art. 6 para. 1 lit. a GDPR and § 25 para. 1 TDDDG, insofar as the consent includes the storage of cookies or access to information in the user's end device (e.g., device fingerprinting) within the meaning of the TDDDG. The consent can be revoked at any time.
                </p>
                
                <p>
                  Our host(s) will only process your data to the extent necessary to fulfill their service obligations and will follow our instructions regarding this data. We use the following host(s): Hostinger
                </p>
                
                <h4 className="text-lg font-bold mt-6 mb-2">3. General Information and Mandatory Information</h4>
                
                <p>
                  <strong>Data Protection</strong><br />
                  The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.
                </p>
                
                <p>
                  When you use this website, various personal data is collected. Personal data is data that can be used to identify you personally. This privacy policy explains what data we collect and what we use it for. It also explains how and for what purpose this is done.
                </p>
                
                <p>
                  We would like to point out that data transmission on the Internet (e.g., when communicating by email) may have security gaps. Complete protection of data against access by third parties is not possible.
                </p>
                
                <p>
                  <strong>Notice on the Responsible Party</strong><br />
                  The responsible party for data processing on this website is:
                </p>
                
                <p>
                  Dranoel UG (limited liability)<br />
                  Rosenleite 16, 90619 Trautskirchen<br />
                  Phone: +49 (0)15203101898<br />
                  Email: info@dranoleug.de
                </p>
                
                <p>
                  The responsible party is the natural or legal person who alone or jointly with others determines the purposes and means of the processing of personal data (e.g., names, email addresses, etc.).
                </p>
                
                <p>
                  <strong>Storage Duration</strong><br />
                  Unless a more specific storage period has been specified in this privacy policy, your personal data will remain with us until the purpose for data processing ceases to apply. If you assert a legitimate request for deletion or revoke your consent to data processing, your data will be deleted, unless we have other legally permissible reasons for storing your personal data (e.g., tax or commercial law retention periods); in the latter case, the deletion will take place after these reasons cease to apply.
                </p>
                
                <p>
                  <strong>General Information on the Legal Basis for Data Processing on this Website</strong><br />
                  If you have consented to data processing, we process your personal data on the basis of Art. 6 para. 1 lit. a GDPR or Art. 9 para. 2 lit. a GDPR, if special categories of data according to Art. 9 para. 1 GDPR are processed. In the case of explicit consent to the transfer of personal data to third countries, the data processing is also based on Art. 49 para. 1 lit. a GDPR. If you have consented to the storage of cookies or to the access to information in your end device (e.g., via device fingerprinting), the data processing is additionally based on § 25 para. 1 TDDDG. The consent can be revoked at any time. If your data is required for the fulfillment of a contract or for the implementation of pre-contractual measures, we process your data on the basis of Art. 6 para. 1 lit. b GDPR. Furthermore, we process your data if they are required for the fulfillment of a legal obligation on the basis of Art. 6 para. 1 lit. c GDPR. Data processing may also be carried out on the basis of our legitimate interest according to Art. 6 para. 1 lit. f GDPR. Information on the relevant legal bases in each individual case is provided in the following paragraphs of this privacy policy.
                </p>
                
                <p>
                  <strong>Note on Data Transfer to Data Protection Non-Secure Third Countries and to US Companies Not DPF-Certified</strong><br />
                  We use, among other things, tools from companies based in data protection non-secure third countries as well as US tools whose providers are not certified under the EU-US Data Privacy Framework (DPF). When these tools are active, your personal data may be transferred to these countries and processed there. We would like to point out that in data protection non-secure third countries, no level of data protection comparable to that in the EU can be guaranteed.
                </p>
                
                <p>
                  We would like to point out that the USA as a secure third country generally has a level of data protection comparable to that of the EU. A data transfer to the USA is therefore permissible if the recipient has a certification under the "EU-US Data Privacy Framework" (DPF) or has appropriate additional guarantees. Information on transfers to third countries, including the data recipients, can be found in this privacy policy.
                </p>
                
                <p>
                  <strong>Recipients of Personal Data</strong><br />
                  As part of our business activities, we work with various external entities. In some cases, this also requires the transfer of personal data to these external entities. We only pass on personal data to external entities if this is necessary for the fulfillment of a contract, if we are legally obligated to do so (e.g., passing on data to tax authorities), if we have a legitimate interest in the transfer according to Art. 6 para. 1 lit. f GDPR, or if another legal basis permits the data transfer. When using processors, we only pass on personal data of our customers on the basis of a valid contract for order processing. In the case of joint processing, a contract for joint processing is concluded.
                </p>
                
                <p>
                  <strong>Revocation of Your Consent to Data Processing</strong><br />
                  Many data processing operations are only possible with your express consent. You can revoke any consent already given at any time. The legality of the data processing carried out until the revocation remains unaffected by the revocation.
                </p>
                
                <p>
                  <strong>Right to Object to Data Collection in Special Cases and to Direct Marketing (Art. 21 GDPR)</strong><br />
                  IF DATA PROCESSING IS CARRIED OUT ON THE BASIS OF ART. 6 PARA. 1 LIT. E OR F GDPR, YOU HAVE THE RIGHT TO OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA AT ANY TIME FOR REASONS ARISING FROM YOUR PARTICULAR SITUATION; THIS ALSO APPLIES TO PROFILING BASED ON THESE PROVISIONS. THE RESPECTIVE LEGAL BASIS ON WHICH PROCESSING IS BASED CAN BE FOUND IN THIS PRIVACY POLICY. IF YOU OBJECT, WE WILL NO LONGER PROCESS YOUR AFFECTED PERSONAL DATA UNLESS WE CAN DEMONSTRATE COMPELLING LEGITIMATE GROUNDS FOR THE PROCESSING WHICH OVERRIDE YOUR INTERESTS, RIGHTS, AND FREEDOMS, OR THE PROCESSING SERVES THE ESTABLISHMENT, EXERCISE, OR DEFENSE OF LEGAL CLAIMS (OBJECTION ACCORDING TO ART. 21 PARA. 1 GDPR).
                </p>
                
                <p>
                  IF YOUR PERSONAL DATA IS PROCESSED FOR DIRECT MARKETING PURPOSES, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING OF YOUR PERSONAL DATA FOR SUCH MARKETING; THIS ALSO APPLIES TO PROFILING TO THE EXTENT THAT IT IS RELATED TO SUCH DIRECT MARKETING. IF YOU OBJECT, YOUR PERSONAL DATA WILL SUBSEQUENTLY NO LONGER BE USED FOR DIRECT MARKETING PURPOSES (OBJECTION ACCORDING TO ART. 21 PARA. 2 GDPR).
                </p>
                
                <p>
                  <strong>Right to Lodge a Complaint with the Competent Supervisory Authority</strong><br />
                  In the event of violations of the GDPR, data subjects have the right to lodge a complaint with a supervisory authority, in particular in the Member State of their habitual residence, place of work, or place of the alleged violation. The right to lodge a complaint is without prejudice to any other administrative or judicial remedy.
                </p>
                
                <p>
                  <strong>Right to Data Portability</strong><br />
                  You have the right to have data that we process automatically on the basis of your consent or in fulfillment of a contract handed over to you or to a third party in a common, machine-readable format. If you request the direct transfer of the data to another controller, this will only be done to the extent technically feasible.
                </p>
                
                <p>
                  <strong>Information, Correction, and Deletion</strong><br />
                  Within the framework of the applicable legal provisions, you have the right at any time to free information about your stored personal data, their origin and recipient, and the purpose of data processing and, if necessary, a right to correction or deletion of these data. For this and other questions on the subject of personal data, you can contact us at any time.
                </p>
                
                <p>
                  <strong>Right to Restriction of Processing</strong><br />
                  You have the right to request the restriction of the processing of your personal data. You can contact us at any time for this. The right to restriction of processing exists in the following cases:
                </p>
                
                <p>
                  If you contest the accuracy of your personal data stored by us, we usually need time to verify this. For the duration of the verification, you have the right to request the restriction of the processing of your personal data.
                </p>
                
                <p>
                  If the processing of your personal data happened/happens unlawfully, you can request the restriction of data processing instead of deletion.
                </p>
                
                <p>
                  If we no longer need your personal data, but you need it for the exercise, defense, or assertion of legal claims, you have the right to request the restriction of the processing of your personal data instead of deletion.
                </p>
                
                <p>
                  If you have filed an objection pursuant to Art. 21 para. 1 GDPR, a balancing of your and our interests must be carried out. As long as it has not yet been determined whose interests prevail, you have the right to request the restriction of the processing of your personal data.
                </p>
                
                <p>
                  If you have restricted the processing of your personal data, this data – apart from its storage – may only be processed with your consent or for the establishment, exercise, or defense of legal claims or for the protection of the rights of another natural or legal person or for reasons of important public interest of the European Union or a Member State.
                </p>
                
                <p>
                  <strong>SSL or TLS Encryption</strong><br />
                  For security reasons and to protect the transmission of confidential content, such as orders or inquiries that you send to us as the site operator, this site uses SSL or TLS encryption. You can recognize an encrypted connection by the fact that the address line of the browser changes from "http://" to "https://" and by the lock symbol in your browser line.
                </p>
                
                <p>
                  If SSL or TLS encryption is activated, the data you transmit to us cannot be read by third parties.
                </p>
                
                <p>
                  <strong>Objection to Promotional Emails</strong><br />
                  We hereby object to the use of contact data published within the framework of the imprint obligation for the transmission of not explicitly requested advertising and information materials. The operators of the pages expressly reserve the right to take legal action in the event of the unsolicited sending of advertising information, such as through spam emails.
                </p>
                
                <h4 className="text-lg font-bold mt-6 mb-2">4. Data Collection on this Website</h4>
                
                <p>
                  <strong>Cookies</strong><br />
                  Our websites use so-called "cookies". Cookies are small data packages and do not cause any damage to your device. They are stored either temporarily for the duration of a session (session cookies) or permanently (permanent cookies) on your device. Session cookies are automatically deleted after your visit. Permanent cookies remain stored on your device until you delete them yourself or until they are automatically deleted by your web browser.
                </p>
                
                <p>
                  Cookies can come from us (first-party cookies) or from third-party companies (so-called third-party cookies). Third-party cookies enable the integration of certain services from third-party companies within websites (e.g., cookies for processing payment services).
                </p>
                
                <p>
                  Cookies have various functions. Many cookies are technically necessary because certain website functions would not work without them (e.g., the shopping cart function or the display of videos). Other cookies may be used to analyze user behavior or for advertising purposes.
                </p>
                
                <p>
                  Cookies that are necessary for carrying out the electronic communication process, for providing certain functions you want (e.g., for the shopping cart function), or for optimizing the website (e.g., cookies for measuring the web audience) (necessary cookies) are stored on the basis of Art. 6 para. 1 lit. f GDPR, unless another legal basis is specified. The website operator has a legitimate interest in storing necessary cookies for the technically error-free and optimized provision of its services. If consent to store cookies and similar recognition technologies has been requested, the processing is carried out exclusively on the basis of this consent (Art. 6 para. 1 lit. a GDPR and § 25 para. 1 TDDDG); the consent can be revoked at any time.
                </p>
                
                <p>
                  You can set your browser so that you are informed about the setting of cookies and only allow cookies in individual cases, exclude the acceptance of cookies for certain cases or in general, and activate the automatic deletion of cookies when closing the browser. When deactivating cookies, the functionality of this website may be limited.
                </p>
                
                <p>
                  Which cookies and services are used on this website can be found in this privacy policy.
                </p>
                
                <p>
                  <strong>Contact Form</strong><br />
                  If you send us inquiries via the contact form, your information from the inquiry form, including the contact details you provided there, will be stored by us for the purpose of processing the inquiry and in the event of follow-up questions. We do not share this data without your consent.
                </p>
                
                <p>
                  The processing of this data is based on Art. 6 para. 1 lit. b GDPR, if your request is related to the fulfillment of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, the processing is based on our legitimate interest in the effective processing of the requests addressed to us (Art. 6 para. 1 lit. f GDPR) or on your consent (Art. 6 para. 1 lit. a GDPR) if this has been requested; the consent can be revoked at any time.
                </p>
                
                <p>
                  The data you enter in the contact form will remain with us until you request us to delete it, revoke your consent to storage, or the purpose for data storage ceases to apply (e.g., after your request has been processed). Mandatory legal provisions – especially retention periods – remain unaffected.
                </p>
                
                <p>
                  <strong>Request by Email, Telephone, or Fax</strong><br />
                  If you contact us by email, telephone, or fax, your inquiry, including all resulting personal data (name, inquiry) will be stored and processed by us for the purpose of processing your request. We do not share this data without your consent.
                </p>
                
                <p>
                  The processing of this data is based on Art. 6 para. 1 lit. b GDPR, if your request is related to the fulfillment of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, the processing is based on our legitimate interest in the effective processing of the requests addressed to us (Art. 6 para. 1 lit. f GDPR) or on your consent (Art. 6 para. 1 lit. a GDPR) if this has been requested; the consent can be revoked at any time.
                </p>
                
                <p>
                  The data sent by you to us via contact requests remains with us until you request us to delete it, revoke your consent to storage, or the purpose for data storage ceases to apply (e.g., after your request has been processed). Mandatory legal provisions – especially legal retention periods – remain unaffected.
                </p>
                
                <h4 className="text-lg font-bold mt-6 mb-2">5. Social Media</h4>
                
                <p>
                  <strong>Social Media Elements with Shariff</strong><br />
                  Elements from social media platforms are used on this website (e.g., Facebook, X, Instagram, Pinterest, XING, LinkedIn, Tumblr).
                </p>
                
                <p>
                  You can usually recognize the social media elements by the respective social media logos. To ensure data protection on this website, we only use these elements together with the so-called "Shariff" solution. This application prevents the social media elements integrated on this website from transferring your personal data to the respective provider already when you first enter the page.
                </p>
                
                <p>
                  Only when you activate the respective social media element by clicking on the associated button, a direct connection to the server of the provider is established (consent). As soon as you activate the social media element, the respective provider receives the information that you have visited this website with your IP address. If you are simultaneously logged into your respective social media account (e.g., Facebook), the respective provider can assign the visit to this website to your user account.
                </p>
                
                <p>
                  Activating the plugin constitutes consent within the meaning of Art. 6 para. 1 lit. a GDPR and § 25 para. 1 TDDDG. This consent can be revoked at any time with effect for the future.
                </p>
                
                <p>
                  The use of the service is made to obtain the legally required consents for the use of certain technologies. The legal basis for this is Art. 6 para. 1 lit. c GDPR.
                </p>
                
                <p>
                  <strong>Facebook</strong><br />
                  Elements of the social network Facebook are integrated on this website. The provider of this service is Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Ireland. According to Facebook, the collected data is also transferred to the USA and other third countries.
                </p>
                
                <p>
                  An overview of the Facebook social media elements can be found here: https://developers.facebook.com/docs/plugins/?locale=de_DE.
                </p>
                
                <p>
                  When the social media element is active, a direct connection is established between your device and the Facebook server. Facebook thereby receives the information that you have visited this website with your IP address. If you click the Facebook "Like" button while logged into your Facebook account, you can link the content of this website to your Facebook profile. This allows Facebook to associate the visit to this website with your user account. We would like to point out that we, as the provider of the pages, have no knowledge of the content of the transmitted data or its use by Facebook. For more information on this, please see Facebook's privacy policy at: https://de-de.facebook.com/privacy/explanation.
                </p>
                
                <p>
                  The use of this service is based on your consent according to Art. 6 para. 1 lit. a GDPR and § 25 para. 1 TDDDG. The consent can be revoked at any time.
                </p>
                
                <p>
                  Insofar as personal data is collected on our website with the help of the tool described here and forwarded to Facebook, we and Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Ireland are jointly responsible for this data processing (Art. 2 GDPR). The joint responsibility is limited exclusively to the collection of the data and its forwarding to Facebook. The processing by Facebook after forwarding is not part of the joint responsibility. Our joint obligations have been set out in a joint processing agreement. The wording of the agreement can be found at: https://www.facebook.com/legal/controller_addendum. According to this agreement, we are responsible for providing the data protection information when using the Facebook tool and for the data protection-compliant implementation of the tool on our website. Facebook is responsible for the data security of the Facebook products. You can assert data subject rights (e.g., requests for information) regarding the data processed by Facebook directly with Facebook. If you assert the data subject rights with us, we are obliged to forward them to Facebook.
                </p>
                
                <p>
                  The data transfer to the USA is based on the standard contractual clauses of the EU Commission. Details can be found here: https://www.facebook.com/legal/EU_data_transfer_addendum, https://de-de.facebook.com/help/566994660333381 and https://www.facebook.com/policy.php.
                </p>
                
                <p>
                  The company has a certification according to the "EU-US Data Privacy Framework" (DPF). The DPF is an agreement between the European Union and the USA that is intended to ensure compliance with European data protection standards in data processing in the USA. Every company certified under the DPF undertakes to comply with these data protection standards. Further information on this can be obtained from the provider at the following link: https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000GnywAAC&status=Active.
                </p>
                
                <p>
                  <strong>X (formerly Twitter)</strong><br />
                  Functions of the X (formerly Twitter) service are integrated on this website. These functions are offered by the parent company X Corp., 1355 Market Street, Suite 900, San Francisco, CA 94103, USA. For data processing of persons living outside the USA, the branch Twitter International Unlimited Company, One Cumberland Place, Fenian Street, Dublin 2, D02 AX07, Ireland, is responsible.
                </p>
                
                <p>
                  When the social media element is active, a direct connection is established between your device and the X server. X (formerly Twitter) thereby receives information about the visit to this website by you. By using X (formerly Twitter) and the "Re-Tweet" or "Repost" function, the websites you visit are linked to your X (formerly Twitter) account and made known to other users. We would like to point out that we, as the provider of the pages, have no knowledge of the content of the transmitted data or its use by X (formerly Twitter). Further information on this can be found in the privacy policy of X (formerly Twitter) at: https://x.com/de/privacy.
                </p>
                
                <p>
                  The use of this service is based on your consent according to Art. 6 para. 1 lit. a GDPR and § 25 para. 1 TDDDG. The consent can be revoked at any time.
                </p>
                
                <p>
                  The data transfer to the USA is based on the standard contractual clauses of the EU Commission. Details can be found here: https://gdpr.x.com/en/controller-to-controller-transfers.html.
                </p>
                
                <p>
                  You can change your privacy settings on X (formerly Twitter) in the account settings at https://x.com/settings/account.
                </p>
                
                <p>
                  <strong>Instagram</strong><br />
                  Functions of the Instagram service are integrated on this website. These functions are offered by Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Ireland.
                </p>
                
                <p>
                  When the social media element is active, a direct connection is established between your device and the Instagram server. Instagram thereby receives information about the visit to this website by you.
                </p>
                
                <p>
                  If you are logged into your Instagram account, you can link the content of this website to your Instagram profile by clicking the Instagram button. This allows Instagram to associate the visit to this website with your user account. We would like to point out that we, as the provider of the pages, have no knowledge of the content of the transmitted data or its use by Instagram.
                </p>
                
                <p>
                  The use of this service is based on your consent according to Art. 6 para. 1 lit. a GDPR and § 25 para. 1 TDDDG. The consent can be revoked at any time.
                </p>
                
                <p>
                  Insofar as personal data is collected on our website with the help of the tool described here and forwarded to Facebook or Instagram, we and Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Ireland are jointly responsible for this data processing (Art. 26 GDPR). The joint responsibility is limited exclusively to the collection of the data and its forwarding to Facebook or Instagram. The processing by Facebook or Instagram after forwarding is not part of the joint responsibility.
                </p>
                
                <p>
                  Our joint obligations have been set out in a joint processing agreement. The wording of the agreement can be found at: https://www.facebook.com/legal/controller_addendum. According to this agreement, we are responsible for providing the data protection information when using the Facebook or Instagram tool and for the data protection-compliant implementation of the tool on our website. Facebook is responsible for the data security of the Facebook or Instagram products. You can assert data subject rights (e.g., requests for information) regarding the data processed by Facebook or Instagram directly with Facebook. If you assert the data subject rights with us, we are obliged to forward them to Facebook.
                </p>
                
                <p>
                  The data transfer to the USA is based on the standard contractual clauses of the EU Commission. Details can be found here: https://www.facebook.com/legal/EU_data_transfer_addendum, https://privacycenter.instagram.com/policy/ and https://de-de.facebook.com/help/566994660333381.
                </p>
                
                <p>
                  Further information on this can be found in the privacy policy of Instagram: https://privacycenter.instagram.com/policy/.
                </p>
                
                <p>
                  The company has a certification according to the "EU-US Data Privacy Framework" (DPF). The DPF is an agreement between the European Union and the USA that is intended to ensure compliance with European data protection standards in data processing in the USA. Every company certified under the DPF undertakes to comply with these data protection standards. Further information on this can be obtained from the provider at the following link: https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000GnywAAC&status=Active.
                </p>
                
                <p>
                  <strong>Pinterest</strong><br />
                  On this website, we use elements of the social network Pinterest, which is operated by Pinterest Europe Ltd., Palmerston House, 2nd Floor, Fenian Street, Dublin 2, Ireland.
                </p>
                
                <p>
                  When you visit a page that contains such an element, your browser establishes a direct connection to the servers of Pinterest. This social media element transmits log data to the Pinterest server in the USA. These log data may include your IP address, the address of visited websites that also contain Pinterest functions, browser type and settings, date and time of the request, your use of Pinterest, and cookies.
                </p>
                
                <p>
                  The use of this service is based on your consent according to Art. 6 para. 1 lit. a GDPR and § 25 para. 1 TDDDG. The consent can be revoked at any time.
                </p>
                
                <p>
                  Further information on the purpose, scope, and further processing and use of the data by Pinterest, as well as your related rights and options to protect your privacy, can be found in Pinterest's privacy policy: https://policy.pinterest.com/de/privacy-policy.
                </p>
                
                <h4 className="text-lg font-bold mt-6 mb-2">6. Newsletter</h4>
                
                <p>
                  <strong>Newsletter Data</strong><br />
                  If you would like to receive the newsletter offered on this website, we need an email address from you, as well as information that allows us to verify that you are the owner of the email address provided and agree to receive the newsletter. Further data is not collected or only on a voluntary basis. We use this data exclusively for sending the requested information and do not pass it on to third parties.
                </p>
                
                <p>
                  The processing of the data entered in the newsletter registration form takes place exclusively on the basis of your consent (Art. 6 para. 1 lit. a GDPR). The consent given for the storage of the data, the email address, and their use for sending the newsletter can be revoked at any time, for example via the "unsubscribe" link in the newsletter. The legality of the data processing operations already carried out remains unaffected by the revocation.
                </p>
                
                <p>
                  The data you have deposited with us for the purpose of subscribing to the newsletter will be stored by us or the newsletter service provider until you unsubscribe from the newsletter and will be deleted from the newsletter distribution list after you unsubscribe from the newsletter or after the purpose has ceased to apply. We reserve the right to delete or block email addresses from our newsletter distribution list at our own discretion within the scope of our legitimate interest pursuant to Art. 6 para. 1 lit. f GDPR.
                </p>
                
                <p>
                  Data stored by us for other purposes remains unaffected by this.
                </p>
                
                <p>
                  After you have unsubscribed from the newsletter distribution list, your email address may be stored by us or the newsletter service provider in a blacklist, if necessary, to prevent future mailings. The data from the blacklist is only used for this purpose and is not merged with other data. This serves both your interest and our interest in complying with the legal requirements when sending newsletters (legitimate interest within the meaning of Art. 6 para. 1 lit. f GDPR). The storage in the blacklist is not limited in time.
                </p>
                
                <p>
                  You can object to the storage if your interests outweigh our legitimate interest.
                </p>
                
                <h4 className="text-lg font-bold mt-6 mb-2">7. Plugins and Tools</h4>
                
                <p>
                  <strong>YouTube with Enhanced Data Protection</strong><br />
                  This website embeds videos from the YouTube website. The website operator is Google Ireland Limited ("Google"), Gordon House, Barrow Street, Dublin 4, Ireland.
                </p>
                
                <p>
                  When you visit one of our pages where YouTube is embedded, a connection to the servers of YouTube is established. The YouTube server is informed which of our pages you have visited. If you are logged into your YouTube account, you enable YouTube to associate your browsing behavior directly with your personal profile. You can prevent this by logging out of your YouTube account.
                </p>
                
                <p>
                  We use YouTube in enhanced privacy mode. According to YouTube, videos played in enhanced privacy mode are not used to personalize surfing on YouTube. Ads played in enhanced privacy mode are also not personalized. No cookies are set in enhanced privacy mode. Instead, so-called local storage elements are stored in the user's browser, which contain similar personal data to cookies and can be used for recognition. Details about enhanced privacy mode can be found here: https://support.google.com/youtube/answer/171780.
                </p>
                
                <p>
                  After activation of a YouTube video, further data processing operations may be triggered over which we have no influence.
                </p>
                
                <p>
                  The use of YouTube is in the interest of an appealing presentation of our online offers. This constitutes a legitimate interest within the meaning of Art. 6 para. 1 lit. f GDPR. If appropriate consent has been requested, the processing is carried out exclusively on the basis of Art. 6 para. 1 lit. a GDPR and § 25 para. 1 TDDDG, insofar as the consent includes the storage of cookies or access to information in the user's end device (e.g., device fingerprinting) within the meaning of the TDDDG. The consent can be revoked at any time.
                </p>
                
                <p>
                  Further information about data protection at YouTube can be found in their privacy policy at: https://policies.google.com/privacy?hl=de.
                </p>
                
                <p>
                  The company has a certification according to the "EU-US Data Privacy Framework" (DPF). The DPF is an agreement between the European Union and the USA that is intended to ensure compliance with European data protection standards in data processing in the USA. Every company certified under the DPF undertakes to comply with these data protection standards. Further information on this can be obtained from the provider at the following link: https://www.dataprivacyframework.gov/participant/5780.
                </p>
                
                <p>
                  Source: https://www.e-recht24.de
                </p>
              </>
            ) : (
              // German Version - Original text
              <>
                <h4 className="text-lg font-bold mt-6 mb-2">1. Datenschutz auf einen Blick</h4>
                
                <p>
                  <strong>Allgemeine Hinweise</strong><br />
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen
                  Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                </p>
                
                <p>
                  <strong>Datenerfassung auf dieser Website</strong><br />
                  <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                </p>
                
                <p>
                  <strong>Wie erfassen wir Ihre Daten?</strong><br />
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um
                  Daten handeln, die Sie in ein Kontaktformular eingeben.
                </p>
                
                <p>
                  Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT- Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                </p>
                
                <p>
                  <strong>Wofür nutzen wir Ihre Daten?</strong><br />
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere
                  Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>
                
                <p>
                  <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                </p>
                
                <p>
                  Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
                </p>
                
                <p>
                  <strong>Analyse-Tools und Tools von Drittanbietern</strong><br />
                  Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.
                </p>
                
                <p>
                  Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden
                  Datenschutzerklärung.
                </p>
                
                <h4 className="text-lg font-bold mt-6 mb-2">2. Hosting</h4>
                
                <p>
                  Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                </p>
                
                <p>
                  <strong>Hostinger.com</strong><br />
                  Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
                </p>
                
                <p>
                  Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
                </p>
                
                <p>
                  Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen. Wir setzen folgende(n) Hoster ein: Hostinger
                </p>
                
                <h4 className="text-lg font-bold mt-6 mb-2">3. Allgemeine Hinweise und Pflichtinformationen</h4>
                
                <p>
                  <strong>Datenschutz</strong><br />
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>
                
                <p>
                  Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                </p>
                
                <p>
                  Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                </p>
                
                <p>
                  <strong>Hinweis zur verantwortlichen Stelle</strong><br />
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                
                <p>
                  Dranoel UG (haftungsbeschränkt)<br />
                  Rosenleite 16, 90619 Trautskirchen<br />
                  Telefon: +49 (0)15203101898<br />
                  E-Mail: info@dranoleug.de
                </p>
                
                <p>
                  Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                </p>
                
                <p>
                  <strong>Speicherdauer</strong><br />
                  Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
                </p>
                
                <p>
                  <strong>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</strong><br />
                  Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art.
                  49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.
                </p>
                
                <p>
                  <strong>Hinweis zur Datenweitergabe in datenschutzrechtlich nicht sichere Drittstaaten sowie die Weitergabe an US-Unternehmen, die nicht DPF-zertifiziert sind</strong><br />
                  Wir verwenden unter anderem Tools von Unternehmen mit Sitz in datenschutzrechtlich nicht sicheren Drittstaaten sowie US-Tools, deren Anbieter nicht nach dem EU-US-Data Privacy Framework (DPF) zertifiziert sind. Wenn diese Tools aktiv sind, können Ihre personenbezogene Daten in diese Staaten übertragen und dort verarbeitet werden. Wir weisen darauf hin, dass in datenschutzrechtlich unsicheren
                  Drittstaaten kein mit der EU vergleichbares Datenschutzniveau garantiert werden kann.
                </p>
                
                <p>
                  Wir weisen darauf hin, dass die USA als sicherer Drittstaat grundsätzlich ein mit der EU vergleichbares Datenschutzniveau aufweisen. Eine Datenübertragung in die USA ist danach zulässig, wenn der Empfänger eine Zertifizierung unter dem „EU-US Data Privacy Framework" (DPF) besitzt oder über geeignete zusätzliche Garantien verfügt. Informationen zu Übermittlungen an Drittstaaten einschließlich der Datenempfänger finden Sie in dieser Datenschutzerklärung.
                </p>
                
                <p>
                  <strong>Empfänger von personenbezogenen Daten</strong><br />
                  Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung geschlossen.
                </p>
                
                <p>
                  <strong>Widerruf Ihrer Einwilligung zur Datenverarbeitung</strong><br />
                  Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                </p>
                
                <p>
                  <strong>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</strong><br />
                  WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
                </p>
                
                <p>
                  WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).
                </p>
                
                <p>
                  <strong>Beschwerderecht bei der zuständigen Aufsichtsbehörde</strong><br />
                  Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                </p>
                
                <p>
                  <strong>Recht auf Datenübertragbarkeit</strong><br />
                  Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
                </p>
                
                <p>
                  <strong>Auskunft, Berichtigung und Löschung</strong><br />
                  Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
                </p>
                
                <p>
                  <strong>Recht auf Einschränkung der Verarbeitung</strong><br />
                  Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:
                </p>
                
                <p>
                  Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                </p>
                
                <p>
                  Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.
                </p>
                
                <p>
                  Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                </p>
                
                <p>
                  Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
                  zu verlangen.
                </p>
                
                <p>
                  Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
                </p>
                
                <p>
                  <strong>SSL- bzw. TLS-Verschlüsselung</strong><br />
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS- Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von
                  „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
                
                <p>
                  Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
                </p>
                
                <p>
                  <strong>Widerspruch gegen Werbe-E-Mails</strong><br />
                  Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
                </p>
                
                <h4 className="text-lg font-bold mt-6 mb-2">4. Datenerfassung auf dieser Website</h4>
                
                <p>
                  <strong>Cookies</strong><br />
                  Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
                </p>
                
                <p>
                  Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party- Cookies). Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von Drittunternehmen innerhalb von Webseiten (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
                </p>
                
                <p>
                  Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Webseitenfunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies können zur Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet werden.
                </p>
                
                <p>
                  Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur Optimierung der Website (z. B. Cookies zur Messung des Webpublikums) erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG); die Einwilligung ist jederzeit widerrufbar.
                </p>
                
                <p>
                  Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und
                  Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der
                  Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
                </p>
                
                <p>
                  Welche Cookies und Dienste auf dieser Website eingesetzt werden, können Sie dieser Datenschutzerklärung entnehmen.
                </p>
                
                <p>
                  <strong>Kontaktformular</strong><br />
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                
                <p>
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
                </p>
                
                <p>
                  Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                </p>
                
                <p>
                  <strong>Anfrage per E-Mail, Telefon oder Telefax</strong><br />
                  Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                
                <p>
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.
                </p>
                
                <p>
                  Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
                </p>
                
                <h4 className="text-lg font-bold mt-6 mb-2">5. Soziale Medien</h4>
                
                <p>
                  <strong>Social-Media-Elemente mit Shariff</strong><br />
                  Auf dieser Website werden Elemente von sozialen Medien verwendet (z. B. Facebook, X, Instagram, Pinterest, XING, LinkedIn, Tumblr).
                </p>
                
                <p>
                  Die Social-Media-Elemente können Sie in der Regel anhand der jeweiligen Social-Media-Logos erkennen. Um den Datenschutz auf dieser Website zu gewährleisten, verwenden wir diese Elemente nur zusammen
                  mit der sogenannten „Shariff"-Lösung. Diese Anwendung verhindert, dass die auf dieser Website integrierten Social-Media-Elemente Ihre personenbezogenen Daten schon beim ersten Betreten der Seite an den jeweiligen Anbieter übertragen.
                </p>
                
                <p>
                  Erst wenn Sie das jeweilige Social-Media-Element durch Anklicken der zugehörigen Schaltfläche aktivieren, wird eine direkte Verbindung zum Server des Anbieters hergestellt (Einwilligung). Sobald Sie das Social- Media-Element aktivieren, erhält der jeweilige Anbieter die Information, dass Sie mit Ihrer IP-Adresse diese Website besucht haben. Wenn Sie gleichzeitig in Ihrem jeweiligen Social-Media-Account (z. B. Facebook) eingeloggt sind, kann der jeweilige Anbieter den Besuch dieser Website Ihrem Benutzerkonto zuordnen.
                </p>
                
                <p>
                  Das Aktivieren des Plugins stellt eine Einwilligung im Sinne des Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG dar. Diese Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.
                </p>
                
                <p>
                  Der Einsatz des Dienstes erfolgt, um die gesetzlich vorgeschriebenen Einwilligungen für den Einsatz bestimmter Technologien einzuholen. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. c DSGVO.
                </p>
                
                <p>
                  <strong>Facebook</strong><br />
                  Auf dieser Website sind Elemente des sozialen Netzwerks Facebook integriert. Anbieter dieses Dienstes ist die Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Irland. Die erfassten Daten werden nach Aussage von Facebook jedoch auch in die USA und in andere Drittländer übertragen.
                </p>
                
                <p>
                  Eine Übersicht über die Facebook Social-Media-Elemente finden Sie hier:
                  https://developers.facebook.com/docs/plugins/?locale=de_DE.
                </p>
                
                <p>
                  Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung zwischen Ihrem Endgerät und dem Facebook-Server hergestellt. Facebook erhält dadurch die Information, dass Sie mit Ihrer IP-Adresse diese Website besucht haben. Wenn Sie den Facebook „Like-Button" anklicken, während Sie in Ihrem Facebook- Account eingeloggt sind, können Sie die Inhalte dieser Website auf Ihrem Facebook-Profil verlinken. Dadurch kann Facebook den Besuch dieser Website Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Facebook erhalten. Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Facebook unter:
                  https://de-de.facebook.com/privacy/explanation.
                </p>
                
                <p>
                  Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar.
                </p>
                
                <p>
                  Soweit mit Hilfe des hier beschriebenen Tools personenbezogene Daten auf unserer Website erfasst und an Facebook weitergeleitet werden, sind wir und die Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland gemeinsam für diese Datenverarbeitung verantwortlich (Art. 2 DSGVO). Die gemeinsame Verantwortlichkeit beschränkt sich dabei ausschließlich auf die Erfassung der Daten und deren Weitergabe an Facebook. Die nach der Weiterleitung erfolgende Verarbeitung durch Facebook ist nicht Teil der gemeinsamen Verantwortung. Die uns gemeinsam obliegenden Verpflichtungen wurden in einer Vereinbarung über gemeinsame Verarbeitung festgehalten. Den Wortlaut der Vereinbarung finden Sie unter:
                  https://www.facebook.com/legal/controller_addendum. Laut dieser Vereinbarung sind wir für die Erteilung der Datenschutzinformationen beim Einsatz des Facebook-Tools und für die datenschutzrechtlich sichere Implementierung des Tools auf unserer Website verantwortlich. Für die Datensicherheit der Facebook- Produkte ist Facebook verantwortlich. Betroffenenrechte (z. B. Auskunftsersuchen) hinsichtlich der bei Facebook verarbeiteten Daten können Sie direkt bei Facebook geltend machen. Wenn Sie die Betroffenenrechte bei uns geltend machen, sind wir verpflichtet, diese an Facebook weiterzuleiten.
                </p>
                
                <p>
                  Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier:
                  https://www.facebook.com/legal/EU_data_transfer_addendum, https://de-de.facebook.com/help/566994660333381 und https://www.facebook.com/policy.php.
                </p>
                
                <p>
                  Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework" (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: https://www.dataprivacyframework.gov/s/participant-search/participant- detail?contact=true&id=a2zt0000000GnywAAC&status=Active.
                </p>
                
                <p>
                  <strong>X (ehemals Twitter)</strong><br />
                  Auf dieser Website sind Funktionen des Dienstes X (ehemals Twitter) eingebunden. Diese Funktionen werden angeboten durch den Mutterkonzern X Corp., 1355 Market Street, Suite 900, San Francisco, CA
                  94103, USA. Für die Datenverarbeitung von außerhalb der USA lebenden Personen ist die Niederlassung Twitter International Unlimited Company, One Cumberland Place, Fenian Street, Dublin 2, D02 AX07, Irland, verantwortlich.
                </p>
                
                <p>
                  Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung zwischen Ihrem Endgerät und dem X- Server hergestellt. X (ehemals Twitter) erhält dadurch Informationen über den Besuch dieser Website durch
                  ie. Durch das Benutzen von X (ehemals Twitter) und der Funktion „Re-Tweet" bzw. „Repost" werden die von Ihnen besuchten Websites mit Ihrem X (ehemals Twitter)-Account verknüpft und anderen Nutzern bekannt gegeben. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der
                  übermittelten Daten sowie deren Nutzung durch X (ehemals Twitter) erhalten. Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von X (ehemals Twitter) unter:
                  https://x.com/de/privacy.
                </p>
                
                <p>
                  Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar.
                </p>
                
                <p>
                  Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier:
                  https://gdpr.x.com/en/controller-to-controller-transfers.html.
                </p>
                
                <p>
                  Ihre Datenschutzeinstellungen bei X (ehemals Twitter) können Sie in den Konto-Einstellungen unter https://x.com/settings/account ändern.
                </p>
                
                <p>
                  <strong>Instagram</strong><br />
                  Auf dieser Website sind Funktionen des Dienstes Instagram eingebunden. Diese Funktionen werden angeboten durch die Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Irland.
                </p>
                
                <p>
                  Wenn das Social-Media-Element aktiv ist, wird eine direkte Verbindung zwischen Ihrem Endgerät und dem Instagram-Server hergestellt. Instagram erhält dadurch Informationen über den Besuch dieser Website durch Sie.
                </p>
                
                <p>
                  Wenn Sie in Ihrem Instagram-Account eingeloggt sind, können Sie durch Anklicken des Instagram-Buttons die Inhalte dieser Website mit Ihrem Instagram-Profil verlinken. Dadurch kann Instagram den Besuch dieser Website Ihrem Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch Instagram erhalten.
                </p>
                
                <p>
                  Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und §25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar.
                </p>
                
                <p>
                  Soweit mit Hilfe des hier beschriebenen Tools personenbezogene Daten auf unserer Website erfasst und an Facebook bzw. Instagram weitergeleitet werden, sind wir und die Meta Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland gemeinsam für diese Datenverarbeitung verantwortlich (Art. 26 DSGVO). Die gemeinsame Verantwortlichkeit beschränkt sich dabei ausschließlich
                  auf die Erfassung der Daten und deren Weitergabe an Facebook bzw. Instagram. Die nach der Weiterleitung erfolgende Verarbeitung durch Facebook bzw. Instagram ist nicht Teil der gemeinsamen Verantwortung.
                </p>
                
                <p>
                  Die uns gemeinsam obliegenden Verpflichtungen wurden in einer Vereinbarung über gemeinsame Verarbeitung festgehalten. Den Wortlaut der Vereinbarung finden Sie unter: https://www.facebook.com/legal/controller_addendum. Laut dieser Vereinbarung sind wir für die Erteilung der Datenschutzinformationen beim Einsatz des Facebook- bzw. Instagram-Tools und für die datenschutzrechtlich sichere Implementierung des Tools auf unserer Website verantwortlich. Für die Datensicherheit der Facebook bzw. Instagram-Produkte ist Facebook verantwortlich. Betroffenenrechte
                  (z. B. Auskunftsersuchen) hinsichtlich der bei Facebook bzw. Instagram verarbeiteten Daten können Sie direkt bei Facebook geltend machen. Wenn Sie die Betroffenenrechte bei uns geltend machen, sind wir verpflichtet, diese an Facebook weiterzuleiten.
                </p>
                
                <p>
                  Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier:
                  https://www.facebook.com/legal/EU_data_transfer_addendum, https://privacycenter.instagram.com/policy/ und
                  https://de-de.facebook.com/help/566994660333381.
                </p>
                
                <p>
                  Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von Instagram:
                  https://privacycenter.instagram.com/policy/.
                </p>
                
                <p>
                  Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework" (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: https://www.dataprivacyframework.gov/s/participant-search/participant- detail?contact=true&id=a2zt0000000GnywAAC&status=Active.
                </p>
                
                <p>
                  <strong>Pinterest</strong><br />
                  Auf dieser Website verwenden wir Elemente des sozialen Netzwerkes Pinterest, das von der Pinterest Europe Ltd., Palmerston House, 2nd Floor, Fenian Street, Dublin 2, Irland betrieben wird.
                </p>
                
                <p>
                  Wenn Sie eine Seite aufrufen, die ein solches Element enthält, stellt Ihr Browser eine direkte Verbindung zu den Servern von Pinterest her. Dieses Social-Media-Element übermittelt dabei Protokolldaten an den Server von Pinterest in die USA. Diese Protokolldaten enthalten möglicherweise Ihre IP-Adresse, die Adresse der besuchten Websites, die ebenfalls Pinterest-Funktionen enthalten, Art und Einstellungen des Browsers, Datum und Zeitpunkt der Anfrage, Ihre Verwendungsweise von Pinterest sowie Cookies.
                </p>
                
                <p>
                  Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und §25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar.
                </p>
                
                <p>
                  Weitere Informationen zu Zweck, Umfang und weiterer Verarbeitung und Nutzung der Daten durch Pinterest sowie Ihre diesbezüglichen Rechte und Möglichkeiten zum Schutz Ihrer Privatsphäre finden Sie in den Datenschutzhinweisen von Pinterest:
                  https://policy.pinterest.com/de/privacy-policy.
                </p>
                
                <h4 className="text-lg font-bold mt-6 mb-2">6. Newsletter</h4>
                
                <p>
                  <strong>Newsletterdaten</strong><br />
                  Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E- Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Weitere Daten werden nicht bzw. nur auf freiwilliger Basis erhoben. Diese Daten verwenden wir ausschließlich für den Versand der angeforderten Informationen und geben diese nicht an Dritte weiter.
                </p>
                
                <p>
                  Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die erteilte Einwilligung zur Speicherung der Daten, der E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters können Sie jederzeit widerrufen, etwa über den „Austragen"-Link im Newsletter. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
                </p>
                
                <p>
                  Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten Daten werden von uns bis zu Ihrer Austragung aus dem Newsletter bei uns bzw. dem Newsletterdiensteanbieter gespeichert und nach der Abbestellung des Newsletters oder nach Zweckfortfall aus der Newsletterverteilerliste gelöscht. Wir behalten uns vor, E-Mail-Adressen aus unserem Newsletterverteiler nach eigenem Ermessen im Rahmen unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO zu löschen oder zu sperren.
                </p>
                
                <p>
                  Daten, die zu anderen Zwecken bei uns gespeichert wurden, bleiben hiervon unberührt.
                </p>
                
                <p>
                  Nach Ihrer Austragung aus der Newsletterverteilerliste wird Ihre E-Mail-Adresse bei uns bzw. dem Newsletterdiensteanbieter ggf. in einer Blacklist gespeichert, sofern dies zur Verhinderung künftiger Mailings erforderlich ist. Die Daten aus der Blacklist werden nur für diesen Zweck verwendet und nicht mit anderen Daten zusammengeführt. Dies dient sowohl Ihrem Interesse als auch unserem Interesse an der Einhaltung der gesetzlichen Vorgaben beim Versand von Newslettern (berechtigtes Interesse im Sinne des Art. 6 Abs. 1 lit. f DSGVO). Die Speicherung in der Blacklist ist zeitlich nicht befristet. 
                </p>
                
                <p>
                  Sie können der Speicherung widersprechen, sofern Ihre Interessen unser berechtigtes Interesse überwiegen.
                </p>
                
                <h4 className="text-lg font-bold mt-6 mb-2">7. Plugins und Tools</h4>
                
                <p>
                  <strong>YouTube mit erweitertem Datenschutz</strong><br />
                  Diese Website bindet Videos der Website YouTube ein. Betreiber der Website ist die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
                </p>
                
                <p>
                  Wenn Sie eine dieser Website besuchen, auf denen YouTube eingebunden ist, wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben. Wenn Sie in Ihrem YouTube-Account eingeloggt sind, ermöglichen Sie YouTube, Ihr Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem YouTube-Account ausloggen.
                </p>
                
                <p>
                  Wir nutzen YouTube im erweiterten Datenschutzmodus. Videos, die im erweiterten Datenschutzmodus abgespielt werden, werden nach Aussage von YouTube nicht zur Personalisierung des Surfens auf YouTube eingesetzt. Anzeigen, die im erweiterten Datenschutzmodus ausgespielt werden, sind ebenfalls nicht personalisiert. Im erweiterten Datenschutzmodus werden keine Cookies gesetzt. Stattdessen werden jedoch sogenannte Local Storage Elemente im Browser des Users gespeichert, die ähnlich wie Cookies personenbezogene Daten beinhalten und zur Wiedererkennung eingesetzt werden können. Details zum erweiterten Datenschutzmodus finden Sie hier:
                  https://support.google.com/youtube/answer/171780.
                </p>
                
                <p>
                  Gegebenenfalls können nach der Aktivierung eines YouTube-Videos weitere Datenverarbeitungsvorgänge ausgelöst werden, auf die wir keinen Einfluss haben.
                </p>
                
                <p>
                  Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
                </p>
                
                <p>
                  Weitere Informationen über Datenschutz bei YouTube finden Sie in deren Datenschutzerklärung unter:
                  https://policies.google.com/privacy?hl=de.
                </p>
                
                <p>
                  Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework" (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: https://www.dataprivacyframework.gov/participant/5780.
                </p>
                
                <p>
                  Quelle: https://www.e-recht24.de
                </p>
              </>
            )}
          </div>
        </div>
        
        <Link to="/?showHabit=true">
          <PixelButton onClick={() => {}}>
            {translate('button.backToHome')}
          </PixelButton>
        </Link>
      </div>
    </div>
  );
};

export default Datenschutz;


import React from 'react';
import { Link } from 'react-router-dom';
import PixelButton from '../components/PixelButton';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';

const Datenschutz: React.FC = () => {
  const { translate, language } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4">
      <div className="absolute top-4 right-4 z-10">
        <LanguageSwitcher />
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
            {language === 'en' ? 'Data Protection' : 'Datenschutzerklärung'}
          </h3>
          
          <div className="font-pixel-text text-base space-y-4 max-h-[60vh] overflow-y-auto pr-2">
            {language === 'en' ? (
              // English Version
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
                
                <h4 className="text-lg font-bold mt-6 mb-2">4. Data Collection on this Website</h4>
                <p>
                  <strong>Cookies</strong><br />
                  Our websites use so-called "cookies". Cookies are small data packages and do not cause any damage to your end device. They are stored either temporarily for the duration of a session (session cookies) or permanently (permanent cookies) on your end device. Session cookies are automatically deleted after your visit. Permanent cookies remain stored on your end device until you delete them yourself or until they are automatically deleted by your web browser.
                </p>
                
                <p>
                  <strong>Cookies and Consent</strong><br />
                  Cookies have various functions. Many cookies are technically necessary because certain website functions would not work without them (e.g., the shopping cart function or the display of videos). Other cookies may be used to evaluate user behavior or for advertising purposes.
                </p>
                
                <p>
                  <strong>Contact Form</strong><br />
                  If you send us inquiries via the contact form, your information from the inquiry form, including the contact details you provided there, will be stored by us for the purpose of processing the inquiry and in the event of follow-up questions. We do not share this data without your consent.
                </p>
                
                <p>
                  <strong>Request by Email, Telephone, or Fax</strong><br />
                  If you contact us by email, telephone, or fax, your inquiry, including all resulting personal data (name, inquiry) will be stored and processed by us for the purpose of processing your request. We do not share this data without your consent.
                </p>
                
                <h4 className="text-lg font-bold mt-6 mb-2">5. Social Media</h4>
                <p>
                  <strong>Social Media Elements with Shariff</strong><br />
                  Elements from social media platforms (e.g., Facebook, X, Instagram, Pinterest, XING, LinkedIn, Tumblr) are used on this website.
                </p>
                
                <p>
                  <strong>Facebook, X, Instagram, Pinterest</strong><br />
                  We use social media elements from these platforms on our website. When activated, these elements establish a direct connection to the respective platform's servers.
                </p>
                
                <h4 className="text-lg font-bold mt-6 mb-2">6. Newsletter</h4>
                <p>
                  <strong>Newsletter Data</strong><br />
                  If you would like to receive the newsletter offered on this website, we need an email address from you, as well as information that allows us to verify that you are the owner of the email address provided and agree to receive the newsletter. Further data is not collected or only on a voluntary basis. We use this data exclusively for sending the requested information and do not pass it on to third parties.
                </p>
                
                <h4 className="text-lg font-bold mt-6 mb-2">7. Plugins and Tools</h4>
                <p>
                  <strong>YouTube with Enhanced Data Protection</strong><br />
                  This website embeds videos from the YouTube website. The operator of the website is Google Ireland Limited ("Google"), Gordon House, Barrow Street, Dublin 4, Ireland.
                </p>
              </>
            ) : (
              // German Version
              <>
                <h4 className="text-lg font-bold mt-6 mb-2">1. Datenschutz auf einen Blick</h4>
                <p>
                  <strong>Allgemeine Hinweise</strong><br />
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                </p>
                
                <p>
                  <strong>Datenerfassung auf dieser Website</strong><br />
                  <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                </p>
                
                <p>
                  <strong>Wie erfassen wir Ihre Daten?</strong><br />
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                  
                  Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                </p>
                
                <p>
                  <strong>Wofür nutzen wir Ihre Daten?</strong><br />
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>
                
                <p>
                  <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                  
                  Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
                </p>
                
                <p>
                  <strong>Analyse-Tools und Tools von Drittanbietern</strong><br />
                  Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.
                  
                  Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.
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
                  Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.
                </p>
                
                <h4 className="text-lg font-bold mt-6 mb-2">4. Datenerfassung auf dieser Website</h4>
                <p>
                  <strong>Cookies</strong><br />
                  Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
                </p>
                
                <p>
                  <strong>Cookies und Einwilligung</strong><br />
                  Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Webseitenfunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies können zur Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet werden.
                </p>
                
                <p>
                  <strong>Kontaktformular</strong><br />
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                
                <p>
                  <strong>Anfrage per E-Mail, Telefon oder Telefax</strong><br />
                  Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                
                <h4 className="text-lg font-bold mt-6 mb-2">5. Soziale Medien</h4>
                <p>
                  <strong>Social-Media-Elemente mit Shariff</strong><br />
                  Auf dieser Website werden Elemente von sozialen Medien verwendet (z. B. Facebook, X, Instagram, Pinterest, XING, LinkedIn, Tumblr).
                </p>
                
                <p>
                  <strong>Facebook, X, Instagram, Pinterest</strong><br />
                  Wir nutzen Social-Media-Elemente dieser Plattformen auf unserer Website. Bei Aktivierung stellen diese Elemente eine direkte Verbindung zu den Servern der jeweiligen Plattform her.
                </p>
                
                <h4 className="text-lg font-bold mt-6 mb-2">6. Newsletter</h4>
                <p>
                  <strong>Newsletterdaten</strong><br />
                  Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Weitere Daten werden nicht bzw. nur auf freiwilliger Basis erhoben. Diese Daten verwenden wir ausschließlich für den Versand der angeforderten Informationen und geben diese nicht an Dritte weiter.
                </p>
                
                <h4 className="text-lg font-bold mt-6 mb-2">7. Plugins und Tools</h4>
                <p>
                  <strong>YouTube mit erweitertem Datenschutz</strong><br />
                  Diese Website bindet Videos der Website YouTube ein. Betreiber der Website ist die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.
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

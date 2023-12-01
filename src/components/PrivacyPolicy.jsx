import styles from '../App.module.css'

const PrivacyPolicy = () => {
  return (
    <>
      <h1>Privacy Policy</h1>
      <div className={styles.privacyText}>
        <p>
          At React Fasting App, we deeply value your privacy and are committed
          to ensuring that your personal information is handled securely and
          transparently. Our Privacy Policy outlines how we collect, use, store,
          and protect your data.
        </p>
        <h3>Information Collection and Usage</h3>
        <p>
          We collect certain personal information when you use our application,
          including but not limited to:
        </p>
        <ul>
          <li>
            <p>
              <b>Email Address:</b> We may collect your email address to
              personalize your fasting plan and communicate important updates or
              information related to our services.
            </p>
          </li>
          <li>
            <p>
              <b>Usage Data:</b> We gather data related to your interaction with
              the app to improve our services and user experience.
            </p>
          </li>
        </ul>
        <h3>Data Security and Protection</h3>
        <p>
          Your privacy and data security are our top priorities. We implement
          robust measures to safeguard your information from unauthorized
          access, disclosure, alteration, or destruction.
        </p>
        <h3>Information Sharing</h3>
        <p>
          We do not sell, trade, or otherwise transfer your personal information
          to outside parties without your consent, except in cases required by
          law or to improve our services.
        </p>
        <h3>Consent</h3>
        <p>
          By using React Fasting App, you consent to our Privacy Policy and
          agree to the collection and use of your information as described
          herein.
        </p>
        <h3>Updates to Our Policy</h3>
        <p>
          We reserve the right to update, modify, or change our Privacy Policy
          at any time. We encourage you to review this page periodically for any
          updates.
        </p>
        <h3>Contact Us</h3>
        <p>
          If you have any questions, concerns, or feedback regarding our Privacy
          Policy or data practices, please don't hesitate to contact us.
        </p>
        <p>
          Kindly review our Privacy Policy for insights on how we utilize your
          information.
        </p>
        <p>Thank you for choosing React Fasting App.</p>
      </div>
    </>
  )
}

export default PrivacyPolicy

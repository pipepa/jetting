import { getBaseUrl } from "@/helpers/main";

const ImpactVerification = () => {
  const baseUrl = getBaseUrl();
  const domain = new URL(baseUrl).hostname.replace(/\./g, '_');
  const impactVerificationValue = process.env[`${domain}_IMPACT`];

  // Check if impactVerificationValue is not empty
  return impactVerificationValue ? (
    <meta name='impact-site-verification' content={impactVerificationValue} />
  ) : null;  // Or render nothing if the value is empty
};

export default ImpactVerification;

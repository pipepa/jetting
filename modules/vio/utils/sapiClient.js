import { sapi } from '@findhotel/sapi';

/**
 * Creates and configures a SAPI client instance
 * @param {string} profileKey - The profile key for authentication
 * @param {Object} options - Additional configuration options
 * @returns {Promise<Object>} Configured SAPI client instance
 */
export async function createSapiClient(profileKey, options = {}) {
  const {
    includeTaxes = true,
    includeHotelFees = true,
    language = 'en',
    currency = 'USD',
    countryCode = 'US',
    deviceType = 'desktop',
    pageSize = 20,
  } = options;

  try {
    const client = await sapi(profileKey, {
      anonymousId: crypto.randomUUID(), // Generates a random UUID for anonymous tracking
      language,
      currency,
      countryCode,
      deviceType,
      pageSize,
      
      initWithAppConfig: {},
      
      algoliaClientOptions: {
        timeouts: {
          connect: 1, // Connection timeout in seconds
          read: 2, // Read timeout in seconds
          write: 30, // Write timeout in seconds
        },
      },

      callbacks: {
        onConfigReceived: (config) => {
          console.log('SAPI Config received:', config);
        }
      },

      getTotalRate: (rate) => {
        let totalRate = rate.base;
        if (includeTaxes) totalRate += rate.taxes;
        if (includeHotelFees) totalRate += rate.hotelFees;
        return totalRate;
      }
    });

    return client;
  } catch (error) {
    console.error('Error creating SAPI client:', error);
    throw error;
  }
} 
module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
    },
  },
});


module.exports = ({ env }) => (
  {
    'cloudinary-media-library': {
      enabled: true,  
      config: {
        cloudName: 'your-cloud-name',
        apiKey: 'your-api-key',
        encryptionKey: '32 chars encryption key'
      },
    },
  }
)
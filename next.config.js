const nextConfig = {
  env: {
    CTN_ENV: process.env.CTN_ENV,
    CTN_DELIVERY_KEY: process.env.CTN_DELIVERY_KEY,
    CTN_SPACE_ID: process.env.CTN_SPACE_ID
  },
  images: {
    domains: ['images.ctfassets.net']
  }
}

module.exports = nextConfig
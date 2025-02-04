const config = {
  env: {
    apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT!,
    prodApiEndpoint: process.env.NEXT_PUBLIC_PROD_API_ENDPOINT!,
    imageKit: {
      publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_KEY!,
      urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
      privateKey: process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY!,
    },
    database: process.env.DATABASE_URL!,
    upstash: {
      redisUrl: process.env.UPSTASH_REDIS_REST_URL!,
      redisToken: process.env.UPSTASH_REDIS_REST_TOKEN!,
      qstashUrl: process.env.QSTASH_URL!,
      qstashToken: process.env.QSTASH_TOKEN!,
    },
    resend: {
      token: process.env.RESEND_TOKEN!,
    },
  },
};

export default config;

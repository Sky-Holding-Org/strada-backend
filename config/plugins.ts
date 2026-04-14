export default ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        s3Options: {
          credentials: {
            accessKeyId: env("AWS_ACCESS_KEY_ID"),
            secretAccessKey: env("AWS_ACCESS_SECRET"),
          },
          region: env("AWS_REGION"),
          params: {
            ACL: "public-read",
            //signedUrlExpires: env("AWS_SIGNED_URL_EXPIRES", 60 * 60),
            Bucket: env("AWS_BUCKET"),
          },
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // "strapi-csv-import-export": {
  //   config: {
  //     authorizedExports: [
  //       "api::compound.compound",
  //       "api::developer.developer",
  //       "api::area.area",
  //       "api::property.property",
  //     ],
  //     authorizedImports: [
  //       "api::compound.compound",
  //       "api::developer.developer",
  //       "api::area.area",
  //       "api::property.property",
  //     ],
  //   },
  // },
  "webp-converter": {
    enabled: true,
    config: {
      mimeTypes: ["image/png", "image/jpeg", "image/jpg"],
      options: {},
    },
  },
  "users-permissions": {
    config: {
      ratelimit: {
        enabled: true,
        interval: { min: 5 },
        max: 5,
      },
    },
  },
});

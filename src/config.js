const dev = {
  STRIPE_KEY: "pk_test_51IQjmfFyFtAAVGe27djDJsYVBQFQN2Zzi5IE2C91BV4UcFwSbLpCY9BW2o7rObnTBF5XtMqOPTmc898ploMmk5bi00POU3TEWX",
  s3: {
    REGION: "us-east-1",
    BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-1q5rkjhnvjkze"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://yeaylbucca.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_i7vhBBwU8",
    APP_CLIENT_ID: "3h790eu2gq0pk2a6kpjv2q3g64",
    IDENTITY_POOL_ID: "us-east-1:6a0faf45-2d8a-42aa-90d4-9b9f6aaed8b9"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_51IQjmfFyFtAAVGe27djDJsYVBQFQN2Zzi5IE2C91BV4UcFwSbLpCY9BW2o7rObnTBF5XtMqOPTmc898ploMmk5bi00POU3TEWX",
  s3: {
    REGION: "us-east-1",
    BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-10w2o8pdi0ijw"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://9ey9jgtl1i.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_q3AAZLM3s",
    APP_CLIENT_ID: "51j75al7rkrbuk06c468bamvs2",
    IDENTITY_POOL_ID: "us-east-1:1b18d122-c8a9-4d3c-a81c-1f650fd7ddd8"
  }
};

const config = {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  // Default to dev if not set
  ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
};

export default config;
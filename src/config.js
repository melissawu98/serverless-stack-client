const config = {
  STRIPE_KEY: "pk_test_51IQjmfFyFtAAVGe27djDJsYVBQFQN2Zzi5IE2C91BV4UcFwSbLpCY9BW2o7rObnTBF5XtMqOPTmc898ploMmk5bi00POU3TEWX",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "notes-app-practice",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://iagx0zy2k6.execute-api.us-east-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_19ChamH7e",
    APP_CLIENT_ID: "15d9qv1iraf5nm632nur7ao6kg",
    IDENTITY_POOL_ID: "us-east-2:92b102f0-db34-4098-8ed7-7acd8fee72cd",
  },
};

export default config;
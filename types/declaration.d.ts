declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GOOGLE_CLIENT_ID: string;
      GOOGLE_PWD: string;
      CALLBACK_URL: string;
      SESSION_SECRET: string;
    }
  }
}

export {};
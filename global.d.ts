declare global {
    namespace NodeJS {
        interface ProcessEnv {
          NODE_ENV: string;
          BOT_API_KEY: string;
        }
      }
}

export {};
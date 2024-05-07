# The-Silk-Roads

3367 lines across 43 Files, along with 69 images

## Things needed:

1. [NodeJS](https://nodejs.org/en)
2. Run `npm install` in your terminal

## Setup

1. Create src/data/data.ts
2. Paste this code:

```ts
export const IP_ADDRESS = "IP_ADDESS";
export const APP_NAME = "App Name";
export const CREATOR_NAME = "Your Name";
export const SERVER_PORT = "Server Port";
export const VUE_PORT = "VueJS Port";
```

3. Replace data with your own.
4. [Create localhost SSL certificate](https://www.section.io/engineering-education/how-to-get-ssl-https-for-localhost/)
5. Go to chrome://flags/#allow-insecure-localhost and enable localhost SSL
6. Run `npm install`.
7. Run `npm run serve` on one terminal

> When VueJS is running, `- Network: https://IP:PORT/` will tell you the IP address and PORT number for Vue

8. Run `ts-node .\src\server\server.ts` on another terminal.
9. Go to `https://YOUR_IP:VUE_PORT/`

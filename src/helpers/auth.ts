/*
    FUTURE IMPLEMENTATIONS: Implement a more secure authentication server. Current implementation serves only for test purposes.
    Currently, this authentication module only runs an authentication through KeyDB, an alternative for Redis, using Redis npm provided tools.
*/

import { createClient } from 'redis';



export default class auth {
    private serverUrl: string;
    private serverAccessKey: string;
    private serverCredential: string;

    /**
     * 
     * @param serverSettings.url
     * @param serverSettings.accessKey
     */
    constructor (serverSettings) {
        const url = serverSettings.url;
        const accessKey = serverSettings.accessKey;
        if((typeof url === 'string' && url.length === 0) || url === null){ 
            throw new Error('');
        }
        this.serverUrl = serverSettings.url;
        this.serverAccessKey = serverSettings.accessKey;
    }

    /**
     * 
     * @param userCredentials.user Username for authenticating user
     * @param userCredentials.password Password for authenticating user
     */
    async authenticateUser (userCredentials) {
        if (userCredentials.user === 'eric' && userCredentials.password === '1234') {
            const client = await createClient()
                .on('error', err => console.log('Redis Client Error', err))
                .connect();

                await client.set('key', 'value');
                const value = await client.get('key');
                await client.disconnect();
        } else {

        }

    }

    authenticateJWT (jwtKey) {

    }
}
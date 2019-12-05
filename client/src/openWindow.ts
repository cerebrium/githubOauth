import { IUser } from './react-app-env';

function openNewAuthWindow(myUrl: string): Promise<IUser> {
    // open the window to the github login page 
    const authWindow: Window = window.open(myUrl, '_blank') as Window;

    // Listen for messages from auth window
    const authPromise: Promise<IUser> = new Promise((resolve, reject) => {
        // add a listener on original window for a message from teh second
        window.addEventListener('message', (msg) => {
            // Reject if not from our domain
            if (!msg.origin.includes(`${window.location.protocol}//${window.location.host}`)) {
                authWindow.close();
                reject('Not Allowed')
            }
            
            // try to resolve the data
            if (msg.data.payload) {
                try {
                    resolve(JSON.parse(msg.data.payload))
                }
                catch(err) {
                    resolve(msg.data.payload)
                }
                finally {
                    authWindow.close();
                }
            } else {
                // no data in message was present
                authWindow.close()
                reject('Unauthorized')
            }
        }, false)
    })
    return authPromise;
}

export default openNewAuthWindow

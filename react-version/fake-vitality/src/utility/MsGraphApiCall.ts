import { graphConfig } from "@src/auth/authConfig";

export async function callMsGraph(accessToken) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    return fetch(graphConfig.graphMeEndpoint, options)
        .then(response => response.json())
        .catch(error => console.log(error));
}

export const getMyPhoto = async (accessToken): Promise<string> => {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    return new Promise(resolve =>
        fetch(graphConfig.graphMyPhotoEndpoint, options)
            .then(response => {
                console.log(response);
                // no photo returns "500 - Internal Server Error"
                if (response.status === 500) {
                    return new ArrayBuffer(0);
                }
                return response.arrayBuffer();
            })
            .then((buffer: ArrayBuffer) => {
                const base64Flag = 'data:image/jpeg;base64,';

                const arrayBufferToBase64 = (buffer: ArrayBuffer): string => {
                    let binary = '';
                    const bytes = [].slice.call(new Uint8Array(buffer));
                    bytes.forEach((b) => binary += String.fromCharCode(b));
                    return window.btoa(binary);
                }
                const imageString = arrayBufferToBase64(buffer);
                return imageString.length > 0 ? base64Flag + imageString : null;
            })
            .catch(error => console.log(error))
    );

}
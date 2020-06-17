import fetch from "node-fetch";

const userInfo = {
    accountId: '4642e64040cdb8b89c310a21a07c7f62',
    vmBoxId: 'b37675a2d7b90d60f0ee5d4175502394'
};

async function callApi(endpoint ,options = {}) {
	const serverUrl = "https://sandbox.2600hz.com:8443/v2";
	const credentials =
        "NDY0MmU2NDA0MGNkYjhiODljMzEwYTIxYTA3YzdmNjI6MjMyNjQxNTY1OTA3NWU3NTAwMGNlY2Q3YmNiZjM3NTY=";
        
        const requestUrl = `${serverUrl}/${endpoint}`;

	options.headers = {
		Authorization: `Basic ${credentials}`,
	};

	const response = await fetch(requestUrl, {headers: options.headers});
	const data = await response.json();
    console.log(data.data);
	return data.data;
}

const api = {
	voicemails: {
		showSchemas() {
			const requestUrl = `/schemas`;
			console.log(callApi(requestUrl));
		},
		listAllMessages() {
			const requestUrl = `/accounts/${userInfo.accountId}/vmboxes/${userInfo.vmBoxId}/messages`;
			return callApi(requestUrl).then(data => data);
		},
    }
};

export default api;

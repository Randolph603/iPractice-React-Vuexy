export const msalConfig = {
  auth: {
    clientId: '4f345141-18fe-40f7-8517-7fde59884db6',
    authority: 'https://login.microsoftonline.com/f817034e-611f-4d4f-b067-5a8c47f462cf',
    postLogoutRedirectUri: window.location.origin,
    redirectUri: window.location.origin,
  },
  cache: {
    cacheLocation: ('localStorage'),
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
}

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ['User.Read', 'openid', 'profile', 'offline_access', 'User.Read.All', 'mail.send'],
}

// Add scopes here for access token to be used at Microsoft Graph API endpoints.
export const tokenRequest = {
  scopes: ['User.Read', 'Mail.Read'],
}

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
  graphMeEndpoint: 'https://graph.microsoft.com/v1.0/me',
  graphMyPhotoEndpoint: 'https://graph.microsoft.com/v1.0/me/photo/$value',
}

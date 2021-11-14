import BreadCrumbs from '@src/components/breadcrumbs'
import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Row, Col } from 'reactstrap'
import { Home, Link as LinkIcon } from 'react-feather'
import { Link } from 'react-router-dom'
import electronAzure from 'src/assets/images/code/electron-azure.jpg'

const Electron = () => {
  return (
    <>
      <BreadCrumbs breadCrumbTitle={(<Home size={20} />)} breadCrumbParent='Fake Vitality' breadCrumbActive={(<Link to='/electron'>Electron JS</Link>)} />

      <Card>
        <CardHeader>
          <CardTitle><h4>🚀 Electron.js </h4></CardTitle>
        </CardHeader>
        <CardBody>
          <CardText><CardLink href='https://www.electronjs.org/' target="_blank">Electron.JS</CardLink>{' '}
            is a wrapper to build  cross-platform desktop apps with JavaScript, HTML, and CSS. It uses web technologies wrapped around Node.js to come up with web technologies.
            With help of Electron.JS, it would be easy to re-use the web page or lib from React, Angular, Vue or even Blazor. In another word, it means one time develop and deploy to
            Windows, Mac, Linux at one publish. Electron is also the main GUI framework behind several open-source projects including Atom, GitHub Desktop, Light Table, Visual Studio Code, Evernote,
            and WordPress Desktop. VS code is my favourite in terms of performance and daily release.
          </CardText>
          <hr />
          <Row>
            <Col md='4' sm='12'>
              <CardTitle><h4>Keypoints</h4></CardTitle>
              <CardText>Developed By: <CardLink href='https://github.com/' target="_blank">GitHub (Microsoft)</CardLink></CardText>
              <CardText>Initial Release: July 2013</CardText>
              <CardText>Apps : {'  '}
                <CardLink href='https://atom.io/' target="_blank">Atom</CardLink>
                <CardLink href='https://desktop.github.com/' target="_blank">GitHub Desktop</CardLink>
                <CardLink href='https://code.visualstudio.com/' target="_blank">Visual Studio Code</CardLink> ...
              </CardText>
            </Col>
            <Col md='4' sm='12'>
              <CardTitle tag='h4'>Sample Project</CardTitle>
              <CardText>
                Electron + JS support MSAL 2.0 (<CardLink href='https://vulcansteel.visualstudio.com/Vitality/_git/Exp-Randolph?path=/electron-version/ElectronJsApp' target="_blank">Link <LinkIcon size={16} /></CardLink>)
              </CardText>
              <CardText>
                Electron + TS support MSAL 2.0 (<CardLink href='https://vulcansteel.visualstudio.com/Vitality/_git/Exp-Randolph?path=/electron-version/ElectronTestApp' target="_blank">Link <LinkIcon size={16} /></CardLink>)
              </CardText>
              <CardText>
                Fack Vitality (Electron + React) source code (<CardLink href='https://vulcansteel.visualstudio.com/Vitality/_git/Exp-Randolph?path=/react-version/fack-vitality' target="_blank">Link <LinkIcon size={16} /></CardLink>)
              </CardText>
            </Col>
            <Col md='4' sm='12'>
              <CardTitle tag='h4'>Fack Vitality (Electron + React)</CardTitle>
              <CardText>
                Fake Vitality Windows Installer (<CardLink href='https://vulcansteel.visualstudio.com/119a35a9-98e3-43fd-a076-09c3e3e93aaf/_apis/git/repositories/94c6a8a8-d6b6-48df-81b4-238c85e6649a/items?path=/installer/Fake%20Vitality%20Setup%200.1.0.exe&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=main&resolveLfs=true&%24format=octetStream&api-version=5.0&download=true' target="_blank">Link <LinkIcon size={16} /></CardLink>)
              </CardText>
              <CardText>
                Fake Vitality Mac Installer (<CardLink href='https://vulcansteel.visualstudio.com/119a35a9-98e3-43fd-a076-09c3e3e93aaf/_apis/git/repositories/94c6a8a8-d6b6-48df-81b4-238c85e6649a/items?path=/installer/Fake%20Vitality-0.1.0.dmg&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=main&resolveLfs=true&%24format=octetStream&api-version=5.0&download=true' target="_blank">Link <LinkIcon size={16} /></CardLink>)
              </CardText>
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle tag='h4'>🔒 Authentication MSAL</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText> According to Microsoft tutorial{' '}
            <CardLink href='https://docs.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-nodejs-desktop' target="_blank">
              Electron desktop using MSAL
            </CardLink>, it is not complex to implement Azure Active Directory (AAD) using below npm packages:
          </CardText>
          <CardText> "@azure/msal-node" </CardText>
          <CardText>If we keep using "@azure/msal-browser", will get a CORS error, which means the Electron.js use node.js for authentication. All website setting such as cookie and session will no longer suit for desktop app.</CardText>
          <CardText>
            <br />Step 1, add public client to AAD
            <br /><img className='img-fluid' src={electronAzure} alt='' />
          </CardText>
          <CardText>
            <br />Step 2, based on tutorial, use Proof Key for Code Exchange (PKCE) to request auth code and get auth token.
            <pre>
              <code className='language-jsx'>
                {`
 const { verifier, challenge } = await this.cryptoProvider.generatePkceCodes();
 this.pkceCodes.verifier = verifier;
 this.pkceCodes.challenge = challenge;

 const authCodeUrlParams = {
     ...this.authCodeUrlParams,
     scopes: tokenRequest.scopes,
     codeChallenge: this.pkceCodes.challenge, // PKCE Code Challenge
     codeChallengeMethod: this.pkceCodes.challengeMethod // PKCE Code Challenge Method
 };

 const authCodeUrl = await this.clientApplication.getAuthCodeUrl(authCodeUrlParams);

 protocol.registerFileProtocol(redirectUrl.split(":")[0], (req, callback) => {
     const requestUrl = url.parse(req.url, true);
     callback(path.normalize(\`\${__dirname}/\${requestUrl.path}\`));
 });

 const authCode = await this.listenForAuthCode(authCodeUrl, authWindow);

 const authResponse = await this.clientApplication.acquireTokenByCode({
     ...this.authCodeRequest,
     scopes: tokenRequest.scopes,
     code: authCode,
     codeVerifier: this.pkceCodes.verifier // PKCE Code Verifier
 });

 return authResponse;
`}
              </code>
            </pre>
          </CardText>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle tag='h4'>🚦 Router</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>
            'react-router-dom' is still avalible, but need to use 'HashRouter' instead of 'BrowserRouter' due to Desktop app is file based.
          </CardText>

          <pre>
            <code className='language-jsx'>
              {`
                  // use BrowserRouter for web application and HashRouter for the Electron.
                  const BaseRouter = props => {
                    const { children, ...rest } = props;
                    const userAgent = navigator.userAgent.toLowerCase();
                    const isElectron = userAgent.indexOf(' electron/') !== -1;
                    return isElectron
                      ? (<HashRouter {...rest}>{children}</HashRouter>)
                      : (<BrowserRouter {...rest}>{children}</BrowserRouter>)
                  };
              `}
            </code>
          </pre>
        </CardBody>
      </Card>
    </>
  )
}

export default Electron

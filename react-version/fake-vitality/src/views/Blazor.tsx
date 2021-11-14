import BreadCrumbs from '@src/components/breadcrumbs'
import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink, Col, Row } from 'reactstrap'
import { Home, Star, Link as LinkIcon } from 'react-feather'
import { Link } from 'react-router-dom'
import Rating from 'react-rating'
import blazorPackage from 'src/assets/images/code/blazor-packages.jpg'
import blazorBug from 'src/assets/images/code/blazor-bug.jpg'



const Blazor = () => {
  return (
    <>
      <BreadCrumbs breadCrumbTitle={(<Home size={20} />)} breadCrumbParent='Fake Vitality' breadCrumbActive={(<Link to='/blazor'>Blazor</Link>)} />

      <Card>
        <CardHeader>
          <CardTitle tag="h4">🚀 Blazor Webassembly</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>
            Blazor Webassembly is quite good new web framework based on existing web techonlogies. I feel quite confotable with it's C# and Razor syntax in Javascript.
            For a single-page application, reusing dotnet core lib making a quite good experience. For example with help of dotnet build-in colloection lib, math lib
            and datetime lib, there is no need to inject moment.js, lodash.js. Inject attribute make SPA a better conciption of low coupling. Component based design
            could keep all logic inside each cs file. MSAL and Electron for Blazor is also nick to use.
          </CardText>
          <CardText>
            Blazor WEbassembly is easy to start, but when continue integrate the project, it is hard to directly see the page change when hit save. we need to
            re-compile the project and refresh the page. Also the IDE of VS and Rider render the page with different result. Microsoft says, it will be improved in
            the next generation of dotnet core and VS.
          </CardText>
          <hr />
          <Row>
            <Col md='5' sm='12'>
              <CardTitle><h4>Keypoints</h4></CardTitle>
              <CardText>Defacto standard for building applications : <CardLink href='https://docs.microsoft.com/en-us/dotnet/core/tools/' target="_blank">.NET Core CLI</CardLink></CardText>
              <CardText>Developed By: <CardLink href='https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor' target="_blank">Microsoft</CardLink></CardText>
              <CardText>Initial Release: Feburary 2018</CardText>
              <CardText>Data Binding: Two-way/One-way</CardText>
              <CardText>DOM: Virtual</CardText>
            </Col>
            <Col md='3' sm='12'>
            <CardTitle tag='h4'>Personal Rating</CardTitle>
              <h6>Easy to start: <Rating
                emptySymbol={<Star size={16} fill='#babfc7' stroke='#babfc7' />}
                fullSymbol={<Star size={16} fill='#ff9f43' stroke='#ff9f43' />}
                readonly
                initialRating={5}
                direction={'ltr'}
              /> 5 Stars</h6>
              <h6>Community: <Rating
                emptySymbol={<Star size={16} fill='#babfc7' stroke='#babfc7' />}
                fullSymbol={<Star size={16} fill='#ff9f43' stroke='#ff9f43' />}
                readonly
                initialRating={5}
                direction={'ltr'}
              /> 5 Stars</h6>
              <h6>Popularity: <Rating
                emptySymbol={<Star size={16} fill='#babfc7' stroke='#babfc7' />}
                fullSymbol={<Star size={16} fill='#ff9f43' stroke='#ff9f43' />}
                readonly
                initialRating={3}
                direction={'ltr'}
              /> 3 Stars</h6>
              <h6>Performance: <Rating
                emptySymbol={<Star size={16} fill='#babfc7' stroke='#babfc7' />}
                fullSymbol={<Star size={16} fill='#ff9f43' stroke='#ff9f43' />}
                readonly
                initialRating={3}
                direction={'ltr'}
              /> 3 Stars</h6>
              <h6>Overall: <Rating
                emptySymbol={<Star size={16} fill='#babfc7' stroke='#babfc7' />}
                fullSymbol={<Star size={16} fill='#ff9f43' stroke='#ff9f43' />}
                readonly
                initialRating={4}
                direction={'ltr'}
              /> 4 Stars</h6>
            </Col>
            <Col md='4' sm='12'>
              <CardTitle tag='h4'>Sample Project</CardTitle>
              <CardText>
                Blazor WASM project support MSAL and Graph (<CardLink href='https://vulcansteel.visualstudio.com/Vitality/_git/Exp-Randolph?path=/blazor-version/BlazorWebAssembly' target="_blank">Link <LinkIcon size={16} /></CardLink>)
              </CardText>
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle tag='h4'>🔒 Authentication MSAL and Graph</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>
            It is quite simple to use MSAL and MS Graph.
            <br />Step 1, install below two packages.
          </CardText>
          <img className='img-fluid' src={blazorPackage} alt='' />
          <CardText>
            <br />Step 2, register MSAL and Graph into builder.
          </CardText>
          <pre>
            <code className='language-cs'>
              {`
var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");

// Host address register
builder.Services.AddScoped(
    sp => new HttpClient {BaseAddress = new Uri(builder.HostEnvironment.BaseAddress)});

// microsoft Graph register
builder.Services.AddMicrosoftGraphClient("https://graph.microsoft.com/User.Read");

// Integrates authentication with the MSAL library
builder.Services.AddMsalAuthentication(options =>
{
    builder.Configuration.Bind("AzureAd", options.ProviderOptions.Authentication);
    options.ProviderOptions.DefaultAccessTokenScopes.Add("https://graph.microsoft.com/User.Read");
});

await builder.Build().RunAsync();
`}
            </code>
          </pre>
          <CardText>
            <br />Step 3, Inject and direct use it in side javascript.
          </CardText>
          <pre>
            <code className='language-cs'>
              {`
 public class UserClaimsBase: ComponentBase
 {
     // AuthenticationStateProvider service provides the current user's ClaimsPrincipal data.
     [Inject]
     private AuthenticationStateProvider AuthenticationStateProvider { get; set; }
     ...
 }
`}
            </code>
          </pre>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle><h4>🚦 Router </h4></CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>
            Blazor WebAssembly use its build-in component to implement router, directly use component like NavLink and more.
          </CardText>
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle><h4>☕ Render bug </h4></CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>
            I was tring to use Rider and Visual Studio 2019 to run my simple project and get different page. It looks we need latest IDE and still need to wait IDE stable.
          </CardText>
          <img className='img-fluid' src={blazorBug} alt='' />
        </CardBody>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle><h4>🍳 Theme & UI Framework </h4></CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>
            <CardLink href='https://mudblazor.com/' target="_blank">MudBlazor</CardLink> looks quite good for the components or UI to reuse.
          </CardText>
          <CardText>
            <CardLink href='https://getbootstrap.com/' target="_blank">Bootstrap</CardLink>, <CardLink href='https://mui.com/' target="_blank">Material UI</CardLink> coudl also inject into Blazor due to it sill support HTML and Javascript.
            But we might to rebuild for Vulcan version dut to its short community.
          </CardText>
        </CardBody>
      </Card>
    </>
  )
}

export default Blazor

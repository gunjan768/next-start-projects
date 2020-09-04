const next = require("next");
const http = require("http");
const url = require("url");
const path = require("path");

const port = process.env.PORT || 3000;

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const handle = app.getRequestHandler();

// We need to tell the Next server how to handle the service worker request. When we will register the SW ( in componentDidMount() of index.js
// page ( we are using the SW inbuilt in Next )), Next would be unaware of the SW. To resolve this problem we will create our own server and
// combine it with the Next sever. Remember that SW might not work in development mode so switch to production mode to make SW worker correctly.
app.prepare().then(() => 
{
	http.createServer((req, res) => 
	{
		// Parse request url to get its pathname.
		const parsedUrl = url.parse(req.url, true);
		const { pathname } = parsedUrl;

		// If a service worker requested, serve it as a static file.
		if(pathname === "/service-worker.js") 
		{
			const filePath = path.join(__dirname, ".next", pathname);
			app.serveStatic(req, res, filePath);
		} 
		else 
		{
			// Otherwise, let Next take care of it.
			handle(req, res, parsedUrl);
		}

	}).listen(port, () => console.log(`Listening on PORT ${port}`));
});
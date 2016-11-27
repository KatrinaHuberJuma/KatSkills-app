$readme

Sat, Nov 26, 2:30
	running, with Max's server patch

in client:
	npm install angular-route
	npm install angular
	npm install http-server -g     

failed to load
	seeking: file:///Users/val/ca/OneDriveBusiness/LiveAPICreator/api-projects/manual/client/lib/angular/angular.js
	for:		    /Users/val/ca/OneDriveBusiness/LiveAPICreator/api-projects/manual/client/app/lib/angular

to avoid cross-blah (Chrome)
	http-server /Users/val/ca/OneDriveBusiness/LiveAPICreator/api-projects/manual/app
		http-server 
	browser: http://127.0.0.1:8081, http://10.0.1.26:8081

It only goes to login 'sometimes'

MH suggestion
	Learned something interesting about angular … not useful, but interesting,
in your app.js comment out this line:
$httpProvider.interceptors.push('AttachTokens');
and make sure you see a line like this nearby (otherwise add it):
delete $httpProvider.defaults.headers.common['X-Requested-With'];

still get...

services/services.js: Custs.getAll alive
:8081/#/custs:1 XMLHttpRequest cannot load http://localhost:8080/rest/default/demo/v1/demo:customer. Request header field Access-Control-Allow-Headers is not allowed by Access-Control-Allow-Headers in preflight response.

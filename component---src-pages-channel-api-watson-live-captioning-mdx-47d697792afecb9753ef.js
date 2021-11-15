"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[3953],{14241:function(t,e,n){n.r(e),n.d(e,{_frontmatter:function(){return o},default:function(){return m}});var a=n(63366),r=(n(67294),n(64983)),l=n(55602),i=["components"],o={},d={_frontmatter:o},p=l.Z;function m(t){var e=t.components,n=(0,a.Z)(t,i);return(0,r.kt)(p,Object.assign({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,"Check if Watson Live Captioning is enabled"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET https://api.video.ibm.com/channels/{channelId}/settings/watson-live-captioning.json\n")),(0,r.kt)("h3",null,"Success response"),(0,r.kt)("p",null,"Upon success a response with HTTP status “200 OK” is returned with the following key-value pairs."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"KEY"),(0,r.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"is_enabled")),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Watson Live Captioning is enabled")))),(0,r.kt)("p",null,"Example of a success response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "is_enabled": true,\n}\n')),(0,r.kt)("h3",null,"Error responses"),(0,r.kt)("p",null,"Possible error responses:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,r.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,r.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401 Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"invalid_token")),(0,r.kt)("td",{parentName:"tr",align:null},"The provided access token is missing, revoked, expired or malformed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"402 Payment required"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"payment_required")),(0,r.kt)("td",{parentName:"tr",align:null},"The required benefit is missing from the channel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"403 Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lack_of_ownership")),(0,r.kt)("td",{parentName:"tr",align:null},"The provided access token could not access the given channel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"not_found")),(0,r.kt)("td",{parentName:"tr",align:null},"Channel was not found")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"405 Method Not Allowed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"method_not_allowed")),(0,r.kt)("td",{parentName:"tr",align:null},"The given HTTP method is not allowed for the endpoint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"429 Too Many Requests"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"too_many_requests")),(0,r.kt)("td",{parentName:"tr",align:null},"Rate limit exceeded (",(0,r.kt)("a",{parentName:"td",href:"/video-streaming-developer-docs/api-basics-rate-limits"},"Read more"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"500 Server error"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))),(0,r.kt)("h2",null,"Turn on/off Watson Live Captioning"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PUT https://api.video.ibm.com/channels/{channelId}/settings/watson-live-captioning.json\n")),(0,r.kt)("h3",null,"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"KEY"),(0,r.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:null},"IMPORTANCE"),(0,r.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"enable")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,r.kt)("td",{parentName:"tr",align:null},"true/false")))),(0,r.kt)("p",null,"The Content-Type of the request should be ",(0,r.kt)("strong",{parentName:"p"},"application/x-www-form-urlencoded"),"."),(0,r.kt)("p",null,"Example of the request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"POST /channels/1234/settings/watson-live-captioning.json HTTP/1.1\nHost: api.video.ibm.com\nAuthorization: Bearer 3c2573673b782f6544405a22636f3d5d3b6f3950\nContent-Type: application/x-www-form-urlencoded\n\nenable=true\n")),(0,r.kt)("h3",null,"Success response"),(0,r.kt)("p",null,"Upon success the response body is empty with an HTTP Status code of 204."),(0,r.kt)("h3",null,"Error responses"),(0,r.kt)("p",null,"Possible error responses:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,r.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,r.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"400 Bad request"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"form_error")),(0,r.kt)("td",{parentName:"tr",align:null},"The provided request body is invalid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401 Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"invalid_token")),(0,r.kt)("td",{parentName:"tr",align:null},"The provided access token is missing, revoked, expired or malformed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"402 Payment required"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"payment_required")),(0,r.kt)("td",{parentName:"tr",align:null},"The required benefit is missing from the channel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"403 Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lack_of_ownership")),(0,r.kt)("td",{parentName:"tr",align:null},"The provided access token could not access the given channel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"not_found")),(0,r.kt)("td",{parentName:"tr",align:null},"Channel was not found")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"405 Method Not Allowed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"method_not_allowed")),(0,r.kt)("td",{parentName:"tr",align:null},"The given HTTP method is not allowed for the endpoint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"429 Too Many Requests"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"too_many_requests")),(0,r.kt)("td",{parentName:"tr",align:null},"Rate limit exceeded (",(0,r.kt)("a",{parentName:"td",href:"/video-streaming-developer-docs/api-basics-rate-limits"},"Read more"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"500 Server error"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-channel-api-watson-live-captioning-mdx-47d697792afecb9753ef.js.map
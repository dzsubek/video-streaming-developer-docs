"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[8835],{12969:function(t,e,n){n.r(e),n.d(e,{_frontmatter:function(){return o},default:function(){return k}});var a=n(63366),r=(n(67294),n(64983)),l=n(55602),i=["components"],o={},p=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)}},s=p("InlineNotification"),u=p("Title"),d={_frontmatter:o},h=l.Z;function k(t){var e=t.components,n=(0,a.Z)(t,i);return(0,r.kt)(h,Object.assign({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(s,{kind:"warning",mdxType:"InlineNotification"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Deprecation Warning:")," This API supported until 03/01/2022. Please use new version of the ",(0,r.kt)("a",{parentName:"p",href:"/video-streaming-developer-docs/viewer-authentication-api-v2-getting-started"},"Viewer Authentication"),".")),(0,r.kt)("h2",null,"Channel level"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PUT https://api.video.ibm.com/channels/CHANNEL_ID/locks/hash/advanced.json\n")),(0,r.kt)(u,{mdxType:"Title"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:null},"IMPORTANCE"),(0,r.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,r.kt)("td",{parentName:"tr",align:null},"URL of the authentication flow entry point")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"secret")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,r.kt)("td",{parentName:"tr",align:null},"Secret key")))),(0,r.kt)(u,{mdxType:"Title"},"Response"),(0,r.kt)("p",null,"HTTP response codes returned when the action is successful:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,r.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"201 Created"),(0,r.kt)("td",{parentName:"tr",align:null},"Viewer authentication has been set up on the channel with the new hash.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"204 No Content"),(0,r.kt)("td",{parentName:"tr",align:null},"Viewer authentication has been set up on the channel by updating the existing hash with the new one.")))),(0,r.kt)("p",null,"Specific error codes returned when the action failed:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE"),(0,r.kt)("th",{parentName:"tr",align:null},"CODE DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"invalid_request")),(0,r.kt)("td",{parentName:"tr",align:null},"400 Bad Request"),(0,r.kt)("td",{parentName:"tr",align:null},"One or more required parameters are missing (secret, url).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"invalid_type")),(0,r.kt)("td",{parentName:"tr",align:null},"400 Bad Request"),(0,r.kt)("td",{parentName:"tr",align:null},"The URL is invalid.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lack_of_ownership")),(0,r.kt)("td",{parentName:"tr",align:null},"403 Forbidden"),(0,r.kt)("td",{parentName:"tr",align:null},"The api user is not allowed to manage the given channel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"not_found")),(0,r.kt)("td",{parentName:"tr",align:null},"404 Not found"),(0,r.kt)("td",{parentName:"tr",align:null},"Channel not found")))),(0,r.kt)("h2",null,"Video level"),(0,r.kt)("p",null,"By default videos inherit the authentication settings from channels but it can be overridden on a video by video basis."),(0,r.kt)("h3",null,"Set up viewer authentication for a video"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PUT https://api.video.ibm.com/videos/VIDEO_ID/locks/hash.json\n")),(0,r.kt)(u,{mdxType:"Title"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:null},"IMPORTANCE"),(0,r.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"url")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,r.kt)("td",{parentName:"tr",align:null},"URL of the authentication flow entry point")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"secret")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,r.kt)("td",{parentName:"tr",align:null},"Secret key")))),(0,r.kt)(u,{mdxType:"Title"},"Response"),(0,r.kt)("p",null,"HTTP response code returned when the action is successful:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,r.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"204 No content"),(0,r.kt)("td",{parentName:"tr",align:null},"Viewer authentication has been set up on the video")))),(0,r.kt)("h2",null,"Implementing the authentication response"),(0,r.kt)("p",null,"If the authentication was successful, your service must pass an authentication response to the player. The authentication response must be a JSON encoded array which contains the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"list of parameters that have been hashed"),(0,r.kt)("li",{parentName:"ul"},"the MD5 hash of the string that has been created by concatenating the parameters and the shared secret key with pipe ”|” characters")),(0,r.kt)("p",null,"Example script in PHP for creating the authentication response when the authentication was successful"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// We create the array of parameters.\n// The parameters can be anything.\n$userData = [\n    "user" => $_SESSION["user"],\n    "someString" => "someValue"\n];\n\n// We create the hash by hashing\n// the parameters array contents and\n// the secret key\n// concatenated together with a pipe character.\n$hash = md5(implode(\'|\', $userData) . \'|\' . $SHARED_SECRET_KEY);\n\n// We put the array of parameters and the hash into the response.\n$response = array_chunk(\n    array_merge($userData, ["hash" => $hash]),\n    1,\n    true\n);\n\n// We encode the response into JSON format.\n$json = json_encode($response);\n')),(0,r.kt)(s,{kind:"info",mdxType:"InlineNotification"},"The order of the parameters should match their order in the array when creating the hash."),(0,r.kt)("p",null,"To pass the response to the player your service must redirect the page to the IBM Video Streaming return URL with passing the response in JSON format as a get parameter. You can test the API response at the ",(0,r.kt)("a",{parentName:"p",href:"/video-streaming-developer-docs/viewer-authentication-api-hash-authentication-test"},"Hash Authentication Test")," page."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://video.ibm.com/embed/hashlock/pass?hash=RESPONSE_IN_JSON_FORMAT\n")),(0,r.kt)("h2",null,"Managing viewer authentication settings"),(0,r.kt)("h3",null,"Getting channel viewer authentication settings"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET https://api.video.ibm.com/channels/CHANNEL_ID/locks/hash.json\n")),(0,r.kt)("h4",null,"Parameters"),(0,r.kt)("p",null,"This request has no parameters."),(0,r.kt)("h4",null,"Response"),(0,r.kt)("p",null,"Upon success, key-value pairs are returned under a “hashlock” key."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "hashlock": {\n    "type": "advanced",\n    "url": "https://yourdomain.com/auth/123",\n    "message": null,\n    "button_caption": null,\n    "popup_width": "0",\n    "popup_height": "0"\n  }\n}\n')),(0,r.kt)("p",null,"Specific error codes returned when the action failed:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,r.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lack_of_ownership")),(0,r.kt)("td",{parentName:"tr",align:null},"403 Forbidden"),(0,r.kt)("td",{parentName:"tr",align:null},"The API user is not allowed to manage the given channel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"not_found")),(0,r.kt)("td",{parentName:"tr",align:null},"404 Not found"),(0,r.kt)("td",{parentName:"tr",align:null},"Channel not found")))),(0,r.kt)("h3",null,"Removing channel viewer authentication"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DELETE  https://api.video.ibm.com/channels/CHANNEL_ID/locks/hash.json\n")),(0,r.kt)("h4",null,"Parameters"),(0,r.kt)("p",null,"This request has no parameters."),(0,r.kt)("h4",null,"Response"),(0,r.kt)("p",null,"Upon success the 200 OK HTTP response code is returned."),(0,r.kt)("p",null,"Specific error codes returned when the action failed:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,r.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lack_of_ownership")),(0,r.kt)("td",{parentName:"tr",align:null},"403 Forbidden"),(0,r.kt)("td",{parentName:"tr",align:null},"The api user is not allowed to manage the given channel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"not_found")),(0,r.kt)("td",{parentName:"tr",align:null},"404 Not found"),(0,r.kt)("td",{parentName:"tr",align:null},"Channel not found")))),(0,r.kt)("h3",null,"Getting video viewer authentication settings"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET https://api.video.ibm.com/videos/VIDEO_ID/locks/hash.json\n")),(0,r.kt)("h4",null,"Parameters"),(0,r.kt)("p",null,"This request has no parameters."),(0,r.kt)("h4",null,"Response"),(0,r.kt)("p",null,"Upon success, key-value pairs are returned under a “hashlock” key."),(0,r.kt)(u,{mdxType:"Title"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "hashlock": {\n    "url": "https://auth.yourdomain.com/video-authentication",\n    "secret": "TOP_SECRET_KEY"\n  }\n}\n')),(0,r.kt)("p",null,"Specific error codes returned when the action failed:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,r.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lack_of_ownership")),(0,r.kt)("td",{parentName:"tr",align:null},"403 Forbidden"),(0,r.kt)("td",{parentName:"tr",align:null},"The api user is not allowed to manage the given channel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"not_found")),(0,r.kt)("td",{parentName:"tr",align:null},"404 Not found"),(0,r.kt)("td",{parentName:"tr",align:null},"Video or specific authentication settings not found")))),(0,r.kt)("h3",null,"Removing specific video viewer authentication settings"),(0,r.kt)("p",null,"If you remove specific settings then video will inherit the authentication settings from the channel."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DELETE  https://api.video.ibm.com/videos/VIDEO_ID/locks/hash.json\n")),(0,r.kt)("h4",null,"Parameters"),(0,r.kt)("p",null,"This request has no parameters."),(0,r.kt)("h4",null,"Response"),(0,r.kt)("p",null,"Upon success the 204 No Content HTTP response code is returned."),(0,r.kt)("p",null,"Specific error codes returned when the action failed:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,r.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lack_of_ownership")),(0,r.kt)("td",{parentName:"tr",align:null},"403 Forbidden"),(0,r.kt)("td",{parentName:"tr",align:null},"The api user is not allowed to manage the given channel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"not_found")),(0,r.kt)("td",{parentName:"tr",align:null},"404 Not found"),(0,r.kt)("td",{parentName:"tr",align:null},"Video or specific authentication settings not foun")))))}k.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-viewer-authentication-api-implementing-viewer-authentication-mdx-c88deee7f26de0c4d9bf.js.map
"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[3524],{75704:function(t,e,n){n.r(e),n.d(e,{_frontmatter:function(){return o},default:function(){return s}});var a=n(63366),l=(n(67294),n(64983)),r=n(55602),i=["components"],o={},p={_frontmatter:o},d=r.Z;function s(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)(d,Object.assign({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"IMPORTANT:")," ",(0,l.kt)("em",{parentName:"p"},"Please note that this upload method is deprecated and will be discontinued later this year. We encourage yout to switch over to our new upload method found here: ",(0,l.kt)("a",{parentName:"em",href:"https://developers.video.ibm.com/channel-api-video-management/upload-videos-new"},"https://developers.video.ibm.com/channel-api-video-management/upload-videos-new"))),(0,l.kt)("p",null,"Videos can be uploaded by FTP. To upload a file you must do the following steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Initiate an upload process by an API call. In the response you can find the details needed to connect through FTP."),(0,l.kt)("li",{parentName:"ol"},"Upload the video."),(0,l.kt)("li",{parentName:"ol"},"When the upload is finished, send a “file in place” signal, which tells the IBM server that it can start to process the file."),(0,l.kt)("li",{parentName:"ol"},"Call the API to check the status of processing the video.")),(0,l.kt)("h2",null,"Initialize an upload"),(0,l.kt)("p",null,"Initiate the upload process."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"POST https://api.video.ibm.com/channels/{channel_id}/uploads.json?type=videoupload-ftp\n")),(0,l.kt)("h3",null,"Parameters"),(0,l.kt)("p",null,"The parameters for the POST request:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"IMPORTANCE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"title")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"OPTIONAL"),(0,l.kt)("td",{parentName:"tr",align:null},"Video title")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"description")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"OPTIONAL"),(0,l.kt)("td",{parentName:"tr",align:null},"Video description")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"protect")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"OPTIONAL"),(0,l.kt)("td",{parentName:"tr",align:null},"Video protection level. Supported values: ",(0,l.kt)("inlineCode",{parentName:"td"},"public"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"private"))))),(0,l.kt)("h3",null,"Success response"),(0,l.kt)("p",null,"Upon success a response with HTTP status “200 OK” is returned with the key-value pairs containing the details of the FTP access."),(0,l.kt)("p",null,"Example of a success response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "protocol": "ftp",\n  "host": "red44.ustream.tv",\n  "port": 21,\n  "path": "/1_12345_12345678901234",\n  "user": "1_12345_1234567890",\n  "password": "ftppw",\n  "videoId": "52177361",\n  "url": "ftp://1_1234_1234567890:ftppw@red44.ustream.tv/1_12345_12345678901234"\n}\n')),(0,l.kt)("h3",null,"Error responses"),(0,l.kt)("p",null,"Possible error responses:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"400 Bad Request"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"protect_level_invalid")),(0,l.kt)("td",{parentName:"tr",align:null},"Invalid protect level has been sent")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401 Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"invalid_token")),(0,l.kt)("td",{parentName:"tr",align:null},"The provided access token is missing, revoked, expired or malformed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403 Forbidden"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lack_of_ownership")),(0,l.kt)("td",{parentName:"tr",align:null},"The API user is not allowed to manage the given channel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"not_found")),(0,l.kt)("td",{parentName:"tr",align:null},"Channel was not found")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"429 Too Many Requests"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"too_many_requests")),(0,l.kt)("td",{parentName:"tr",align:null},"Rate limit exceeded (",(0,l.kt)("a",{parentName:"td",href:"/video-streaming-developer-docs/api-basics-rate-limits"},"Read more"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))),(0,l.kt)("h2",null,"Upload the video file"),(0,l.kt)("p",null,"Use the credentials you received in the response when you initialized the process to upload your video file to IBM servers. Once you log in to the FTP server, you should put your file to the root, under a name that matches with the ",(0,l.kt)("inlineCode",{parentName:"p"},"path")," value of the response, followed by the extension."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"url")," part of the response makes it easier to transfer files, with a single FTP command. For example, if you have a file called ",(0,l.kt)("inlineCode",{parentName:"p"},"test.mov"),", you can use the following FTP command to upload it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ftp -u\nftp://1_1234_1234567890:ftppw@red44.ustream.tv/1_12345_12345678901234.mov\ntest.mov\n")),(0,l.kt)("p",null,"Or using the cURL command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"curl \\\n  ftp://1_1234_1234567890:ftppw@sjc03-vod-upload02.services.video.ibm.com/1_12345_12345678901234 \\\n  -v -T test.mov\n")),(0,l.kt)("p",null,"Supported file extensions are: mp4, mov, flv."),(0,l.kt)("p",null,"Don’t forget to set your FTP client to binary file transfer mode, before uploading the video file."),(0,l.kt)("h2",null,"Send “file in place” signal"),(0,l.kt)("p",null,"A “file in place” signal tells to our server that it can start to process the file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"PUT https://api.video.ibm.com/channels/{channel_id}/uploads/{video_id}.json\n")),(0,l.kt)("h3",null,"Parameters"),(0,l.kt)("p",null,"The parameters for the PUT request:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"IMPORTANCE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"status")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,l.kt)("td",{parentName:"tr",align:null},"Upload status (the value should be ",(0,l.kt)("inlineCode",{parentName:"td"},"ready"),")")))),(0,l.kt)("h3",null,"Success response"),(0,l.kt)("p",null,"Upon success, a response with HTTP status “202 Accepted” is returned."),(0,l.kt)("h3",null,"Error responses"),(0,l.kt)("p",null,"Possible error responses:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401 Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The provided access token is missing, revoked, expired or malformed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"not_found")),(0,l.kt)("td",{parentName:"tr",align:null},"Channel or video was not found")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))),(0,l.kt)("h3",null,"Check status of processing"),(0,l.kt)("p",null,"Returns the status of processing the specific video."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET https://api.video.ibm.com/channels/{channel_id}/uploads/{video_id}.json\n")),(0,l.kt)("h3",null,"Parameters"),(0,l.kt)("p",null,"This request has no parameters."),(0,l.kt)("h3",null,"Success response"),(0,l.kt)("p",null,"Upon success a response with HTTP status “200 OK” is returned with a key-value pair."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"KEY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"status")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The current status. Possible values: ",(0,l.kt)("inlineCode",{parentName:"td"},"initiated"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"transferred"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"queued"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"pending"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"transcoding"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"complete"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"error"))))),(0,l.kt)("h3",null,"Error responses"),(0,l.kt)("p",null,"Possible error responses:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401 Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The provided access token is missing, revoked, expired or malformed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"not_found")),(0,l.kt)("td",{parentName:"tr",align:null},"Channel was not found")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-channel-api-video-management-upload-videos-mdx-24eb731ceee620cc10e8.js.map
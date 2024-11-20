import{a as f,b as R,e as m,h as S}from"./chunk-JYKLRFPO.mjs";var N=R((T,x)=>{m();S();(function(){var p,y,d,g,E,u,v,b,_,w,H,c;v=function(){class r{constructor(){this.onloadstart=null,this.onprogress=null,this.onabort=null,this.onerror=null,this.onload=null,this.ontimeout=null,this.onloadend=null,this._listeners={}}addEventListener(e,t){var s;e=e.toLowerCase(),(s=this._listeners)[e]||(s[e]=[]),this._listeners[e].push(t)}removeEventListener(e,t){var s;e=e.toLowerCase(),this._listeners[e]&&(s=this._listeners[e].indexOf(t),s!==-1&&this._listeners[e].splice(s,1))}dispatchEvent(e){var t,s,o,i,n;if(e.currentTarget=e.target=this,t=e.type,n=this._listeners[t])for(s=0,o=n.length;s<o;s++)i=n[s],i.call(this,e);(i=this[`on${t}`])&&i.call(this,e)}}return r.prototype.onloadstart=null,r.prototype.onprogress=null,r.prototype.onabort=null,r.prototype.onerror=null,r.prototype.onload=null,r.prototype.ontimeout=null,r.prototype.onloadend=null,r}.call(this),_=f("http"),w=f("https"),H=f("os"),c=f("url"),u=function(){class r extends v{constructor(e){super(),this.onreadystatechange=null,this._anonymous=e&&e.anon,this.readyState=r.UNSENT,this.response=null,this.responseText="",this.responseType="",this.responseURL="",this.status=0,this.statusText="",this.timeout=0,this.upload=new b(this),this._method=null,this._url=null,this._sync=!1,this._headers=null,this._loweredHeaders=null,this._mimeOverride=null,this._request=null,this._response=null,this._responseParts=null,this._responseHeaders=null,this._aborting=null,this._error=null,this._loadedBytes=0,this._totalBytes=0,this._lengthComputable=!1}open(e,t,s,o,i){var n;if(e=e.toUpperCase(),e in this._restrictedMethods)throw new g(`HTTP method ${e} is not allowed in XHR`);switch(n=this._parseUrl(t),s===void 0&&(s=!0),this.readyState){case r.UNSENT:case r.OPENED:case r.DONE:break;case r.HEADERS_RECEIVED:case r.LOADING:}this._method=e,this._url=n,this._sync=!s,this._headers={},this._loweredHeaders={},this._mimeOverride=null,this._setReadyState(r.OPENED),this._request=null,this._response=null,this.status=0,this.statusText="",this._responseParts=[],this._responseHeaders=null,this._loadedBytes=0,this._totalBytes=0,this._lengthComputable=!1}setRequestHeader(e,t){var s;if(this.readyState!==r.OPENED)throw new p("XHR readyState must be OPENED");if(s=e.toLowerCase(),this._restrictedHeaders[s]||/^sec\-/.test(s)||/^proxy-/.test(s)){console.warn(`Refused to set unsafe header "${e}"`);return}t=t.toString(),s in this._loweredHeaders?(e=this._loweredHeaders[s],this._headers[e]=this._headers[e]+", "+t):(this._loweredHeaders[s]=e,this._headers[e]=t)}send(e){if(this.readyState!==r.OPENED)throw new p("XHR readyState must be OPENED");if(this._request)throw new p("send() already called");switch(this._url.protocol){case"file:":this._sendFile(e);break;case"http:":case"https:":this._sendHttp(e);break;default:throw new y(`Unsupported protocol ${this._url.protocol}`)}}abort(){this._request&&(this._request.abort(),this._setError(),this._dispatchProgress("abort"),this._dispatchProgress("loadend"))}getResponseHeader(e){var t;return this._responseHeaders?(t=e.toLowerCase(),t in this._responseHeaders?this._responseHeaders[t]:null):null}getAllResponseHeaders(){var e,t,s;return this._responseHeaders?(e=function(){var o,i;o=this._responseHeaders,i=[];for(t in o)s=o[t],i.push(`${t}: ${s}`);return i}.call(this),e.join(`\r
`)):""}overrideMimeType(e){if(this.readyState===r.LOADING||this.readyState===r.DONE)throw new p("overrideMimeType() not allowed in LOADING or DONE");this._mimeOverride=e.toLowerCase()}nodejsSet(e){var t,s;if("httpAgent"in e&&(this.nodejsHttpAgent=e.httpAgent),"httpsAgent"in e&&(this.nodejsHttpsAgent=e.httpsAgent),"baseUrl"in e){if(t=e.baseUrl,t!==null&&(s=c.parse(t,!1,!0),!s.protocol))throw new E("baseUrl must be an absolute URL");this.nodejsBaseUrl=t}}static nodejsSet(e){r.prototype.nodejsSet(e)}_setReadyState(e){var t;this.readyState=e,t=new d("readystatechange"),this.dispatchEvent(t)}_sendFile(){throw this._url.method!=="GET"?new y("The file protocol only supports GET"):new Error("Protocol file: not implemented")}_sendHttp(e){if(this._sync)throw new Error("Synchronous XHR processing not implemented");e!=null&&(this._method==="GET"||this._method==="HEAD")?(console.warn(`Discarding entity body for ${this._method} requests`),e=null):e||(e=""),this.upload._setData(e),this._finalizeHeaders(),this._sendHxxpRequest()}_sendHxxpRequest(){var e,t,s;this._url.protocol==="http:"?(t=_,e=this.nodejsHttpAgent):(t=w,e=this.nodejsHttpsAgent),s=t.request({hostname:this._url.hostname,port:this._url.port,path:this._url.path,auth:this._url.auth,method:this._method,headers:this._headers,agent:e}),this._request=s,this.timeout&&s.setTimeout(this.timeout,()=>this._onHttpTimeout(s)),s.on("response",o=>this._onHttpResponse(s,o)),s.on("error",o=>this._onHttpRequestError(s,o)),this.upload._startUpload(s),this._request===s&&this._dispatchProgress("loadstart")}_finalizeHeaders(){var e;this._headers.Connection="keep-alive",this._headers.Host=this._url.host,this._anonymous&&(this._headers.Referer="about:blank"),(e=this._headers)["User-Agent"]||(e["User-Agent"]=this._userAgent),this.upload._finalizeHeaders(this._headers,this._loweredHeaders)}_onHttpResponse(e,t){var s;if(this._request===e){switch(t.statusCode){case 301:case 302:case 303:case 307:case 308:this._url=this._parseUrl(t.headers.location),this._method="GET","content-type"in this._loweredHeaders&&(delete this._headers[this._loweredHeaders["content-type"]],delete this._loweredHeaders["content-type"]),"Content-Type"in this._headers&&delete this._headers["Content-Type"],delete this._headers["Content-Length"],this.upload._reset(),this._finalizeHeaders(),this._sendHxxpRequest();return}return this._response=t,this._response.on("data",o=>this._onHttpResponseData(t,o)),this._response.on("end",()=>this._onHttpResponseEnd(t)),this._response.on("close",()=>this._onHttpResponseClose(t)),this.responseURL=this._url.href.split("#")[0],this.status=this._response.statusCode,this.statusText=_.STATUS_CODES[this.status],this._parseResponseHeaders(t),(s=this._responseHeaders["content-length"])?(this._totalBytes=parseInt(s),this._lengthComputable=!0):this._lengthComputable=!1,this._setReadyState(r.HEADERS_RECEIVED)}}_onHttpResponseData(e,t){if(this._response===e)return this._responseParts.push(t),this._loadedBytes+=t.length,this.readyState!==r.LOADING&&this._setReadyState(r.LOADING),this._dispatchProgress("progress")}_onHttpResponseEnd(e){if(this._response===e)return this._parseResponse(),this._request=null,this._response=null,this._setReadyState(r.DONE),this._dispatchProgress("load"),this._dispatchProgress("loadend")}_onHttpResponseClose(e){var t;if(this._response===e)return t=this._request,this._setError(),t.abort(),this._setReadyState(r.DONE),this._dispatchProgress("error"),this._dispatchProgress("loadend")}_onHttpTimeout(e){if(this._request===e)return this._setError(),e.abort(),this._setReadyState(r.DONE),this._dispatchProgress("timeout"),this._dispatchProgress("loadend")}_onHttpRequestError(e,t){if(this._request===e)return this._setError(),e.abort(),this._setReadyState(r.DONE),this._dispatchProgress("error"),this._dispatchProgress("loadend")}_dispatchProgress(e){var t;t=new d(e),t.lengthComputable=this._lengthComputable,t.loaded=this._loadedBytes,t.total=this._totalBytes,this.dispatchEvent(t)}_setError(){this._request=null,this._response=null,this._responseHeaders=null,this._responseParts=null}_parseUrl(e){var t,s,o,i,n;return this.nodejsBaseUrl===null?t=e:t=c.resolve(this.nodejsBaseUrl,e),n=c.parse(t,!1,!0),n.hash=null,n.auth&&(typeof i<"u"&&i!==null||typeof o<"u"&&o!==null)&&(s=n.auth.indexOf(":"),s===-1?i||(i=n.auth):(i||(i=n.substring(0,s)),o||(o=n.substring(s+1)))),(i||o)&&(n.auth=`${i}:${o}`),n}_parseResponseHeaders(e){var t,s,o,i;this._responseHeaders={},o=e.headers;for(s in o)i=o[s],t=s.toLowerCase(),!this._privateHeaders[t]&&(this._mimeOverride!==null&&t==="content-type"&&(i=this._mimeOverride),this._responseHeaders[t]=i);this._mimeOverride!==null&&!("content-type"in this._responseHeaders)&&(this._responseHeaders["content-type"]=this._mimeOverride)}_parseResponse(){var e,t,s,o,i,n,l;switch(Buffer.concat?t=Buffer.concat(this._responseParts):t=this._concatBuffers(this._responseParts),this._responseParts=null,this.responseType){case"text":this._parseTextResponse(t);break;case"json":this.responseText=null;try{this.response=JSON.parse(t.toString("utf-8"))}catch(a){i=a,this.response=null}break;case"buffer":this.responseText=null,this.response=t;break;case"arraybuffer":for(this.responseText=null,e=new ArrayBuffer(t.length),l=new Uint8Array(e),s=o=0,n=t.length;0<=n?o<n:o>n;s=0<=n?++o:--o)l[s]=t[s];this.response=e;break;default:this._parseTextResponse(t)}}_parseTextResponse(e){var t;try{this.responseText=e.toString(this._parseResponseEncoding())}catch(s){t=s,this.responseText=e.toString("binary")}this.response=this.responseText}_parseResponseEncoding(){var e,t,s;return t=null,(e=this._responseHeaders["content-type"])&&(s=/\;\s*charset\=(.*)$/.exec(e))?s[1]:"utf-8"}_concatBuffers(e){var t,s,o,i,n,l,a;if(e.length===0)return Buffer.alloc(0);if(e.length===1)return e[0];for(l=0,s=0,i=e.length;s<i;s++)t=e[s],l+=t.length;for(a=Buffer.alloc(l),l=0,o=0,n=e.length;o<n;o++)t=e[o],t.copy(a,l),l+=t.length;return a}}return r.prototype.onreadystatechange=null,r.prototype.readyState=null,r.prototype.response=null,r.prototype.responseText=null,r.prototype.responseType=null,r.prototype.status=null,r.prototype.timeout=null,r.prototype.upload=null,r.prototype.UNSENT=0,r.UNSENT=0,r.prototype.OPENED=1,r.OPENED=1,r.prototype.HEADERS_RECEIVED=2,r.HEADERS_RECEIVED=2,r.prototype.LOADING=3,r.LOADING=3,r.prototype.DONE=4,r.DONE=4,r.prototype.nodejsHttpAgent=_.globalAgent,r.prototype.nodejsHttpsAgent=w.globalAgent,r.prototype.nodejsBaseUrl=null,r.prototype._restrictedMethods={CONNECT:!0,TRACE:!0,TRACK:!0},r.prototype._restrictedHeaders={"accept-charset":!0,"accept-encoding":!0,"access-control-request-headers":!0,"access-control-request-method":!0,connection:!0,"content-length":!0,cookie:!0,cookie2:!0,date:!0,dnt:!0,expect:!0,host:!0,"keep-alive":!0,origin:!0,referer:!0,te:!0,trailer:!0,"transfer-encoding":!0,upgrade:!0,via:!0},r.prototype._privateHeaders={"set-cookie":!0,"set-cookie2":!0},r.prototype._userAgent=`Mozilla/5.0 (${H.type()} ${H.arch()}) node.js/${process.versions.node} v8/${process.versions.v8}`,r}.call(this),x.exports=u,u.XMLHttpRequest=u,g=class extends Error{constructor(){super()}},u.SecurityError=g,p=class extends Error{constructor(){super()}},p=class extends Error{},u.InvalidStateError=p,y=class extends Error{constructor(){super()}},u.SyntaxError=E,E=class extends Error{constructor(){super()}},d=function(){class r{constructor(e){this.type=e,this.target=null,this.currentTarget=null,this.lengthComputable=!1,this.loaded=0,this.total=0}}return r.prototype.bubbles=!1,r.prototype.cancelable=!1,r.prototype.target=null,r.prototype.loaded=null,r.prototype.lengthComputable=null,r.prototype.total=null,r}.call(this),u.ProgressEvent=d,b=class extends v{constructor(h){super(),this._request=h,this._reset()}_reset(){this._contentType=null,this._body=null}_setData(h){var e,t,s,o,i,n,l,a;if(!(typeof h>"u"||h===null))if(typeof h=="string")h.length!==0&&(this._contentType="text/plain;charset=UTF-8"),this._body=Buffer.from(h,"utf8");else if(Buffer.isBuffer(h))this._body=h;else if(h instanceof ArrayBuffer){for(e=Buffer.alloc(h.byteLength),a=new Uint8Array(h),t=s=0,n=h.byteLength;0<=n?s<n:s>n;t=0<=n?++s:--s)e[t]=a[t];this._body=e}else if(h.buffer&&h.buffer instanceof ArrayBuffer){for(e=Buffer.alloc(h.byteLength),i=h.byteOffset,a=new Uint8Array(h.buffer),t=o=0,l=h.byteLength;0<=l?o<l:o>l;t=0<=l?++o:--o)e[t]=a[t+i];this._body=e}else throw new Error(`Unsupported send() data ${h}`)}_finalizeHeaders(h,e){this._contentType&&("content-type"in e||(h["Content-Type"]=this._contentType)),this._body&&(h["Content-Length"]=this._body.length.toString())}_startUpload(h){this._body&&h.write(this._body),h.end()}},u.XMLHttpRequestUpload=b}).call(T)});export default N();

I wanted to polish my last project but I took on this Bitly shortener to push myself. It’s a simple React app with Vite. Paste a link, get a short one, copy it, and keep a history in localStorage. I tried to keep the layout clean and the states friendly. I routed Bitly through a tiny serverless function at api slash shorten so the token stays private. But I kept running into Vite issues and the app wouldn’t behave. Local runs were flaky and the build kept breaking. I couldn’t get past it even after a bunch of tries. So this is here as a record of the attempt, not a polished finish.



Reflection
This was harder than I thought. I planned the flow. validate the url, call the serverless endpoint, save the result, show feedback. the basics were fine on paper. in practice I fought Vite the whole time. wrong presets, build errors, dev server up but blank page, vercel thinking it was create react app, env vars not loading. I fixed little bits like normalizing urls and a small localStorage hook, but the Vite problems kept coming back. I burned time swapping configs and checking index.html and entry files and it still failed. I didn’t land a clean deploy and I couldn’t fix it before time ran out. next step is to redo the setup slowly or ask for another set of eyes. maybe start fresh with a new vite scaffold and move files over one by one. this beat me today, but I did learn a lot about what breaks and how to debug it.
resouces that helped me.

https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
https://developer.mozilla.org/en-US/docs/Web/API/Storage
https://developer.mozilla.org/en-US/docs/Web/API/Storage/key
https://developer.mozilla.org/en-US/docs/Web/API/Storage
https://dev.bitly.com/

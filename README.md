
I originally just wanted to polish my last project, but I decided to push myself and take on something a bit tougher. This is a simple, clean URL shortener I built with React and Vite that talks to the Bitly API. You can paste any valid link, get a short one back, copy it in one click, and see your history even after a refresh because I keep everything in localStorage. I added friendly validation, clear loading and error messages, and kept the layout responsive with accessible focus and hover states. To keep my Bitly token safe I send requests through a tiny serverless function at api slash shorten and I set the Bitley environment variable on my host. I ran it locally with npm install and npm run dev and deployed with Vercel. It was a fun way to stretch beyond my last build while keeping the code small and easy to read.



Reflection
I planned to only polish my last project but I wanted a real push so I built this Bitly powered URL shortener instead. I mapped the flow in plain steps. Validate the input. Send it to a serverless endpoint so the token stays private. Get the short link. Save it and show it right away. Keeping secrets out of the client was the biggest hurdle. A tiny serverless function with an environment variable solved it and made me learn deployment on Vercel in a hands on way. I also had small snags with user input and state. People paste links without https. Arrays can get mutated by accident. UIs can flicker during loading. I fixed those with a normalize step using URL parsing, a small usePersistedState hook for localStorage, and clear loading and error states. The interface stays light and responsive. Focus and hover are obvious. Copy gives quick feedback so it feels smooth. If I keep going I want to prevent duplicates when the same long URL is shortened again. I also want search or tags for saved links and a view of Bitly click counts. A few unit tests for the hook would help. Maybe a small skeleton for first load. This project stretched me just enough. It still feels clean readable and simple to maintain.

resouces that helped me.

https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
https://developer.mozilla.org/en-US/docs/Web/API/Storage
https://developer.mozilla.org/en-US/docs/Web/API/Storage/key
https://developer.mozilla.org/en-US/docs/Web/API/Storage
https://dev.bitly.com/
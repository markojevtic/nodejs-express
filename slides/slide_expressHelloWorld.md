###### Express HelloWorld

```javascript
const express = require('express');
const app = express();
const port = 3000;
app.get('/messages', 
    (req, res) => res.send([{message: "Hello world!"}]));
app.listen(port, 
    () => console.log(`listening on port ${port}!`));
```


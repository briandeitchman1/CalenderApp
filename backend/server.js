const express = require('express');
const app = express();
const port = 5000;
const path = require('path');




app.get('/api', (req, res) => {
    res.json({ "items": ["walk dog", "wash dishes", "take out trash"] })
})

app.listen(port, () => {
    console.log(`server started on port ${port}`)
})
const express = require('express')
const app = express()
const axios = require("axios");
const cors = require('cors')

app.use(cors())

app.post('/:id', async (req , res) => {
    try {
        let postId = req.params.id;
        const response = await axios.post(`https://uatncpapi.kotakgeneral.com/api-v1/api//transaction_details/${postId}`)
        res.status(200).json({ data: response.data });
    } catch (err) {
         console.log(err);
         res.status(500).json({ msg: "something bad has occurred." });
    }
})

app.listen(5000, () => {
    console.log('listening on port 5000')
})
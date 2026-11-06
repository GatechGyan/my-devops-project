// एक सिंपल HTTP सर्वर बनाना
const http = require('http');

// हम पोर्ट को डायनेमिक रख रहे हैं (अगर पर्यावरण में पोर्ट न मिले तो 5000 का उपयोग करें)
const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*'); // फ्रंटएंड से कनेक्ट करने के लिए CORS इनेबल करना
    
    // जब कोई इस API को हिट करेगा तो यह JSON डेटा भेजेगा
    res.end(JSON.stringify({
        status: "success",
        message: "🚀 हैलो! आपका Node.js Backend डॉकर कंटेनर से लाइव बात कर रहा है।"
    }));
});

server.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}`);
});

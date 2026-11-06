const express = require('express');
const app = express();
const PORT = 5002; // पेमेंट मॉड्यूल का अपना अलग पोर्ट

app.use(express.json());

// 💳 पेमेंट प्रोसेस करने का रास्ता
app.post('/charge', (req, res) => {
    const amount = req.body.amount || 100;
    console.log(`[INFO] Processing payment for amount: ₹${amount}`);
    
    // नकली पेमेंट सक्सेस का रिस्पॉन्स भेजना
    res.json({
        status: "SUCCESS",
        message: `₹${amount} का पेमेंट सफलतापूर्वक पूरा हो गया!`,
        transactionId: "TXN-" + Math.floor(Math.random() * 1000000)
    });
});

// 🏥 हेल्थ चेक (कुबेरनेट्स और मॉनिटरिंग के लिए)
app.get('/health', (req, res) => {
    res.send("Payment Module is Healthy and Running!");
});

app.listen(PORT, () => {
    console.log(`Payment server is running on port ${PORT}`);
});

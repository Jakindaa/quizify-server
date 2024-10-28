let latestCode = null; // Temporary storage

export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'https://jakindaa.github.io');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method === 'POST') {
        const { code } = req.body;
        latestCode = code; // Save the latest code
        console.log('Received authorization code:', code);
        res.status(200).json({ message: 'Code received successfully!' });
    } else if (req.method === 'GET') { // New endpoint to retrieve code
        if (latestCode) {
            res.status(200).json({ code: latestCode });
            latestCode = null; // Clear code after retrieval
        } else {
            res.status(404).json({ message: 'No code available' });
        }
    } else {
        res.setHeader('Allow', ['POST', 'GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

export default function handler(req, res) {
    // Add CORS headers to allow requests from GitHub Pages
    res.setHeader('Access-Control-Allow-Origin', 'https://jakindaa.github.io');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Handle POST request
    if (req.method === 'POST') {
        const { code } = req.body;
        console.log('Received authorization code:', code);
        res.status(200).json({ message: 'Code received successfully!' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

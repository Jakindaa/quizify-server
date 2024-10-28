export default function handler(req, res) {
    if (req.method === 'POST') {
        const { code } = req.body;
        console.log('Received authorization code:', code);
        res.status(200).json({ message: 'Code received successfully!' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
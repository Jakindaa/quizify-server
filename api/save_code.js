export default function handler(req, res) {
    if (req.method === 'POST') {
        const { code } = req.body; // Get the authorization code from the request body
        console.log('Received authorization code:', code);
        // You can process the code here (e.g., exchange it for an access token)
        res.status(200).json({ message: 'Code saved successfully!' }); // Send a success response
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

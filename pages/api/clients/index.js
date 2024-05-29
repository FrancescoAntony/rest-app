import { getClients, addClient } from '../../data/clients';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const clients = getClients();
    res.status(200).json({ clients });
  } else if (req.method === 'POST') {
    const { name, email, phone } = req.body;
    const newClient = addClient({ id: Date.now().toString(), name, email, phone });
    res.status(201).json({ client: newClient });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

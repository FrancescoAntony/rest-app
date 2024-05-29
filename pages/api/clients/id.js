import { getClientById, updateClient, deleteClient } from '../../data/clients';

export default function handler(req, res) {
  const { id } = req.query;
  const client = getClientById(id);

  if (!client) {
    return res.status(404).json({ message: 'Cliente não encontrado' });
  }

  switch (req.method) {
    case 'GET':
      res.status(200).json({ client });
      break;
    case 'PUT':
      const { name, email, phone } = req.body;
      const updatedClient = updateClient(id, { name, email, phone });
      if (updatedClient) {
        res.status(200).json({ client: updatedClient });
      } else {
        res.status(404).json({ message: 'Cliente não encontrado' });
      }
      break;
    case 'DELETE':
      deleteClient(id);
      res.status(200).json({ message: 'Cliente excluído com sucesso' });
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

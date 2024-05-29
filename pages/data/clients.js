let clients = [
    { id: '1', name: 'Cliente A', email: 'clienteA@example.com', phone: '111-1111' },
    { id: '2', name: 'Cliente B', email: 'clienteB@example.com', phone: '222-2222' },
    { id: '3', name: 'Cliente C', email: 'clienteC@example.com', phone: '333-3333' },
  ];
  
  export function getClients() {
    return clients;
  }
  
  export function getClientById(id) {
    return clients.find(client => client.id === id);
  }
  
  export function addClient(client) {
    clients.push(client);
    return client;
  }
  
  export function updateClient(id, updatedClient) {
    const index = clients.findIndex(client => client.id === id);
    if (index !== -1) {
      clients[index] = { ...clients[index], ...updatedClient };
      return clients[index];
    }
    return null;
  }
  
  export function deleteClient(id) {
    clients = clients.filter(client => client.id !== id);
  }
  
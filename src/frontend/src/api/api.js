import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export default api;

export const fetchClientes = async () => {
  // Aquí puedes agregar la lógica para obtener clientes desde el backend
  return [
    { id: 1, nombre: "Juan Perez", email: "juan.perez@example.com" },
    { id: 2, nombre: "Maria Lopez", email: "maria.lopez@example.com" },
  ];
};

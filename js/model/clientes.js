class Clientes {
    constructor() {
        this.clientes = new Array();
        const client1 = new Cliente('Ana Paula', '1234212', '23');
        const client2 = new Cliente('Lucas Coelho', '9934212', '12');
        this.clientes.push(client1, client2);
    }
    inserir(cliente) {
        this.clientes.push(cliente);
    }
    remover(cpf) {
        const clienteARemover = this.pesquisar(cpf);
        //se o cliente existir, vamos remover o cliente desse cpf
        if (clienteARemover) {
            const indiceCliente = this.clientes.indexOf(clienteARemover);
            if (indiceCliente > -1) {
                this.clientes.splice(indiceCliente, 1);
            }
        }
    }
    pesquisar(cpf) {
        return this.clientes.find(cliente => cliente.cpf === cpf);
    }
    listar() {
        return this.clientes;
    }
}

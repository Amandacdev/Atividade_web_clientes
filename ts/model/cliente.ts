class Cliente {

    private _nome: string;
    private _cpf: string;
    private _conta: string; 

    constructor(nome: string, cpf: string, conta: string) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get cpf() {
        return this._cpf;
    }

    set cpf(novoCpf) {
        this._cpf = novoCpf;
    }

    get conta() {
        return this._conta;
    }

    set conta(novaConta) {
        this._conta = novaConta;
    }

    toString(): string {
        return `Nome: ${this._nome} 
        - CPF: ${this._cpf}
        - Conta: ${this._conta}`;
    }
}
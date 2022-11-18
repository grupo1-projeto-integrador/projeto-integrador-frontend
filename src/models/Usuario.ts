interface Usuario {

    id:number;
    nome:string;
    email:string;
    senha:string;
    cpf:string;
    cnpj:string;
    endereco:string;
    tipo:string;
    Produto?: Produto[]
}

export default Usuario;


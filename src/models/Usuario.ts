import Produto from "./Produto";

interface Usuario {

    id:number;
    nome:string;
    email:string;
    senha:string;
    cpf:string;
    cnpj:string;
    endereco:string;
    tipo:string;
    produto?: Produto[]
}

export default Usuario;


import Produto from "./Produto";

interface Usuario {

    id:number;
    nome:string;
    email:string;
    senha:string;
    cpf:string | null;
    cnpj:string | null;
    endereco:string;
    tipo:string;
    produto?: Produto[]
}

export default Usuario;


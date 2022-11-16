import Categoria from './Categoria';
import Usuario from './Usuario';

interface Produto {
    id: number;
    nome: string;
    valor: number;
    kg: string;
    estoque: string;
    imagem: string;
    categoria?: Categoria | null
    usuario?: Usuario | null
}

export default Produto
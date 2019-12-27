import { produce } from 'immer'

/** Usamos o immer para conseguir trabalhar de uma maneira mais simples, com nossos estados
 * 
 * o primeiro parametro do produce é o estado atual
 * o segundo é uma cópia do desse estado, para que possamos realizar modificações(adicionar, remover e etc)
 * o retorno dessa função é esse estado modificado
 *  
 */

export default function cart(state = [], action) {
    /** Usamos os cases, para poder ouvir apenas as actions que são relacionadas, nesse caso,
     * ao carrinho. Evitando assim ouvir o que é relacionado a outros reducers.
     */
    switch (action.type) {
        case '@cart/ADD_SUCCESS':
            return produce(state, draft => {
                const { product } = action;
                draft.push(product);
            });
        case '@cart/REMOVE':
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id);
                if (productIndex >= 0) {
                    draft.splice(productIndex, 1)
                }
            })
        case '@cart/UPDATE_AMOUNT_SUCCESS': {
            return produce(state, draft => {
                const productIndex = draft.findIndex(p => p.id === action.id);
                if (productIndex >= 0) {
                    draft[productIndex].amount = Number(action.amount)
                }
            });
        }
        default:
            return state;
    }
};

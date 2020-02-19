import PubSub from 'pubsub-js';
export default class TratadorErros {
    publicaErros(erros){
        console.log("erros "+erros);
        erros.errors.map((erro)=>{
            console.log(erro.defaultMessage);
            PubSub.publish("erro-validacao", erro);
        })
    }
}
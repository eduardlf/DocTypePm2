/**
 * Class de logs
 */
export default class Log{

    private static print(texto: string){

        const date = new Date();
        let log = '[' + date.toTimeString() + ']';
        console.log(log + '::::' + texto);

    }

    static info(texto: string) {
        this.print(texto);
    }

}

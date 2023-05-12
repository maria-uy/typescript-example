export class Gastos {
    constructor(recipient, amount) {
        this.recipient = recipient;
        this.amount = amount;
    }
    ;
    format() {
        return `Importe: ${this.amount}€ en ${this.recipient}`;
    }
}

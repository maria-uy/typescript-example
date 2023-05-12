import { HasFormatter } from '../interfaces/HasFormatter';

export class Gastos implements HasFormatter{
  constructor(
    readonly recipient: string,
    public amount: number,
  ){};

  format() {
    return `Importe: ${this.amount}€ en ${this.recipient}`;
  }
}
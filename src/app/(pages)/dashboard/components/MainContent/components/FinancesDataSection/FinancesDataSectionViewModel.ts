import { dataResult } from "./Types";

export class FinancesDataSectionViewModel {
  constructor(readonly data: dataResult[]) {}

  getData(): dataResult[] {
    const dataFormatted = this.data.map((finance) => {
      return {
        ...finance,
        amount: finance.amount.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }),
      };
    });

    return dataFormatted;
  }
}

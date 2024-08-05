export interface item{
  itemId: number;
  itemName: string;
  itemMeasurement: string;
  itemPresentAmount: number;
  itemBarcode: string;
  itemInputtedAmount: number;
  itemUserThatPutTheAmountIn: number;
  itemInventoryId: number;
}
export interface items{
  items: item[];
}

export interface updateItemAmount{
  itemId: number;
  inventoryId: number;
  amount: number;
}

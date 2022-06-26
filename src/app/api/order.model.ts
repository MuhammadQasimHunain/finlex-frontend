export interface Order {
    orderNo: number;
    orderDate: Date;
    createdBy: string;
    productName?: string;
    total: number;
    price?: number;
    totalPrice?: number;
}

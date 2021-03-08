export interface Row {
    number: string;
    name: string;
    date: string;
    sku: string;
    weight: string;
    height: string;
    width: string;
    origin: string;
    minimum: string;
    delay: string;
    id?: string;
}

export interface Columns {
    field: string;
    headerName: string;
    width: string;
}
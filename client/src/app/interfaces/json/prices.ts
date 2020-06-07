export interface PricesJSON {
    select: string,
    packages: {title: string, features: string[], price: number}[],
}
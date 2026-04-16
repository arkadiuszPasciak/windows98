export type Sign = "+" | "-" | "*" | "/" | "." | "="

export type SignWithoutEqual = Exclude<Sign, "=">

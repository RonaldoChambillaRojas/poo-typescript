import type categoryModel = require("./category.model");

export interface Product {
    id:          number;
    title:       string;
    slug:        string;
    price:       number;
    description: string;
    category:    categoryModel.Category;
    images:      string[];
    creationAt:  Date;
    updatedAt:   Date;
}


export interface ImageAttributes {
    url: string;
    name?: string;
}

export interface ImageData {
    attributes: ImageAttributes;
}

export interface ImageCollection {
    data: ImageData[] | ImageData;
}

export interface CategoryAttributes {
    name?: string;
    slug: string;
}

export interface CategoryData {
    attributes: CategoryAttributes;
}

export interface CategoryCollection {
    data: CategoryData[];
}

export interface SizeData {
    size: string;
    enabled: boolean;
}

export interface SizeCollection {
    data: SizeData[];
}

export interface ProductAttributes {
    name: string;
    subtitle: string;
    price: number;
    description?: string;
    size?: SizeCollection;
    original_price?: number;
    slug: string;
    thumbnail: ImageCollection;
    image: ImageCollection;
    categories?: CategoryCollection;
}

export interface ProductData {
    id: number;
    attributes: ProductAttributes;
}

export interface APIResponse<T> {
    data: T;
    meta?: any;
}

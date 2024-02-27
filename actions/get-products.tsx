import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

interface Query {
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean;
}

const getProduct = async (query: Query): Promise<Product[]> => {

    const url = qs.stringifyUrl({
        url: URL,
        query: {
            categoryId: query.categoryId,
            sizeId: query.sizeId,
            colorId: query.colorId,
            isFeatured: query.isFeatured
        }
    })


    const res = await fetch(url);

    return res.json()
}

export default getProduct
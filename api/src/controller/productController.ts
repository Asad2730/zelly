import { Request, Response } from "express";
import { product, deleteProduct, addProducts, update, getSingleProduct } from "../services/product_Service";
import { IProducts } from "../interfaces/products";
import { uploadImage } from "../s3";

export const getProducts = async (req: Request, res: Response) => {
    try {
        const productData = await product();
        return res.send({ statusCode: 200, data: productData })
    }
    catch (err: any) {
        return res.send({ statusCode: 500, message: err?.message })
    }
}

export const getProductByID = async (req: Request, res: Response) => {
    const id: string = req.params.id;
    if (!id) return res.send({ message: "ID is required in parameters", statusCode: 500 })
    try {
        const product = await getSingleProduct(id);
        return res.send({ statusCode: 200, data: product })
    }
    catch (err: any) {
        return res.send({ statusCode: 500, message: err?.message })
    }
}

export const createProduct = async (req: Request, res: Response) => {
    if (!req.file) return res.send({ statusCode: 500, message: 'no images found' });
    const files: any = req?.file;
    const filePath = files.path;
    files.mv('uploads/' + files.name, (err: Error) => {
        if (err) {
            console.log(err.message);
            return res.status(500).send(err);
        }
    });
    // await uploadImage(files);
    // const imagePaths: Array<any> = [];
    // const basePath = `${req.protocol}://localhost:2000/uploads/`

    // if (files) {
    //     files.map((file: any) => {
    //         imagePaths.push(`${basePath}${file.originalname}`);
    //     }
    //     )
    // }
    // const imageFileName = req?.files?.filename;       // http:localhost:3000/uploads/image-344433 

    const productData: IProducts = req.body;
    productData.images = filePath;

    try {
        const product = await addProducts(productData);
        return res.send({ statusCode: 200, data: product })
    }
    catch (err: any) {
        return res.send({ statusCode: 500, message: err?.message })
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    const id: any = req.query.id;
    const data: IProducts = req.body;
    if (!id || !data) {
        return res.send({ message: "ID is required in parameters", statusCode: 500 })
    }
    try {
        await update(id, data);
        return res.send({ message: "data updated successfully", statusCode: 200 })
    }
    catch (err: any) {
        return res.send({ statusCode: 500, message: err?.message })
    }
}

export const delProduct = async (req: Request, res: Response) => {
    const id: any = req.query.id;
    if (!id) {
        return res.send({ message: "ID is required in parameters", statusCode: 500 })
    }
    try {
        await deleteProduct(id);
        return res.send({ message: "product deleted successfully", statsCode: 200 })
    }
    catch (err: any) {
        return res.send({ statusCode: 500, message: err?.message })
    }
}
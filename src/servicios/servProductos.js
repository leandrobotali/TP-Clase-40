import DaoProducto from "../daos/DaosProductos.js";
import logger from '../helpers/logger.js'

const ProdInstance = DaoProducto.getInstance()

export const createProducto = async (req) => {
    const { nombre, descripcion, codigo, foto, precio, stock } = req.body;
    const errors = [];
    if (!nombre) { errors.push({ text: "Falta el nombre del Producto." }) }
    if (!descripcion) { errors.push({ text: "Falta la Descripción del Producto." }) }
    if (!codigo) { errors.push({ text: "Falta el codigo del Producto." }) }
    if (!foto) { errors.push({ text: "Falta la foto del Producto." }) }
    if (!precio) { errors.push({ text: "Falta el precio del Producto." }) }
    if (!stock) { errors.push({ text: "Falta el stock del Producto." }) }
    if (errors.length > 0) return errors
    try {
        let newProducto = {nombre: nombre, descripcion: descripcion, codigo: codigo, foto: foto, precio: precio, stock: stock }
        await ProdInstance.save(newProducto);
        return true
    } catch (error) {
        logger.error(error)
        return error
    }
};

export const getAll = async () => {
    return await ProdInstance.getAll();
}

export const getById = async (id) => {
    return await ProdInstance.findById(id);
}

export const updateProd = async (req) => {
    const { nombre, descripcion, codigo, foto, precio, stock } = req.body;
    const errors = [];
    if (!nombre) { errors.push({ text: "Falta el nombre del Producto." }) }
    if (!descripcion) { errors.push({ text: "Falta la Descripción del Producto." }) }
    if (!codigo) { errors.push({ text: "Falta el codigo del Producto." }) }
    if (!foto) { errors.push({ text: "Falta la foto del Producto." }) }
    if (!precio) { errors.push({ text: "Falta el precio del Producto." }) }
    if (!stock) { errors.push({ text: "Falta el stock del Producto." }) }
    if (errors.length > 0) return errors
    try {
        await ProdInstance.update(req);
        return true
    } catch (error) {
        logger.error(error)
        return error
    }
};

export const deleteProd = async (id) => {
    return await ProdInstance.delete(id);
}
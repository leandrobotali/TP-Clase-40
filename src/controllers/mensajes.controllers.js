import logger from '../helpers/logger.js'
import { createMsj, getAllMsj } from "../servicios/servMsj.js";

export const renderMsjForm = async (req, res, next) => {
    try {
        const mensajes = await getAllMsj()
        res.render("mensajes/mensajes", {mensajes: mensajes})     
    } catch (error) {
        next(error)
    }
}

export const crearMsj = async (req, res, next) => {
    try {
        await createMsj(req)
        res.redirect("/mensajes")        
    } catch (error) {
        next(error)
    }
}  
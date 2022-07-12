import DaoMsjs from '../daos/DaosMsjs.js'

export const createMsj = async (req) => {
    try {
        const msjInstance = DaoMsjs.getInstance()
        let text = {text:req.body.mensaje}
        const mensaje = await msjInstance.saveText(text)
        let msj = {fecha: Date.now(), idMensaje: mensaje._id, autor: req.user.email}
        await msjInstance.save(msj)
        return {message: "mensaje guardado"}        
    } catch (error) {
        return error
    }
};

export const getAllMsj = async () => {
    try {
        const msjInstance = DaoMsjs.getInstance()
        return await msjInstance.getAll();    
    } catch (error) {
        return error
    }
}
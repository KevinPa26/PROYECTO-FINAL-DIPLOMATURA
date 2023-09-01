import {create, deleteN, findAll, findOneById, update} from '../models/novedadesModels.js'

export const getNovedades = async (req, res) => {
    try {
        const novedades = await findAll()
        if(!novedades.length)return res.status(400).json({message: 'no existen novedades'})
        return res.json(novedades)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const getNovedad = async (req, res) => {
    try {
        const novedad = await findOneById(req.params.id)
        if(!novedad)return res.status(400).json({message: 'no existen novedad'})
        return res.json(novedad)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const createNovedades = async (req, res) => {
    try {
        const result = await create(req.body)
        return res.json(result)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const updateNovedades = async (req, res) => {
    try {
        const result = await update(req.params.id, req.body)
        return res.json(result)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const deleteNovedades = async (req, res) => {
    try {
        const novedad = await deleteN(req.params.id)
        return res.json(novedad)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
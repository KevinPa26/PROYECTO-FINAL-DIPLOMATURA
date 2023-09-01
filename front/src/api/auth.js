import instance from "./axios"

export const reguisteRequest = usuario => instance.post(`/register`, usuario)

export const loginRequest = usuario => instance.post(`/login`, usuario)

export const logoutRequest = () => instance.post(`/logout`)

export const verifyTokenRequest = () => instance.get(`/verifyToken`)
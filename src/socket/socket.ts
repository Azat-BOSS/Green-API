//@ts-ignore
import { io } from 'socket.io-client';

export const socket = io('wss://norma.nomoreparties.space/orders/all', {
    reconnectionDelay: 1000,
    reconnection: true,
    reconnectionAttemps: 10,
    transports: ['websocket'],
    agent: false,
    upgrade: false,
    rejectUnauthorized: false
});
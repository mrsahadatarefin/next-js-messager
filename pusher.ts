import Pusher from "pusher";
import ClientPusher from "pusher-js";


export const serverPusher = new Pusher({
    appId: "1567821",
    key: "8cd1789b4144f461a453",
    secret: "0182f75f9d5f6cb8e3b7",
    cluster: "ap2",
    useTLS: true



})
export const clientPusher = new ClientPusher(
    '8cd1789b4144f461a453', {
        cluster: 'ap2',
        forceTLS:true


});
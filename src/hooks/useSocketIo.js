import { io } from "socket.io-client";
import { getAuth } from "../helpers/auth";
import SystemInfo from "../util/SystemInfo";

const authInfo = JSON.parse(`${getAuth()}`);

const useSocketIo = io(`${SystemInfo?.api}`, {
    transports: ['websocket'],
    extraHeaders: {
        Authorization: authInfo?.token ? `Bearer ${authInfo?.token}` : null
    }
});


export default useSocketIo;
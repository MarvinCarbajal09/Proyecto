//declaración de funcion asincrona
import axios from "axios";
import { API_URL } from "../utils/constants";
import { MakeLogin } from "../types/auth.type";
import { Response} from "../types/auth.type"


export async function make_login(values: MakeLogin) {
    const { data } = await axios.post<Response>(
      API_URL + "/api/login",
      values
    );
    return data;
  }

//   export async function ObtenerIp(){
//     const { data } = await axios.get<JsonIp>(
//         API_URL,
//     );
//     return data;
// }
  
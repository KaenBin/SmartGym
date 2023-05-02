import axios from "axios";

export default axios.create({ baseURL: 'http://192.168.1.8:8000/' }); //Lợi

// export default axios.create({ baseURL: 'http://10.130.35.12:8000/' }); //School
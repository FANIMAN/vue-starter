import {createStore} from "vuex";
import moduleRequest from "../store/modules/request";


const store = createStore({
    modules: {
        request:moduleRequest
    }
  })

export default store
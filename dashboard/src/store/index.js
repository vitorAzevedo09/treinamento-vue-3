import UserModule from "./user.js";
import GlobalModule from "./global.js";
import { readonly } from 'vue'

export default readonly({
  User: UserModule,
  Global: GlobalModule
})


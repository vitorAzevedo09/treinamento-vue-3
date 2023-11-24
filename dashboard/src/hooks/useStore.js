import Store from "../store/index.js";

export default function useStore (module) {
  if(module){
    return Store[module]
  }
  return Store
}

import init,{add} from './pkg/rust_wasm'

export async function loadWasm(){
    await init();

    return {add}
}
import store from "@/store"

const STATE = JSON.parse(JSON.stringify(store.state))
export function resetTheState() {
    store.replaceState(JSON.parse(JSON.stringify(STATE)))
}
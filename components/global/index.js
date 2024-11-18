import UButton from "./UButton.vue"
import UInput from "./UInput.vue"
import ULink from "./ULink.vue"

const components = [
    {name: 'UButton', component: UButton},
    {name: 'UInput', component: UInput},
    {name: 'ULink', component: ULink},
]

export default {
    install(app) {
        components.forEach(({ name, component }) => {
            app.component(name, component)
        })
    }
}
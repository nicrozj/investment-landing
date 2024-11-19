import UButton from "./UButton.vue"
import UTextInput from "./UTextInput.vue"
import ULink from "./ULink.vue"
import UDateInput from "./UDateInput.vue"
import UTelInput from "./UTelInput.vue"
import UCheckBox from "./UCheckBox.vue"

const components = [
    {name: 'UButton', component: UButton},
    {name: 'UTextInput', component: UTextInput},
    {name: 'UDateInput', component: UDateInput},
    {name: 'UTelInput', component: UTelInput},
    {name: 'ULink', component: ULink},
    {name: 'UCheckBox', component: UCheckBox}
]

export default {
    install(app) {
        components.forEach(({ name, component }) => {
            app.component(name, component)
        })
    }
}

import { App } from 'vue'
import MyButton from "@/components/UI/MyButton.vue";
import MyInput from "@/components/UI/MyInput.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import MySelect from "@/components/UI/MySelect.vue";
import NavBar from "@/components/UI/NavBar.vue";
import ToggleSwitch from "@/components/UI/ToggleSwitch.vue"
import Dropdown from "@/components/UI/Dropdown.vue"
import Pagination from "@/components/UI/Pagination.vue"


export default (app: App<Element>) => {
	app.component('MyButton', MyButton)
	app.component('MyInput', MyInput)
	app.component('MyDialog', MyDialog)
	app.component('MySelect', MySelect)
	app.component('NavBar', NavBar)
	app.component('ToggleSwitch', ToggleSwitch)
	app.component('Dropdown', Dropdown)
	app.component('Pagination', Pagination)
}
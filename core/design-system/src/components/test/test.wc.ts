import r2wc from '@r2wc/react-to-web-component'
import Test from './test'

export default function defineTestComponent() {
	customElements.define('ds-test', r2wc(Test))
}

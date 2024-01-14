import r2wc from '@r2wc/react-to-web-component'
import Test from './test'

const DesignSystemTest = r2wc(Test)

customElements.define('ds-test', DesignSystemTest)

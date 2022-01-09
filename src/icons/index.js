import SvgIcon from '@/components/svgIcon';
import { createApp } from 'vue';
import App from '@/App.vue';
const app = createApp(App);
app.component('svg-icon', SvgIcon);

const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('./svg', false, /\.svg$/);
requireAll(req);

import "bootstrap";

import { initHotjar } from './init_hotjar'

document.addEventListener('turbolinks:load', () => {
  initHotjar();
});

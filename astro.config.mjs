import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
    site: 'https://scripty.by.nikdelv.in',
    integrations: [tailwind()],
    devToolbar: {
        enabled: false
    }
})

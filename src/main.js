import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import firebase auth service
import { projectAuth } from './firebase/config'

let app

// only run create app if app isnt created
projectAuth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App)
            .use(router)
            .mount('#app')
    }
})




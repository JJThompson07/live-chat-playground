import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const error = ref(null)

const logout = async () => {
    // reset the error
    error.value = null

    try {
        // request firebase user creation with email and password
        const res = await projectAuth.signOut()
        error.value = null

        return res
    } catch (err) {
        console.log(err.message)
        error.value = err.message
    }
}

const useLogout = () => {

    return { error, logout }
}

export default useLogout

import { auth } from '../firebase/firebase'
import Button from '@material-ui/core/Button'

export default function Logout() {

    const handleLogout = () => {
        auth.signOut()
    }

    return(
        <Button onClick={handleLogout} 
        fullWidth
        label="Continue"
        variant="contained"
        size="large"
        color="secondary" 
        >
            Logout
        </Button>
    )
}
import { render } from 'react-dom'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/omnweb.png" alt="Imagem Perfil" />
            <div>
                <strong>Neto MAtiazi</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    )
}
import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengesContext'
import styles from '../styles/components/ChallengeBox.module.css'
export function ChallengeBox() {

    const { activeChallenge } = useContext(ChallengesContext)
    return (
        <div className={styles.ChallengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.ChallengeActive}>
                    <header>Ganhe {activeChallenge.amount}xp </header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="Body" />
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                            className={styles.challengeFailedButton}
                            type="button"
                        >Falhei</button>
                        <button
                            className={styles.challengeCompletedButton}
                            type="button"
                        >Completei</button>
                    </footer>

                </div>
            ) : (
                    <div className={styles.ChallengeNotActive}>
                        <strong>Inicie um ciclo para receber desafios!</strong>

                        <p>
                            <img src="icons/level-up.svg" alt="Level Up" />
                Avance de level completando desafios.
            </p>
                    </div>
                )}
        </div>
    )
}
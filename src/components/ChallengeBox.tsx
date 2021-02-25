import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengesContext'
import { CountdownContext } from '../context/CountdownContex'
import styles from '../styles/components/ChallengeBox.module.css'
export function ChallengeBox() {

    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
    const { resetCountdown } = useContext(CountdownContext)

    function handlerChallengeCompleted() {
        completeChallenge()
        resetCountdown()
    }

    function handlerChallengeFailed() {
        resetChallenge()
        resetCountdown()
    }
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
                            onClick={handlerChallengeFailed}
                        >Falhei</button>
                        <button
                            type="button"
                            className={styles.challengeCompletedButton}
                            onClick={handlerChallengeCompleted}
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
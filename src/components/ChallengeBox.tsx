import styles from '../styles/components/ChallengeBox.module.css'
export function ChallengeBox() {
    const hasActiveChallenge = true
    return (
        <div className={styles.ChallengeBoxContainer}>
            {hasActiveChallenge ? (
                <div className={styles.ChallengeActive}>
                    <header>Ganhe 400xp</header>

                    <main>
                        <img src="icons/body.svg" alt="Body" />
                        <strong>Novo Desafio</strong>
                        <p>Levante e faça um aquecimento de 10 min</p>
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
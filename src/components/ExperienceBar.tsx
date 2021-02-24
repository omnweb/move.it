import { useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

    // regra de 3
    const percentToNextLevel = Math.round((currentExperience * 100)) / experienceToNextLevel
    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div >
                <div style={{ width: `${percentToNextLevel}%` }}></div>
                <span style={{ left: `${percentToNextLevel}%` }} className={styles.currentExperience}>{currentExperience} xp</span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    )
}
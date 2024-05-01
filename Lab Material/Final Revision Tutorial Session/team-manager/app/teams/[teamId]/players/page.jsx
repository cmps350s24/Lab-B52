import React from 'react'
import teamManagerRepo from "@/app/repo/teammanager-repo";
import styles from "@/app/page.module.css";
export default async function page({ params }) {
    const players = await teamManagerRepo.getTeamPlayers(params.teamId);
    return (
        <div className={styles.teamCards}>
            {
                players.map(player =>
                    <div className={styles.teamCard} key={player.id}>
                        <p className={styles.teamName}>Name :  {player.name}</p>
                        <p className={styles.teamInfo}>Position :  {player.position}</p>
                        <p className={styles.teamInfo}>jerseyNumber : {player.jerseyNumber}</p>
                    </div>
                )
            }
        </div>
    )
}

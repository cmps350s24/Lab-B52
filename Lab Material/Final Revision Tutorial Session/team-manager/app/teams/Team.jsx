'use client'
import React from 'react'
import styles from "@/app/page.module.css";
import { useRouter } from 'next/navigation'
import Link from 'next/link';

export default function Team({ teams }) {
    const router = useRouter()
    async function handleDelete(id) {
        const res = await fetch(`/api/teams/${id}`, { method: 'DELETE' })
        router.refresh()

    }
    return (
        <div className={styles.teamCards}>
            {
                teams.map(team =>
                    <div className={styles.teamCard} key={team.id}>
                        <p className={styles.teamName}>Name :  {team.name}</p>
                        <p className={styles.teamInfo}>City :  {team.city}</p>
                        <p className={styles.teamInfo}>Division : {team.division}</p>
                        <button onClick={e => handleDelete(team.id)}> Delete </button>
                        <Link href={`/teams/${team.id}/players`}>View Players</Link>
                    </div>
                )
            }
        </div>
    )
}

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class TeamManagerRepo {
    async addTeam(team) {
        try {
            return prisma.team.create({ data: team })
        } catch (error) {
            return { error: error.message }
        }
    }

    async addPlayer(player) {
        try {
            return prisma.player.create({ data: player })
        } catch (error) {
            return { error: error.message }
        }
    }

    async updateTeam(id, team) {
        try {
            return prisma.team.update(
                {
                    data: team,
                    where: { id }
                }
            )
        } catch (error) {
            return { error: error.message }
        }
    }
    async updatePlayer(id, player) {
        try {
            return prisma.player.update(
                {
                    data: player,
                    where: { id }
                }
            )
        } catch (error) {
            return { error: error.message }
        }
    }

    async deleteTeam(id) {
        try {
            return prisma.team.delete({ where: { id: id } })
        } catch (error) {
            return { error: error.message }
        }
    }
    async deletePlayer(id) {
        try {
            return prisma.player.delete({ where: { id: id } })
        } catch (error) {
            return { error: error.message }
        }
    }
    async getTeams() {
        try {
            return prisma.team.findMany()
        } catch (error) {
            return { error: error.message }
        }
    }
    async getTeam(id) {
        try {
            return prisma.team.findUnique({
                where: { id: id }
            })
        } catch (error) {
            return { error: error.message }
        }
    }
    async getTeamPlayers(teamId) {
        try {
            return prisma.player.findMany({
                where: { teamId: teamId }
            })
        } catch (error) {
            return { error: error.message }
        }
    }
}

export default new TeamManagerRepo()
import teamManagerRepo from "@/app/repo/teammanager-repo";

export async function GET(request, { params }) {
    const teamId = params.teamId;
    const players = await teamManagerRepo.getTeamPlayers(teamId);
    return Response.json(players, { status: 200 })
}
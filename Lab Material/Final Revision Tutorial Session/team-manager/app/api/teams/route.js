import teamManagerRepo from "@/app/repo/teammanager-repo";

export async function GET(request) {
    const teams = await teamManagerRepo.getTeams();
    return Response.json(teams, { status: 200 })
}

export async function POST(request) {
    const team = await request.json();
    const newTeam = await teamManagerRepo.addTeam(team)
    return Response.json(newTeam, { status: 201 })
}
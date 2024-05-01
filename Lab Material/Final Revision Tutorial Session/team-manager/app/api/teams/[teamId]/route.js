import teamManagerRepo from "@/app/repo/teammanager-repo";

export async function GET(request, { params }) {
    const teamId = params.teamId;
    const teams = await teamManagerRepo.getTeam(teamId);
    return Response.json(teams, { status: 200 })
}

export async function DELETE(request, { params }) {
    const teamId = params.teamId;
    const response = await teamManagerRepo.deleteTeam(teamId);
    return Response.json(response, { status: 200 })
}



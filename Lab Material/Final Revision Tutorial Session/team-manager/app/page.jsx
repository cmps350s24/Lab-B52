import Image from "next/image";

import teamManagerRepo from "@/app/repo/teammanager-repo";
import Team from '@/app/teams/Team'
export default async function Home() {
  const teams = await teamManagerRepo.getTeams();
  return (
    <>
      <Team teams={teams}></Team>
    </>
  );
}

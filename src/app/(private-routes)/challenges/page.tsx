import { HomeTemplate } from "@/modules/home/template/home";
import units from "@/data/units.json";

export default function Challenges() {
  return (
    <main>
      <HomeTemplate units={units.content}></HomeTemplate>
    </main>
  );
}

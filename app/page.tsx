import { redirect } from "next/navigation";
import { CONGRESS_HOME_PATH } from "@/config/navigation";

export default function Home(): never {
  redirect(CONGRESS_HOME_PATH);
}

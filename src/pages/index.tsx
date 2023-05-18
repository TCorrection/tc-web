import { TextField } from "@/components/TextField";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main>
        <div>
          <p>INIT</p>
          <TextField></TextField>
        </div>
      </main>
    </>
  );
}

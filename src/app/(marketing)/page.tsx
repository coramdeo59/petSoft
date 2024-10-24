import Image from "next/image";
import Logo from "@/components/Logo";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex  items-center justify-center gap-10 flex-col  xl:flex-row bg-[#5DC9A8] min-h-screen">
      <Image
        src="https://bytegrad.com/course-assets/react-nextjs/petsoft-preview.png"
        alt="preview of petSoft"
        width={519}
        height={472}
      />
        <div>
            <Logo/>
            <h1 className="text-5xl font-semibold my-6 max-w-[500px]">Manage your <span className="font-extrabold">pet daycare</span> with
                ease</h1>
            <p className="text-xl font-medium max-w-[600px]">use PetSoft to easily keep track of pets under your care.
                Get lifetime access for $299.</p>
            <div className="mt-10 space-x-3">

                <Button asChild>
                    <Link href='singup'>Get Started</Link>
                </Button>
                <Button asChild variant="secondary">
                    <Link href='login'>login</Link>
                </Button>

            </div>

        </div>

    </main>
  );
}
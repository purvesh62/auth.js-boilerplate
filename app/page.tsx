import {auth} from "@/server/auth";
import {redirect} from "next/navigation";
import Navbar from "@/components/navbar";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip"

export default async function Home() {
	const session = await auth()
	
	if (!session) redirect("/auth/login")
	console.log(session)
	return (
		<div>
			<Navbar/>
			<div className="flex flex-col gap-4 min-h-screen items-center justify-center">
				
				<h1 className={"text-2xl"}>
					<TooltipProvider>
						<Tooltip>
							
								<span
									className="text-2xl font-sans bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
									Welcome to the application <TooltipTrigger className={"underline"}>{session?.user?.name}</TooltipTrigger>!
								</span> 🎉
							<TooltipContent>
								<p className="text-lg">{session?.user?.email}</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider></h1>
				
				<p className={"text-lg font-sans"}>You&apos;re in the circle now! 😉</p>
			</div>
		</div>
	);
}

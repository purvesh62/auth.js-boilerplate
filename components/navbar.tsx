'use client'
import Link from "next/link";
import {signOut} from "next-auth/react"
import {ShieldCheck} from "lucide-react"
import {LogOut} from "lucide-react"

export default function Navbar() {
	return <div className={"h-14 w-full"}>
		<ul className={"flex items-center justify-between w-full h-full px-5"}>
			<li className={"text-lg cursor-pointer hover:text-violet-600"}>
				<Link href={"/"} className={"flex gap-2 items-center"}>
					<ShieldCheck size={24} className={"text-green-700"}/> Auth.js Boilerplate
				</Link>
			</li>
			<li>
				<button
					className={"flex gap-2 py-2 p-4 rounded-md group focus:bg-destructive/30 font-medium cursor-pointer" +
						" hover:bg-destructive/10 hover:text-destructive transition-all duration-300 ease-in-out"}
					onClick={() => signOut()}>
					<LogOut size={18}
					        className="group-hover:scale-75 transition-all duration-300 ease-in-out"
					/> Sign Out
				</button>
			</li>
		</ul>
	</div>
}
'use client'
// Hooks
import {useState} from "react"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import * as z from "zod"
import {useAction} from "next-safe-action/hooks"

// Types
import {RegisterSchema} from "@/types/register-schema";

// Components
import {AuthCard} from "@/components/auth/auth-card";
import {FormSuccess} from "@/components/auth/form-success";
import {FormError} from "@/components/auth/form-error";
import {emailRegister} from "@/server/actions/email-register";
import {Button} from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {cn} from "@/lib/utils";

export default function RegisterForm() {
	const [success, setSuccess] = useState("");
	const [error, setError] = useState("");
	
	const form = useForm<z.infer<typeof RegisterSchema>>({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			email: "",
			password: ""
		}
	})
	
	const {execute, status} = useAction(emailRegister, {
		onSuccess(data) {
			if (data?.success) {
				setSuccess(data.success)
			}
			if (data?.error) {
				setError(data.error)
			}
		},
		onError(error) {
		}
	})
	
	const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
		execute(values)
	}
	
	return (
		<AuthCard
			title={"Create an account"}
			backButtonHref={"/auth/login"}
			backButtonLabel={"Already have an account?"}
			showSocialLogins
		>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<FormField
						control={form.control}
						name="email"
						render={({field}) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input placeholder="email@cooldomain.com" autoComplete="email" {...field} />
								</FormControl>
								<FormMessage/>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="name"
						render={({field}) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input placeholder="Your name" autoComplete="name" {...field} />
								</FormControl>
								<FormMessage/>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({field}) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input placeholder="********" type={"password"}
									       autoComplete={"current-password"} {...field} />
								</FormControl>
								<FormMessage/>
							</FormItem>
						)}
					/>
					
					<FormSuccess message={success}/>
					<FormError message={error}/>
					
					<Button type="submit" className={cn(
						"w-full my-4",
						status === "executing" ? "animate-pulse" : "",
					)}>
						Register
					</Button>
				</form>
			</Form>
		</AuthCard>)
}
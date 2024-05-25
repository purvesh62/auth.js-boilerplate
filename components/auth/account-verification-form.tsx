"use client"
import {useCallback, useEffect, useState} from "react";
import {useSearchParams} from "next/navigation";
import {useRouter} from "next/navigation";
import {newVerification} from "@/server/actions/tokens";

import {AuthCard} from "@/components/auth/auth-card";
import {FormSuccess} from "@/components/auth/form-success";
import {FormError} from "@/components/auth/form-error";

export default function AccountVerificationForm() {
	const token = useSearchParams().get("token")
	const router = useRouter()
	const [success, setSuccess] = useState("")
	const [error, setError] = useState("")
	
	const handleVerification = useCallback(() => {
		if (success || error) return
		
		if (!token) {
			setError("Invalid token")
		}
		console.log("Token", token);
		newVerification(token as string).then((data) => {
			if (data.error) {
				setError(data.error)
			}
			if (data.success) {
				setSuccess(data.success)
				router.push("/auth/login")
			}
		})
	}, [])
	
	useEffect(() => {
		handleVerification()
	}, [])
	
	return <AuthCard
		title={"Verify your account"}
		backButtonHref={"/auth/login"}
		backButtonLabel={"Back to login"}
	>
		<div>
			<p>{!success && !error ? "Verifying email..." : null}</p>
			<FormSuccess message={success}/>
			<FormError message={error}/>
		</div>
	</AuthCard>
}
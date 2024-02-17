import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import LandingLayout from "@/layouts/landing.layout";

export default function withAuth(Component) {
	return function ProtectedRoute({ ...props }) {
		const router = useRouter();
		const success = useSelector((state) => state.user.user);
		// const userIsAuthenticated = user !== null;

		useEffect(() => {
			if (!success) {
				router.push("/auth/sign-in");
			}
		}, [success, router]);

		return (
			<LandingLayout>
				<Component {...props} />
			</LandingLayout>
		);
	};
}

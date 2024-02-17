import { Flex, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import publicPaths from "../data/publicPaths";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { setRedirectLink } from "../redux/AuthSlice";
import { useEffect, useState } from "react";

const RouteGuard = (prop) => {
	const { children } = props;

	const router = useRouter();
	const [authorized, setAuthorized] = useState(false);
	const user = useAppSelector((state) => state.auth);

	const dispatch = useAppDispatch();

	useEffect(() => {
		const authCheck = () => {
			if (
				!user.isLoggedIn &&
				!publicPaths.includes(router.asPath.split("?")[0])
			) {
				setAuthorized(false);
				dispatch(setRedirectLink({ goto: router.asPath }));
				void router.push({
					pathname: "/login",
				});
			} else {
				setAuthorized(true);
			}
		};

		authCheck();

		const preventAccess = () => setAuthorized(false);

		router.events.on("routeChangeStart", preventAccess);
		router.events.on("routeChangeComplete", authCheck);

		return () => {
			router.events.off("routeChangeStart", preventAccess);
			router.events.off("routeChangeComplete", authCheck);
		};
	}, [dispatch, router, router.events, user]);

	return authorized ? (
		children
	) : (
		<Flex h="100vh" w="100vw" justifyContent="center" alignItems="center">
			<Spinner size="xl" />
		</Flex>
	);
};

export default RouteGuard;

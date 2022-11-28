import { useRouter } from "next/router"
import { Dispatch, SetStateAction } from "react"

import { List, SVG, useMantineTheme } from "@doggo/ui"

import { ListItem } from "./ListItem"

interface Props {
	setNavbarIsOpen: Dispatch<SetStateAction<boolean>>
}

export const NavList = ({ setNavbarIsOpen }: Props) => {
	const { pathname } = useRouter()
	const { colors, spacing } = useMantineTheme()

	return (
		<List
			styles={{
				root: { listStyle: "none", flex: 1 },
				item: { paddingBottom: spacing.xs },
			}}>
			<List.Item>
				<ListItem
					setNavbarIsOpen={setNavbarIsOpen}
					isActive={pathname === "/dashboard"}
					icon={<SVG.Home width="4rem" fill={colors.teal[1]} stroke={colors.teal[6]} />}
					buttonLabel="Dashboard"
					path="/dashboard"
				/>
			</List.Item>
			<List.Item>
				<ListItem
					setNavbarIsOpen={setNavbarIsOpen}
					isActive={pathname.includes("/trials")}
					icon={<SVG.Calendar width="4rem" fill={colors.teal[1]} stroke={colors.teal[6]} />}
					buttonLabel="My Trials"
					path="/dashboard/trials"
					subItems={[
						{ title: "Upcoming", path: "/upcoming" },
						{ title: "Saved", path: "/saved" },
						{ title: "Past", path: "/past" },
					]}
				/>
			</List.Item>
			<List.Item>
				<ListItem
					setNavbarIsOpen={setNavbarIsOpen}
					isActive={pathname.includes("/my-dogs")}
					icon={<SVG.Paw width="4rem" fill={colors.teal[1]} stroke={colors.teal[6]} />}
					buttonLabel="My Dogs"
					path="/dashboard/my-dogs"
				/>
			</List.Item>
			<List.Item>
				<ListItem
					setNavbarIsOpen={setNavbarIsOpen}
					isActive={pathname.includes("/trophy-case")}
					icon={<SVG.AwardRibbon width="4rem" fill={colors.teal[1]} stroke={colors.teal[6]} />}
					buttonLabel="Trophy Case"
					path="/dashboard/trophy-case"
				/>
			</List.Item>
		</List>
	)
}

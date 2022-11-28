import { colors } from "."
import { Group } from "../../../../atoms/Group"
import { Paper } from "../../../../atoms/Paper"
import { Stack } from "../../../../atoms/Stack"
import { Text } from "../../../../atoms/Text"

export default {
	title: "Colors",
	component: <div />,
}

export const Colors = () => (
	<Stack spacing="xl">
		<Group>
			<Text>Orange</Text>
			{colors.orange.map((g: string) => (
				<Stack>
					<Text>{g}</Text>
					<Paper sx={{ padding: 12, backgroundColor: g }} />
				</Stack>
			))}
		</Group>
		<Group>
			<Text>Anchor</Text>
			{colors.anchor.map((g: string) => (
				<Stack>
					<Text>{g}</Text>
					<Paper sx={{ padding: 12, backgroundColor: g }} />
				</Stack>
			))}
		</Group>
		<Group>
			<Text>Charcoal</Text>
			{colors.charcoal.map((g: string) => (
				<Stack>
					<Text>{g}</Text>
					<Paper sx={{ padding: 12, backgroundColor: g }} />
				</Stack>
			))}
		</Group>
		<Group>
			<Text>Cloud</Text>
			{colors.eggshell.map((g: string) => (
				<Stack>
					<Text>{g}</Text>
					<Paper sx={{ padding: 12, backgroundColor: g }} />
				</Stack>
			))}
		</Group>
		<Group>
			<Text>Light Orange</Text>
			{colors.lightOrange.map((g: string) => (
				<Stack>
					<Text>{g}</Text>
					<Paper sx={{ padding: 12, backgroundColor: g }} />
				</Stack>
			))}
		</Group>
		<Group>
			<Text>Red</Text>
			{colors.red.map((g: string) => (
				<Stack>
					<Text>{g}</Text>
					<Paper sx={{ padding: 12, backgroundColor: g }} />
				</Stack>
			))}
		</Group>
		<Group>
			<Text>Green</Text>
			{colors.green.map((g: string) => (
				<Stack>
					<Text>{g}</Text>
					<Paper sx={{ padding: 12, backgroundColor: g }} />
				</Stack>
			))}
		</Group>
	</Stack>
)

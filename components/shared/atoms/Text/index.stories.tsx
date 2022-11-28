import { Text } from "."
import { Group } from "../Group"
import { Stack } from "../Stack"

export default {
	title: "Typography/Text",
	component: Text,
}

export const Default = () => (
	<Group spacing="xl">
		<Stack>
			<Text fontSize="xxs">Extra Extra Small</Text>
			<Text fontSize="xxs" boldness="semibold">
				Extra Extra Semibold
			</Text>
			<Text fontSize="xs">Extra Extra Semibold</Text>
		</Stack>
		<Stack>
			<Text fontSize="xs">Extra Small</Text>

			<Text fontSize="xs" italic>
				Extra Small Italic
			</Text>

			<Text fontSize="xs" boldness="semibold">
				Extra Small Semibold
			</Text>
			<Text fontSize="xs" boldness="bold">
				Extra Small Bold
			</Text>
		</Stack>
		<Stack>
			<Text fontSize="sm">Small</Text>
			<Text fontSize="sm" italic>
				Small Italic
			</Text>
			<Text fontSize="sm" boldness="semibold">
				Small Semibold
			</Text>
			<Text fontSize="sm" boldness="bold">
				Small Bold
			</Text>
		</Stack>
		<Stack>
			<Text fontSize="md">Medium</Text>
			<Text fontSize="md" italic>
				Medium Italic
			</Text>
			<Text fontSize="md" boldness="semibold">
				Medium Semibold
			</Text>
			<Text fontSize="md" boldness="bold">
				Medium Bold
			</Text>
		</Stack>
		<Stack>
			<Text fontSize="lg">Large</Text>
			<Text fontSize="lg" italic>
				Large Italic
			</Text>
			<Text fontSize="lg" boldness="semibold">
				Large Semibold
			</Text>
			<Text fontSize="lg" boldness="bold">
				Large Bold
			</Text>
		</Stack>
		<Stack>
			<Text fontSize="xl">Extra Large</Text>
			<Text fontSize="xl" italic>
				Extra Large Italic
			</Text>
			<Text fontSize="xl" boldness="semibold">
				Extra Large Semibold
			</Text>
			<Text fontSize="xl" boldness="bold">
				Extra Large Bold
			</Text>
		</Stack>
	</Group>
)

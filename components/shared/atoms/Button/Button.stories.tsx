import { Button } from "."
import { SVG } from "../SVG"
import { Stack } from "../Stack"
import { Text } from "../Text"

export default {
	title: "Atoms/Button",
	component: Button,
}

export const Default = () => (
	<Stack>
		<Text>Size: Medium</Text>
		<Button>Button</Button>
		<Button leftIcon={<SVG.Checkmark />}>Button</Button>
		<Button disabled>Button</Button>
		<Button compact>Button</Button>
		<Button compact leftIcon={<SVG.Checkmark />}>
			Button
		</Button>
		<Button compact rightIcon={<SVG.Carat direction="down" />}>
			Button
		</Button>
	</Stack>
)

export const Subtle = () => (
	<Stack>
		<Text>Size: Medium</Text>
		<Button variant="subtle">Button</Button>
		<Button variant="subtle" leftIcon={<SVG.Checkmark />}>
			Button
		</Button>
		<Button variant="subtle" disabled>
			Button
		</Button>
		<Button variant="subtle" compact>
			Button
		</Button>
		<Button variant="subtle" compact leftIcon={<SVG.Checkmark />}>
			Button
		</Button>
		<Button variant="subtle" compact rightIcon={<SVG.Carat direction="down" />}>
			Button
		</Button>
	</Stack>
)

export const Outline = () => (
	<Stack>
		<Text>Size: Medium</Text>
		<Button variant="outline">Button</Button>
		<Button variant="outline" leftIcon={<SVG.Checkmark />}>
			Button
		</Button>
		<Button variant="outline" disabled>
			Button
		</Button>
		<Button variant="outline" compact>
			Button
		</Button>
		<Button variant="outline" compact leftIcon={<SVG.Checkmark />}>
			Button
		</Button>
		<Button variant="outline" compact rightIcon={<SVG.Carat direction="down" />}>
			Button
		</Button>
	</Stack>
)

import { Title } from "."
import { Stack } from "../Stack"

export default {
	title: "Typography/Title",
	component: Title,
}

export const Default = () => (
	<Stack>
		<Title fontSize="d1">Display 1</Title>
		<Title fontSize="d2">Display 2</Title>
		<Title fontSize="h1">Headline 1</Title>
		<Title fontSize="h2">Headline 2</Title>
		<Title fontSize="h3">Headline 3</Title>
		<Title fontSize="h4">Headline 4</Title>
		<Title fontSize="h5">Headline 5</Title>
		<Title fontSize="h6">Headline 6</Title>
	</Stack>
)

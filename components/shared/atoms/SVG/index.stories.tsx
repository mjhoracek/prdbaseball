/* eslint-disable @typescript-eslint/ban-ts-comment */
import { SimpleGrid } from "@mantine/core"

import { SVG } from "."
import { colors } from "../../shared/MantineProvider/styles/colors"
import { Box } from "../Box"
import { Stack } from "../Stack"
import { Text } from "../Text"

export default {
	title: "Icons",
	component: SVG,
}

const icons = [
	{ name: "AlertCircle", Comp: SVG.AlertCircle },
	{ name: "Checkmark", Comp: SVG.Check },
	{ name: "CheckCircle", Comp: SVG.CheckCircle },
	{ name: "ClipboardBlank", Comp: SVG.ClipboardBlank },
	{ name: "Clock", Comp: SVG.Clock },
	{ name: "Cog", Comp: SVG.Cog },
	{ name: "Copy", Comp: SVG.Copy },
	{ name: "Copyright", Comp: SVG.Copyright },
	{ name: "Drag", Comp: SVG.Drag },
	{ name: "MousePointer", Comp: SVG.MousePointer },
	{ name: "Home", Comp: SVG.Home },
	{ name: "DollarSign", Comp: SVG.DollarSign },
	{ name: "Exit", Comp: SVG.Exit },
	{ name: "Export", Comp: SVG.Export },
	{ name: "Facebook", Comp: SVG.Facebook },
	{ name: "Google", Comp: SVG.Google },
	{ name: "Heart", Comp: SVG.Heart },
	{ name: "HelpCircle", Comp: SVG.HelpCircle },
	{ name: "Homeplate", Comp: SVG.HomePlate },
	{ name: "Info", Comp: SVG.Info },
	{ name: "Lock", Comp: SVG.Lock },
	// { name: "Marker", Comp: SVG.Marker },
	{ name: "MiniField", Comp: SVG.MiniField },
	{ name: "ThreeDots", Comp: SVG.ThreeDots },
	{ name: "FileMinus", Comp: SVG.FileMinus },
	{ name: "FileText", Comp: SVG.FileText },
	{ name: "Pencil", Comp: SVG.Pencil },
	{ name: "Percent", Comp: SVG.Percent },
	{ name: "PieChart", Comp: SVG.PieChart },
	{ name: "Plus", Comp: SVG.Plus },
	{ name: "Search", Comp: SVG.Search },
	{ name: "Share", Comp: SVG.Share },
	{ name: "Twitter", Comp: SVG.Twitter },
	{ name: "User", Comp: SVG.User },
	{ name: "Users", Comp: SVG.Users },
	{ name: "X", Comp: SVG.X },
	{ name: "Yakkertech", Comp: SVG.YakkertechSquareLogo },
]

export const Icons = () => (
	<SimpleGrid cols={3} spacing="xl">
		{icons.map((Icon) => (
			<Stack
				key={Icon.name}
				align="center"
				sx={{ paddingBottom: 24, borderBottom: `2px solid ${colors.anchor[0]}` }}>
				<Text fontSize="md">{Icon.name}</Text>
				<Box sx={{ width: 24, height: 24 }}>
					{/** @ts-ignore */}
					<Icon.Comp {...Icon.props} />
				</Box>
			</Stack>
		))}
	</SimpleGrid>
)

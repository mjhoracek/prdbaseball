import { IconBaseProps } from "react-icons";
import { BiCopyright } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import {
  FiX,
  FiArrowLeft,
  FiArrowUp,
  FiArrowDown,
  FiArrowRight,
  FiAlertCircle,
  FiDownload,
  FiCheck,
  FiUsers,
  FiUser,
  FiShare,
  FiPlus,
  FiHome,
  FiClock,
  FiCopy,
  FiCheckCircle,
  FiEdit2,
  FiClipboard,
  FiMoreHorizontal,
  FiSettings,
  FiSearch,
  FiMenu,
  FiMousePointer,
  FiDollarSign,
  FiHeart,
  FiHelpCircle,
  FiInfo,
  FiLock,
  FiFileMinus,
  FiFileText,
  FiPercent,
  FiPieChart,
  FiCalendar,
  FiInstagram,
  FiYoutube,
} from "react-icons/fi";
import { SiOkta, SiFacebook, SiTwitter } from "react-icons/si";
import {
  VscCircleFilled,
  VscTriangleUp,
  VscTriangleDown,
} from "react-icons/vsc";

import { HomePlate } from "./HomePlate";
import { MiniField } from "./MiniField";
import { GhostLogo } from "./GhostLogo";

export const SVG = {
  Instagram: FiInstagram,
  Youtube: FiYoutube,
  GhostLogo: GhostLogo,
  AlertCircle: FiAlertCircle,
  ArrowDown: FiArrowDown,
  ArrowLeft: FiArrowLeft,
  ArrowRight: FiArrowRight,
  ArrowUp: FiArrowUp,
  Calendar: FiCalendar,
  Check: FiCheck,
  CheckCircle: FiCheckCircle,
  Clipboard: FiClipboard,
  ClipboardBlank: FiClipboard,
  Clock: FiClock,
  Cog: FiSettings,
  Copy: FiCopy,
  Copyright: BiCopyright,
  DollarSign: FiDollarSign,
  Download: FiDownload,
  Dot: VscCircleFilled,
  Drag: FiMenu,
  Exit: (props: IconBaseProps) => (
    <FiShare style={{ transform: "translate(-90deg)" }} {...props} />
  ),
  Export: FiShare,
  Facebook: SiFacebook,
  FileMinus: FiFileMinus,
  FileText: FiFileText,
  Google: FcGoogle,
  Heart: FiHeart,
  HelpCircle: FiHelpCircle,
  Home: FiHome,
  HomePlate,
  Info: FiInfo,
  Lock: FiLock,
  MiniField,
  MousePointer: FiMousePointer,
  Okta: (props: IconBaseProps) => <SiOkta fill={"#1F68DE"} {...props} />,
  TriangleUp: VscTriangleUp,
  TriangleDown: VscTriangleDown,
  Pencil: FiEdit2,
  Percent: FiPercent,
  PieChart: FiPieChart,
  Plus: FiPlus,
  Search: FiSearch,
  Share: FiShare,
  ThreeDots: FiMoreHorizontal,
  Twitter: SiTwitter,
  User: FiUser,
  Users: FiUsers,
  X: FiX,
};

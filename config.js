import { BsFacebook, BsYoutube } from "react-icons/bs";
import { CgCrown } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { MdAddModerator } from "react-icons/md";
import { SiProbot } from "react-icons/si";
import { TbMessage2Code } from "react-icons/tb";
const config = {
  name: "Lightny",
  inviteLink:
    "https://discord.com/oauth2/authorize?client_id=879602399067660338&permissions=8&scope=bot&redirect_uri=https://docs.markos.ga&response_type=code",
  Features: [
    {
      name: "Moderation",
      description:
        "Moderation can help your server from people breaking rules, being disrespectful, etc.",
      logo: <MdAddModerator className="h-10 w-10" />,
    },
    {
      name: "99% Uptime",
      description:
        "Our bot is online 99% of the time!",
      logo: <SiProbot className="h-10 w-10" />,
    },
    {
      name: "Automoderation",
      description:
        "Automoderation protects you server from people spamming messages, ping, etc.",
      logo: <TbMessage2Code className="h-10 w-10" />,
    },
    {
      name: "Welcomer",
      description:
        "Welcomer is the person who greet the new person in an unique and great way.",
      logo: <CgCrown className="h-10 w-10" />,
    },
    // You can added more features if need add
  ],
  //Bot Features
  serverCount: 12, //-  - Your
  memberCount: 388, //--   - Bot
  executedCommand: 1085, //--  - Stats
  availableCommand: 44, //---   - Here
  discordLogo: (
    <FaDiscord className="h-10 w-10 text-[#738adb] hover:scale-125 easeIn cursor-pointer" />
  ),
  youTubeLogo: (
    <BsYoutube className="h-10 w-10 text-[#FF0000] hover:scale-125 easeIn cursor-pointer" />
  ),
  //----------------------------------------------------------------
  // Your social handle links
  discordLink: "https://discord.gg/K349BbTvVm",
  youtubeLink: "https://youtube.com/@silvxrcoding",
};

export default config;

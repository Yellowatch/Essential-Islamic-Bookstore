import {
    FiGithub,
    FiTwitter,
    FiLinkedin,
    FiGlobe,
    FiYoutube,
    FiInstagram,
} from "react-icons/fi";

const socialLinks = [
    {
        id: 1,
        icon: <FiGlobe />,
        url: "https://www.stoman.me/",
    },
    {
        id: 2,
        icon: <FiInstagram />,
        url: "https://github.com/",
    },
    {
        id: 3,
        icon: <FiTwitter />,
        url: "https://twitter.com/",
    },
    {
        id: 4,
        icon: <FiLinkedin />,
        url: "https://www.linkedin.com/in/salih-bak-8b34a171/?originalSubdomain=au",
    },
    // {
    //   id: 5,
    //   icon: <FiYoutube />,
    //   url: "https://www.youtube.com/c/",
    // },
];

const Footer = () => {
    return (
        <section className="bg-gray-900">
            <div className="container mx-auto">
                <div className="pt-10 sm:pt-30 pb-8">
                    {/* Footer social links */}
                    <div className="font-general-regular flex flex-col justify-center items-center">
                        <ul className="flex gap-4 sm:gap-8 p-0">
                            {socialLinks.map((link) => (
                                <a
                                    href={link.url}
                                    target="__blank"
                                    key={link.id}
                                    className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-zinc-900 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
                                >
                                    <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
                                </a>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
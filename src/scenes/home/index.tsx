import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageText from '@/assets/HomePageText.png'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponserRedbull from '@/assets/SponsorRedBull.png'
import SponserForbes from '@/assets/SponsorForbes.png'
import SponserFortune from '@/assets/SponsorFortune.png'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}
const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
    return (
        <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0 md:pt-32">
            {/* Image and main header */}
            <motion.dev
                className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
                onVeiwportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
                {/*  main header */}
                <motion.div
                    className="z-10 mt-32 md:basis-3/5"
                    initial="hidden"
                    whileInView="visible"
                    Veiwport={{ once: true, amount: 0.5 }}
                    transition={{ ease: "easeOut", duration: 2 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    {/* Heading */}
                    <motion.div className="md:-mt-20 ">
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext ">
                                <img alt="home-page-text" src={HomePageText} />
                            </div>
                        </div>
                        <p className="mt-8 text-sm">
                            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                            Studios to get the Body Shapes That you Dream of.. Get Your Dream
                            Body Now.
                        </p>
                    </motion.div>
                    {/* Actions */}
                    <motion.div
                        className="mt-8 flex items-center gap-8"
                        initial="hidden"
                        whileInView="visible"
                        Veiwport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 2 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                        <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}
                        >
                            <p>Learn More</p>
                        </AnchorLink>
                    </motion.div>
                </motion.div>

                {/* Image */}
                <div className="flex basis-3/5 justify-center md:z-10
                md:ml-40 md:mt-16 md:justify-items-end">
                    <img alt="Home-graphic" src={HomePageGraphic} />
                </div>
            </motion.dev>
            {/* Sponsers */}

            <div className="h-[100px] w-full bg-primary-100 mt-24 flex items-center ">
                <div className="mx-auto w-5/6 flex items-center md:justify-center">
                    <div className="flex w-3/5 items-center justify-between gap-8">
                        <img alt="Sponser-redbull" src={SponserRedbull} className="w-20 md:w-fit" />
                        <img alt="Sponser-forbes" src={SponserForbes} className="w-20 md:w-fit" />
                        <img alt="Sponser-fortune" src={SponserFortune} className="w-20 md:w-fit" />
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Home;



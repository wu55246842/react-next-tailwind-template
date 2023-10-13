import styles from "./style";

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.Laowudi.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.Laowudi.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.Laowudi.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.Laowudi.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.Laowudi.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.Laowudi.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.Laowudi.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.Laowudi.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.Laowudi.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.Laowudi.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.Laowudi.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.Laowudi.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: '/img/layout/instagram.svg',
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: '/img/layout/facebook.svg',
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: '/img/layout/twitter.svg',
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: '/img/layout/linkedin.svg',
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: '/img/layout/airbnb.png',
  },
  {
    id: "client-2",
    logo: '/img/layout/binance.png',
  },
  {
    id: "client-3",
    logo: '/img/layout/coinbase.png',
  },
  {
    id: "client-4",
    logo: '/img/layout/dropbox.png',
  },
];

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src='/img/layout/laowudi_fish.png'
          alt="Laowudi"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
        Bridging Ingenuity and Learning.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2022 Laowudi. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
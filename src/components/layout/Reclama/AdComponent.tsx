import { FC, useEffect, useState } from "react";
import scss from "./AdComponent.module.scss";

interface Ad {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  background: string;
}

const ads: Ad[] = [
  {
    id: 1,
    title: "Explore the Future with Nexus Phones!",
    description:
      "Upgrade to the latest Nexus phone with an unbeatable camera and 5G connectivity. Limited-time offer available now!",
    buttonText: "Shop Now",
    background: "#FFEECC",
  },
  {
    id: 2,
    title: "Boost Your Productivity with FlowApp!",
    description:
      "The all-in-one task manager and productivity tracker. Try it today and get a free premium trial for 30 days!",
    buttonText: "Try for Free",
    background: "#CCE5FF",
  },
  {
    id: 3,
    title: "Your Dream Vacation Awaits!",
    description:
      "Book an all-inclusive trip to the Maldives. Enjoy white sandy beaches, crystal clear waters, and luxury stays!",
    buttonText: "Book Now",
    background: "#CCFFCC",
  },
];

const AdComponent: FC = () => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  // Меняем рекламу каждые 5 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, 5000); // 5000ms = 5 секунд

    // Очищаем интервал при размонтировании компонента
    return () => clearInterval(interval);
  }, []);

  const currentAd = ads[currentAdIndex];

  return (
    <div
      className={scss.adCard}
      style={{ backgroundColor: currentAd.background }}
    >
      <h2 className={scss.adTitle}>{currentAd.title}</h2>
      <p className={scss.adDescription}>{currentAd.description}</p>
      <button className={scss.adButton}>{currentAd.buttonText}</button>
    </div>
  );
};

export default AdComponent;

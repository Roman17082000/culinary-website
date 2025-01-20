import React, { useState } from "react";
import Modal from "../../../../components/UI/Modal/Modal.tsx";
import "./UsefulInfo.scss";

const UsefulInfo: React.FC = () => {
  const [activeTab, setActiveTab] = useState("tips");
  const [modalContent, setModalContent] = useState<string | null>(null);

  const infoData = {
    tips: [
      {
        title: "Eat More Vegetables",
        detail:
          "Vegetables provide essential vitamins, minerals, and fiber for your body.",
      },
      {
        title: "Drink Enough Water",
        detail:
          "Drinking 8-10 glasses of water daily helps maintain hydration and body functions.",
      },
      {
        title: "Avoid Processed Foods",
        detail:
          "Processed foods often contain high levels of sugar, fat, and preservatives.",
      },
    ],
    facts: [
      {
        title: "Bananas Are Berries",
        detail: "Botanically, bananas are berries, while strawberries are not.",
      },
      {
        title: "Honey Never Spoils",
        detail:
          "Honey has natural preservatives, allowing it to last for thousands of years.",
      },
      {
        title: "Spicy Foods Boost Metabolism",
        detail:
          "Capsaicin in chili peppers increases metabolic rate temporarily.",
      },
    ],
    myths: [
      {
        title: "Eating Fat Makes You Fat",
        detail:
          "Healthy fats are essential for your body and do not directly cause weight gain.",
      },
      {
        title: "Microwaving Food Destroys Nutrients",
        detail: "Microwaving retains more nutrients compared to boiling.",
      },
      {
        title: "Carbs Are Bad for You",
        detail:
          "Carbohydrates are a vital energy source and necessary for a balanced diet.",
      },
    ],
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const openModal = (detail: string) => {
    setModalContent(detail);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <section className="useful-info">
      <h2>Useful Information About Food</h2>
      <div className="tabs">
        {Object.keys(infoData).map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => handleTabChange(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <div className="info-cards">
        {infoData[activeTab as keyof typeof infoData].map((item, index) => (
          <div
            key={index}
            className="info-card"
            onClick={() => openModal(item.detail)}
          >
            <h3>{item.title}</h3>
            <button className="detail-button">Learn More</button>
          </div>
        ))}
      </div>
      <Modal
        content={modalContent || ""}
        isOpen={!!modalContent}
        onClose={closeModal}
      />
    </section>
  );
};

export default UsefulInfo;

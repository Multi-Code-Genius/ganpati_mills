"use client";
import GSAPWrapper from "@layouts/components/GSAPWrapper";
import { getFabrics } from "@lib/hygraph";
import React, { useEffect, useState } from "react";

const FabricPage = () => {
  const [fabricQuality, setFabricQuality] = useState([]);

  useEffect(() => {
    const fetchFabrics = async () => {
      const fabrics = await getFabrics();
      setFabricQuality(fabrics);
    };
    fetchFabrics();
  }, []);

  console.log("fabricQuality", fabricQuality);

  return (
    <GSAPWrapper>
      <div className="bg-white">
        <section className="section">
          <div className="container">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-dark mb-4">
                Our Fabric Collection
              </h1>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Discover our curated selection of high-quality fabrics, designed
                to meet the diverse needs of our customers. Each fabric is
                crafted with precision and care to ensure the best possible
                results for your projects.
              </p>
            </div>
            <div className="space-y-20">
              {fabricQuality.map((fabric, index) => (
                <div
                  key={fabric.id}
                  className={`animate group flex flex-col md:flex-row items-center overflow-hidden rounded-2xl bg-gray-50 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="lg:w-2/5">
                    <img
                      src={fabric.image ? fabric.image.url : "/images/logo.jpg"}
                      alt={fabric.name}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/images/logo.jpg";
                      }}
                    />
                  </div>
                  <div className="lg:w-3/5 p-8 lg:p-12">
                    <h2 className="text-3xl font-bold text-dark mb-4">
                      {fabric.name}
                    </h2>
                    <p className="text-gray-600 mb-6 text-base leading-relaxed">
                      {fabric.description}
                    </p>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4 border-t border-gray-200 pt-6">
                      <div>
                        <p className="text-sm font-semibold text-gray-500">
                          Type
                        </p>
                        <p className="text-lg font-medium text-dark">
                          {fabric.type}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-500">
                          Purchase Rate
                        </p>
                        <p className="text-lg font-medium text-dark">
                          ${fabric.purchaseRate.toFixed(2)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-500">
                          Reorder Level
                        </p>
                        <p className="text-lg font-medium text-dark">
                          {fabric.reorderLevel}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-500">
                          GSM/Percent
                        </p>
                        <p className="text-lg font-medium text-dark">
                          {fabric.percent}%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </GSAPWrapper>
  );
};

export default FabricPage;

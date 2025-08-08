"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setTimeout(() => setShow(true), 10);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => setIsOpen(false), 300);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${show ? "opacity-100" : "opacity-0"}`}
      onClick={handleOverlayClick}
    >
      <div
        className={`relative w-full max-w-4xl mx-4 transform transition-all duration-300 ease-in-out ${show ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
        style={{ maxHeight: "800px" }}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-black text-4xl z-10 bg-white rounded-full h-10 w-10 flex items-center justify-center leading-none"
          style={{ cursor: "pointer" }}
        >
          &times;
        </button>
        <div
          onClick={() => (
            router.push("/services/digital-printing"),
            setShow(false)
          )}
          passHref
        >
          <div className="cursor-pointer">
            <Image
              src="/images/logo.jpg"
              alt="Promotional Popup"
              width={1200}
              height={800}
              className="object-cover w-full h-full rounded-lg"
              style={{ maxHeight: "800px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;

import React from "react";
import Image from "next/image";

// ResponceTodoT interfeysini to'g'ri import yoki qayta aniqlash
export interface ResponceTodoT {
  title?: string;
  description?: string;
  image: string;
  id: number;
}

// Banner komponenti
export const Banner: React.FC<ResponceTodoT> = ({ title, image }) => {
  return (
    <div className="banner">
      {/* Rasmni ko'rsatish */}
      <Image
        width={870}
        height={460}
        quality={100}
        priority
        src={image}
        alt={title || "Banner image"}
      />
      {/* Sarlavhani ko'rsatish (agar mavjud bo'lsa) */}
      {title && <h2 className="banner-title">{title}</h2>}
    </div>
  );
};

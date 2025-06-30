"use client";

export default function loader({ src, width, quality }) {
  const params = ["f_auto", "c_limit", `w_${width}`, `q_${quality || "auto"}`];

  // Eğer harici bir kaynaktan resimse, doğrudan URL'yi döndür
  if (src.startsWith("https://images.pexels.com")) return src;

  // Public klasöründeki resimleri çekmek için doğru URL yapısı
  return `${src}?${params.join(",")}`;
}


/* 
DOMAIN NAME: https://new-portfolio-7y6w.vercel.app/  
*/
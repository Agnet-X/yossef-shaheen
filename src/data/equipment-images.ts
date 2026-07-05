/** Per-item images from PRO MEDIA Company Profile PDF (pages 25–33). */
export const equipmentImages: Record<string, string> = {
  "RED KOMODO 6K Cinema Camera": "/images/equipment/equip_p25_img1.png",
  "Sony FX6 Full-Frame Cinema Camera": "/images/equipment/equip_p25_img2.png",
  "Sony ILME-FX3 Full-frame Cinema Line Camera":
    "/images/equipment/equip_p25_img3.png",

  "DZOFilm VESPID 6-Lens Kit A (PL & EF Mounts)":
    "/images/equipment/equip_p26_img1.png",
  "Sony SEL-70-200 Lens F2.8 GM OSS II": "/images/equipment/equip_p26_img2.png",
  "Sony SEL2470GM FE 24-70mm F2.8 GM Lens":
    "/images/equipment/equip_p26_img3.png",
  "Sony FE 50mm F1.2": "/images/equipment/equip_p26_img4.png",
  "Venus Optics Laowa 24mm f/14 Probe Lens for Sony E":
    "/images/equipment/equip_p27_img1.png",

  "DJI RS3 Combo Gimbal Stabilizer": "/images/equipment/equip_p27_img3.png",
  "DJI Ronin MX Professional Combo": "/images/equipment/equip_p27_img2.png",
  "SmallRig Sony FX6 Shoulder Kit": "/images/equipment/equip_p27_img4.png",
  "Slider PLUS Manual Long": "/images/equipment/equip_p28_img1.png",
  "Tilta Camera Cage for Sony FX3/FX30 V2 Pro Kit":
    "/images/equipment/equip_p28_img2.png",
  "Manfrotto Tripod": "/images/equipment/equip_p28_img3.png",

  "Nanlite Forza 200 Daylight LED Monolight":
    "/images/equipment/equip_p28_img4.png",
  "Aputure LS 600d Pro Light Storm Daylight LED Light (V-Mount)":
    "/images/equipment/equip_p28_img5.png",
  "Nanlite PavoTube II 6C 10in RGBWW LED Tube":
    "/images/equipment/equip_p28_img6.png",
  "Nanlite Pavotube II 30X 2KIT RGB Tubelight":
    "/images/equipment/equip_p29_img1.png",
  "Eurolite LED PLL-480 CW/WW Panel": "/images/equipment/equip_p29_img2.png",
  "PL-S150D 150W RGB-color Studio SMD LED Light":
    "/images/equipment/equip_p29_img3.png",
  "Aputure Light Dome 150 Softbox": "/images/equipment/equip_p30_img1.png",
  "Manfrotto EzyFrame Background 2 × 2.3m Black":
    "/images/equipment/equip_p30_img2.png",
  "Glide Gear Butterfly": "/images/equipment/equip_p30_img3.png",
  "C-stand With Heavy Duty": "/images/equipment/equip_p30_img4.png",
  "LIGHT Combo Stand": "/images/equipment/equip_p30_img5.png",

  "DJI FPV Drone": "/images/equipment/equip_p31_img1.png",
  "DJI Mavic 3 Pro Drone": "/images/equipment/equip_p31_img2.png",
  "DJI Mini 4 Pro": "/images/equipment/equip_p31_img3.png",
  "Insta360 X3 Waterproof 360 Action Camera":
    "/images/equipment/equip_p31_img4.png",

  "Zoom F8n Pro": "/images/equipment/equip_p32_img1.png",
  "BOOM MIC": "/images/equipment/equip_p32_img2.png",
  "Sennheiser Wireless Microphone": "/images/equipment/equip_p32_img3.png",
  "DJI Mic Digital Wireless Microphone": "/images/equipment/equip_p32_img4.png",

  "Apple Mac Studio — M2 Ultra": "/images/equipment/equip_p33_img1.png",
  "Master Simulator PC": "/images/equipment/equip_p33_img2.png",
  "Curved Screen Editing Monitors": "/images/equipment/equip_p33_img3.png",
};

export function getEquipmentImage(itemName: string): string | undefined {
  return equipmentImages[itemName];
}

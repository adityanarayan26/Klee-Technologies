export type AssetType = 'image' | 'video';

export interface PortfolioAsset {
  src: string;
  type: AssetType;
  alt?: string;
  category?: string;
}

export const PORTFOLIO_ASSETS: Record<string, PortfolioAsset[]> = {
  "Branding": [
    {
      "src": "/portfolio-assets/klee-technologies-branding-designs4.png",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/klee-technologies-branding-designs12.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/mockup-1.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/msappl-logo-embose-mockup.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/mockup-2.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/klee-technologies-logo-designs10.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/klee-technologies-brand-guidelines-designs28.png",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/klee-technologies-logo-designs1.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/dec-logo-animation.mp4",
      "type": "video"
    },
    {
      "src": "/portfolio-assets/klee-technologies-brand-guidelines-designs38.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/klee-technologies-logo-designs9.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/msappl-magazine-mockup-pack.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/klee-technologies-logo-designs20.jpg",
      "type": "image"
    }
  ],
  "UI/UX": [
    {
      "src": "/portfolio/featured/ksdc-ts-govt-mobile-app.jpg",
      "type": "image",
      "alt": "KSDC Application - Telangana Government Skill Development Mobile App"
    },
    {
      "src": "/portfolio-assets/whatsapp-video-2023-09-20-at-1.14.39-pm.mp4",
      "type": "video"
    },
    {
      "src": "/portfolio-assets/klee-technologies-packaging-designs28.webp",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/unnamed-2-.webp",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/klee-technologies-app-ui-ux-designs28.png",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/whatsapp-image-2025-11-10-at-12.23.50-2-.jpeg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/klee-technologies-packaging-designs17-1317x1536.webp",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/unnamed-3-.webp",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/klee-technologies-3d-rendering-of-exhibition-booth-designs4.webp",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/unnamed-1-.webp",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/klee-technologies-app-ui-ux-designs20.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/vmovexa-website-project.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/klee-technologies-packaging-designs29-1-scaled.webp",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/klee-technologies-website-designs2.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/klee-technologies-website-designs8.webp",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/klee-technologies-3d-rendering-of-exhibition-booth-designs7-1-1024x576.webp",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/klee-technologies-website-designs9-1536x1074.webp",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/klee-technologies-web-intro.mp4",
      "type": "video"
    },
    {
      "src": "/portfolio-assets/klee-technologies-3d-rendering-of-exhibition-booth-designs8-1-scaled.webp",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/whatsapp-image-2025-06-26-at-15.55.29-1-.jpeg",
      "type": "image"
    }
  ],
  "3D": [
    {
      "src": "/portfolio-assets/b29fbd2a-176f-43d1-9f12-5d3e0817348a.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/7633d4bf-ad73-41ad-a24c-c31d5f254aa1.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/dec-industries-kiosk-booth-2.png",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/klee-technologies-3d-elevation-design9.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/klee-technologies-3d-elevation-design8.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/klee-technologies-3d-elevation-design10.png",
      "type": "image"
    }
  ],
  "Packaging": [
    {
      "src": "/portfolio-assets/klee-technologies-packaging-designs2.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/klee-technologies-packaging-designs10.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/dec-joint-mortar.png",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/klee-technologies-packaging-designs4.png",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/dec-ready-plast-png.png",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/dec-putti-packaging-01-png.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/dec-crystalline-png.png",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/klee-technologies-packaging-designs9.jpg",
      "type": "image"
    }
  ],
  "General": [
    {
      "src": "/portfolio-assets/klee-technologies-portfolio39-2048x1536.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/photo-2023-01-01-14-17-53.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/photo-2023-02-28-21-16-27.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/klee-technologies-portfolio76.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/img-1527.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/img-0162.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/img-0214.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/14bc276d-c63f-476f-8ecc-7720f5d4ed9a.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/img-9744.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/img-0210.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/ca486253-457a-42d4-bf9c-0baeef8482c6.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/c0f5221f-5285-4513-a76f-cc53c3f8bda7.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/photo-2023-03-08-11-57-35.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/img-0213.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/img-0159.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/9.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/img-0103.png",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/714eb420-20f5-42d9-a241-a93b7d733288.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/img-0277.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/img-0267.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/13.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/img-0266.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/img-4028.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/img-0264.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/img-0265.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/img-20200816-wa0010.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/70b86633-e5f8-4345-8cb7-53b060e192b9.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/img-0903.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/b15a81e9-b483-4adb-a65f-2e5bae0569bf.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/img-0532.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/img-0268.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/8.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/img-9933.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/67eaada9-1536-498f-bdab-d8b8af8f589d.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/6-2.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/45c14400-abe2-4c76-8ae6-e1d1361a76ea.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/img-0902.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/img-0069.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/img-4025.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/baed7091-2f15-4d27-8311-9680ef6a0fe0.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/img-0326.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/img-0045.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/photo-2022-12-20-16-34-53.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/img-0278.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/4.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/79824748-5286-4cb2-bc15-34beea16077c.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/4.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/krya-corona-uv-c-dis-infector.mp4",
      "type": "video"
    },
    {
      "src": "/portfolio-assets/5.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/7.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/klee-technologies-portfolio40-1024x768.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/7-2.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/img-0209.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/img-9749.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/6.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/2.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/2.png",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/dad91a28-707c-4b41-b8ff-56873077aa2c.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/3.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/3.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/1.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/img-1528.jpg",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/img-1529.png",
      "type": "image"
    },
    {
      "src": "/portfolio-assets/1-2.jpg",
      "type": "image"
    }
  ]
};

export const ALL_ASSETS = Object.entries(PORTFOLIO_ASSETS).flatMap(([category, assets]) => 
  assets.map(asset => ({ ...asset, category }))
);

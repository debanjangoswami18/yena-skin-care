import { Product, ComplimentarySample, ReviewItem } from '../types';

export const BRAND_LOGO = 'https://lh3.googleusercontent.com/aida/AEtjO1XRLKz9AuqYnac4IVLMVB1kUnjr3jwji1-Gdibvbi9NXON0eQemX1eqB7jybO2_nN8XqDDfQp0HH4LRUiDf0aEV0kXKSTNgckH_Q3pIAI2S6E5A0NFyekLw-9N8BsecIBhXLiaUBSJDiYlWWRJhS-KAjZkf4lY8Iztm3nJVZVGD8NVQGeZRQ0E5-GUEcFz2Fz9xkDDQI7RnSWP5-xcU40IQKAyFpaIl8e7hVoNTYXEfAmsRTaJxQQ2NVEvN';

export const USER_AVATAR = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSU8hZ2RD50GgzE01_9SdsPxJMPU5KBC0XXC8x1vAyLbsppfG0d_r-QCzzcE-k_CegSd-j5s2LI3AnV7DVXZS9dp79r1V057Dmvotn8MZ_SMGgocRCqfJXKscXlzYl8wnRbyO7jL1RHQ7t6WCGzxoEoMTUXy-Lv0ePGzvav6TeeGNPw4l8Rg8ktNj78Tq38frnNm0GIXiAHYZEYE1ixSnXJ6PkH2xONMP8sjHuDwtK5dX9yIwPaG8M3g';

export const PRODUCTS: Product[] = [
  {
    id: 'vit-c-serum',
    name: '15% Vitamin C + Ferulic Acid Glow Serum',
    subtitle: 'A potent clinical elixir engineered to brighten dull complexion, fade stubborn dark spots, and fortify natural collagen synthesis.',
    category: 'serums',
    volume: '30ml',
    price: 699,
    originalPrice: 899,
    discountBadge: 'Save 22%',
    rating: 4.8,
    reviewCount: 2890,
    tag: 'Serum',
    heroTag: 'Bestseller',
    badgeType: 'bestseller',
    skinType: ['Oily', 'Combination', 'Normal'],
    concerns: ['dullness', 'pigmentation', 'all'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADi07tiPsDk_VSyOg57ZQUw2UmjaV7p_G_2peF0mq-iyT9e1_7IHVW33UTBe4MpuHGVMgG03lByNjxb2TjGqcifF4WI8BDhki4ICgnWHgGfoVgQc5YM8R8KAT-5bNr8qXE4fggGsa7PkvQPVenghM8sZJVl2g9R0nTMBpWkYLxsfEKkKoT9D-iEfjPWKb_dk9_KsCuedXM10bs3FAn2x_F8u63zCmmE_USStmxgcPk8Nra4j-Gm4ofQg',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuADi07tiPsDk_VSyOg57ZQUw2UmjaV7p_G_2peF0mq-iyT9e1_7IHVW33UTBe4MpuHGVMgG03lByNjxb2TjGqcifF4WI8BDhki4ICgnWHgGfoVgQc5YM8R8KAT-5bNr8qXE4fggGsa7PkvQPVenghM8sZJVl2g9R0nTMBpWkYLxsfEKkKoT9D-iEfjPWKb_dk9_KsCuedXM10bs3FAn2x_F8u63zCmmE_USStmxgcPk8Nra4j-Gm4ofQg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAk-7cUDDIjLIDqSCnKFRC65TyZLDpVlHnrc-X5uguXakAEMokVTYm6opemxhHT6rL46JaU4Cp137bF2TEO0dcrwBKvnmqMeGwjMR1-MM-5OGdEHdmAuiMFCFekXrF2dXARcAhIezlQcFBo6MDwulySJzmLsgWRNtxEeI0scsglWptK28SyVGqMUv9aMrXhji1aj-91TGCzaocDMa3lG03uCvCZCeryAHVPYpXlbj4ImMKI_a_37UO0vw',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDyEAHpQP10-DD4So9YrZRSrLq63Z4Dh7opC7hpmmmRbTOWhzkdRJW6WLAdZVCpfgJIOmB8_eehbGRASCp-ZkFdtf-MpPFZhcnSzu_o7Y-CVYSXQGUm2RxfaugaPxlJjcQNF9XxAyqVcZ_1rPPFlU2MyObPELZD-ydVumqztJfFn7yRCUlnF5DpbFxrSyrWrBAdYERWOZq28zM_qsTIYxPExDq11zxD0-MfTK06vz15C7Q-INwYlsZHNA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCh0ad7HnVINDK1jFx83mjoxjGyQjFwuG35BN8aRsiuYoreUb-w36PVsp8IUJ_XQl1IPKGrRK2WS3S51ccM2Z0mLGIOGJS6kgP4SI1mXKNsDx3xG026XpGiq6oNBIg2QuPrrBZriCeWCB5hRHqId2_e36OqRAt_VilSotW8cHcOzMLBqhT1KmdJhOEptr5yki-sFP6T7M3g9Icw5cpFqBVRubbWRdag-SOidCREFZ64R538vvqH3374tA'
    ],
    volumes: [
      { size: '30ml', price: 699, originalPrice: 899, note: 'Daily ritual • 4-5 wks' },
      { size: '50ml', price: 999, originalPrice: 1399, note: 'Value Pack', discountText: 'Save ₹400 extra' }
    ],
    highlights: [
      { icon: 'science', title: '15% Ethyl Ascorbic', subtitle: 'Ultra-stable vitamin C' },
      { icon: 'shield_with_heart', title: '1% Ferulic Acid', subtitle: 'Antioxidant shield' },
      { icon: 'water_drop', title: 'Hyaluronic Complex', subtitle: 'Multi-depth hydration' },
      { icon: 'cruelty_free', title: 'Clean & Kind', subtitle: 'Fragrance-free & vegan' }
    ],
    clinicalResults: [
      { stat: '94%', label: 'Observed instant glow' },
      { stat: '89%', label: 'Reduced pigmentation' },
      { stat: '96%', label: 'Reinforced barrier' }
    ],
    description: 'Formulated with advanced 3-O-Ethyl Ascorbic Acid, our formula ensures deep cutaneous penetration without premature oxidation. Ferulic acid doubles antioxidant performance while stabilized hyaluronic spheres replenish depleted lipid barriers.'
  },
  {
    id: 'hydrating-cleanser',
    name: 'Hydrating Face Cleanser',
    subtitle: 'Barrier-safe foam with Oat and Amino Acid Gentle Gel.',
    category: 'cleansers',
    volume: '150ml',
    price: 399,
    originalPrice: 499,
    discountBadge: '20% OFF',
    rating: 4.9,
    reviewCount: 1240,
    tag: 'Cleanser',
    badgeType: 'discount',
    skinType: ['Sensitive', 'Dry', 'Combination', 'Normal'],
    concerns: ['sensitive', 'dryness', 'all'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRTj__sauWBKG8z43Np81c709KwbEY8tuR7P1IWNn59jJMb_rxnx6au7ztxJJcY3S37A1ojxpesL5EADzzgxfZxMAmT3gUJTJ9RDUh97EpCQ1H1QLNvPHFSKooabQMGDHTibPwEv0ZZL6c9JydU6_f0c0UmuU22Fki1w_Vv220KoAa_IdhmFe8rK5nBE0dXbUDDDnWlz0lOf1OOxjU1CMkKDk_ZuEWQgxCiN_wcguslhen5jcxwESkug',
    description: 'Micro-foaming colloidal oat wash that dissolves impurities and makeup without stripping the protective skin lipid barrier. pH 5.5 balanced.'
  },
  {
    id: 'mineral-spf-50',
    name: 'Invisible Mineral SPF 50',
    subtitle: '50g • Broad Spectrum PA++++ Shield with zero white cast fluid.',
    category: 'sunscreens',
    volume: '50g',
    price: 599,
    originalPrice: 749,
    discountBadge: '20% OFF',
    rating: 4.9,
    reviewCount: 3120,
    tag: 'Shield',
    heroTag: 'No Whitecast',
    badgeType: 'nowhitecast',
    skinType: ['Oily', 'Sensitive', 'Combination', 'Normal', 'Dry'],
    concerns: ['pigmentation', 'sensitive', 'all'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3QMkMTvQJqVJdmAm49CFaMjCdjajeM-aDFeXJ_tp-WEPa-nN6tsmn3QHOsws1JhmTCIRZjEuOWehEj87Ic-lshfqNa27DHodP83xjjk5JumK0pcj7WA1apDeevzNGxZ-M0OSqZSriMVLWXX1GEn7NWU4SiHlhUn0EG6wt-6S0cMmE9kiUbr4Il-qJscEi6BWFeYQcd6nqnCSejejpON9_KILTIKWNt-GMtieP9KM_5cp9XQ_TIzg5Hg',
    description: 'Ultra-lightweight zinc oxide mineral broad-spectrum sunscreen with non-greasy dewy matte finish. Blends completely sheer into every tone.'
  },
  {
    id: 'hyaluronic-dew-drops',
    name: 'Hyaluronic Dew Drops',
    subtitle: 'Multi-depth deep plumping hydration serum.',
    category: 'serums',
    volume: '50ml',
    price: 649,
    originalPrice: 799,
    discountBadge: '18% OFF',
    rating: 4.9,
    reviewCount: 1430,
    tag: 'Serum',
    heroTag: 'Hydration Hero',
    badgeType: 'hydration',
    skinType: ['Dry', 'Combination', 'Normal', 'Sensitive'],
    concerns: ['dryness', 'all'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnWSID5tXs_zXizHB6k-1OM2e4ztW5d8P6_FiuwKspBjYwZb07De-eLAyKKgHPvnVSUUjx54x8B3mpnPbIB-J73vTDPMRacd2OU2DskLBlYM8G7yU4iuPu2nePolyn-yx973NiTphL4nre9aSUSDJztRRjbvoyWdCXRR71G2Yam6XQLb4or6TWEiUbl9OgRKgNhneA1n7yedYIfuRp-06ggiXzGmtD2-a4kjWxWbG0LOjDTt2DaQ35Bg',
    description: 'Multi-molecular hyaluronic acid combined with marine algae for continuous 72hr trans-epidermal moisture lock.'
  },
  {
    id: 'daily-ceramide-cream',
    name: 'Barrier Repair Daily Cream',
    subtitle: 'Barrier repair & calming hydration with 3% ceramides.',
    category: 'moisturizers',
    volume: '50g',
    price: 499,
    originalPrice: 599,
    discountBadge: '16% OFF',
    rating: 4.7,
    reviewCount: 820,
    tag: 'Moisturizer',
    heroTag: 'Ceramides 3%',
    badgeType: 'ceramide',
    skinType: ['Dry', 'Sensitive', 'Normal'],
    concerns: ['dryness', 'sensitive', 'all'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLWLa95L22F2aYlHhPUGz-PYnWzJR_YWt8oS7IvBVLiN7hyHxplc1s4_OZ30iVf82Gcc4r7TTD2jWomrNdrs4gxe_p7drbw1BmFLyoeLHbvn5KS2hNMYBMDpBtm21NdpRpjKO0B0eq-M9BDVGWtAGwYW_KygAy1kXNyYjCAhANpxD_c0qLUSpTnf_TABEmgMWebh0Z4m3DgCnfQQyD529wEdC2oPza93wL10l6yPQxll8E7ynzddPK_A',
    description: 'Squalane, colloidal oat, and triple ceramide complex formulation that reinforces fragile skin barriers overnight.'
  },
  {
    id: 'glaze-lip-balm',
    name: 'Nourishing Glaze Lip Balm',
    subtitle: 'Peptide & Shea Butter restorative sheer plump.',
    category: 'lip-body',
    volume: '12g',
    price: 249,
    originalPrice: 299,
    discountBadge: '17% OFF',
    rating: 4.8,
    reviewCount: 610,
    tag: 'Lip Care',
    badgeType: 'discount',
    skinType: ['Normal', 'Dry', 'All'],
    concerns: ['dryness', 'all'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALx65NroZliXGtTKNGbA_m7v50wwzy2WUh-ZkHAYEW6o0hpEsrngfslhGFJWCRgLQKcD7Ax2X4ZLO8GJ9lQsXr1wjd9Uc3QLCBiQJ4rKBY8OGhqoT-W1328HELOL34iWQcUNgpFjuOhgOCA4HwRF6KAQT4sLUWxoyKk6kJXpEDlSCQYs4Ob-7P9RyCCYniNM0nZT_wW0zwyGWf1ETg6VgknyKR73wSJIVCEH6Xkzl6drNUUkJ5jLy2eg',
    description: 'Rich shea butter and peptide glaze for restorative lip plumpness with a glass-like sheer sheen.'
  },
  {
    id: 'peptide-eye-gel',
    name: 'Peptide Eye Contour Gel',
    subtitle: '15ml • Contour Lift with cooling ceramic applicator.',
    category: 'serums',
    volume: '15ml',
    price: 549,
    originalPrice: 699,
    discountBadge: '21% OFF',
    rating: 4.8,
    reviewCount: 940,
    tag: 'Eye Care',
    badgeType: 'discount',
    skinType: ['All'],
    concerns: ['dullness', 'all'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIt9jzI4QKYrby8sSSRWqKdjVYd_fZL7W4p7GunTerIszlETVNMgiw7zTq8nIDmqnOLHHyKvWJOI54qq0qaSjEoziATyle_BQAjLlN6l4KFfSnlkzLu7P6u8gOWXV6quktklxL_metFNKuD9kGukBqV5hnjaBWCNaQDurDmpHg_8jk3YhGlC8Z4xSRsCU4-f7sw8xY6NcPeonSrkpPTapopILWFKf9Hfnp0VzVAsT0WV5afgNRiPOY5Q',
    description: 'Matrixyl 3000 and botanical caffeine to target under-eye puffiness, tiredness, and fine expression lines.'
  },
  {
    id: 'bha-pore-toner',
    name: '2% BHA Clarifying Toner',
    subtitle: '120ml • Pore Balance with Green Tea Extract.',
    category: 'toners',
    volume: '120ml',
    price: 449,
    originalPrice: 549,
    discountBadge: '18% OFF',
    rating: 4.7,
    reviewCount: 730,
    tag: 'Toner',
    badgeType: 'discount',
    skinType: ['Oily', 'Combination'],
    concerns: ['acne', 'all'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCl1kJz-OiVo8xuYAMwt8G1HkhsSc8T2_E94f_sVendm02bRCLilRm3ajivHLKu4eyzhCvwFq3tGk2exvPcaIICsGVSL-H1SnmeXSO4xyptqNf94skza1ZCFiq_qKWJJsZohrvFKh83JE1jI7L_sFQjj7I3Vze5FhZ0y91oEsxRnGrlqcqilmsd_eHRvg1f8iRqqXFOIukmAYi1Oy9lkKGKYn1P8wAd30CL6QvbzkhDZqcDv_6FuU3HfA',
    description: 'Encapsulated Salicylic Acid with Green Tea Extract for gentle pore decongestion, blackhead reduction, and smooth texture.'
  }
];

export const COMPLIMENTARY_SAMPLES: ComplimentarySample[] = [
  {
    id: 'sample-lip-glaze',
    name: 'Mini Lip Glaze',
    volume: '3.5ml',
    type: 'Ceramide',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLXCAgSre3Z-LvskC4PKNx5fq6YPLeGSAIzQSjBCCFzDRAKL_RIjpxGDI4xlS1nFOzuJjAstsuHQdWX8RKv22u4V1_uWU2rebWT4d7ZmWxKmSLedZMa2CAnrNAnrzYwe-mkNDDjvcbMafkhuzzVr6hUppvwLhjvwN44MrA1056q1gQyXXS9IaGX3-U-aUyFqijPyiaEokYHFgdF7cpSABJn2UyTNP68prMgdFjsfj6Oynf4Ge1ufcmqQ'
  },
  {
    id: 'sample-rice-toner',
    name: 'Rice Toner',
    volume: '15ml',
    type: 'Barrier Dew',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAu5KRWNpXg3L7jmHmnBDhdNl6im9Sh5tU-tKWF-XK_vDPjiKHIOjnS1BH7Ejaq952Y_efKQvJdbCLv8rq-gtmkUjG-lehAACbefTS0EmrzsVXPkqD93o4xaIqmWs0ZxGYiBV6G9060bp9STxN0p_P7jPNDY2dK0RZhmW94VteecgyJuTdbV9qMlIA0MKA2TpZuh4_iAEPLx4ZjQgzZ_KztOSKmn87E2uQSLRG9s7aRNl1j14HY3NFgRA'
  },
  {
    id: 'sample-barrier-balm',
    name: 'Barrier Balm',
    volume: '5g',
    type: 'Centella Salve',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdFjFoWTBq1AfJ9UjNoxKyZeRwTrvUfAEi8KfDoUl-yWqlc0nqeHHyQKWYlL4kdg0ZvCbucYjkAYQa4Zn-SuNsn0_ZxbQRPlexLc-jnp3JH64BMaRHwsjeVPfx4ukRYaRUgHClhsqa6X7856h-YQvRfSmWJhF1dBXrXHSO9Lj7lAs1Gg0De9hlgF0H_ncygg4WkH0XMF6xMC-POGU95C5zdtEvfA82zLrbQ8P02PGjX4gG5pws9R4AZQ'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Aarohi M.',
    verified: true,
    time: '3 days ago',
    rating: 5,
    text: "Hands down the best Vitamin C I have tested in years. It doesn't oxidize or turn orange on my skin, has no sticky residue, and my stubborn acne post-marks faded noticeably within ten days.",
    purchased: '50ml Value Pack',
    initials: 'AM'
  },
  {
    id: 'rev-2',
    name: 'Devika K.',
    verified: true,
    time: '1 week ago',
    rating: 5,
    text: "Gentle enough for sensitive rosacea-prone skin. The subtle dewy glow under sunscreen makes me skip foundation completely.",
    purchased: '30ml Standard',
    initials: 'DK'
  },
  {
    id: 'rev-3',
    name: 'Ananya R.',
    verified: true,
    time: '2 weeks ago',
    rating: 5,
    text: "The Vitamin C serum transformed my stubborn post-acne marks in 3 weeks. My skin looks so lit from within!",
    purchased: '30ml Standard',
    skinType: 'Combination Skin • Age 24',
    initials: 'AR'
  },
  {
    id: 'rev-4',
    name: 'Siddharth K.',
    verified: true,
    time: '3 weeks ago',
    rating: 5,
    text: "Finally an SPF 50 that doesn’t sweat off or leave a weird ghost cast. Feels like a light drink of water on the face.",
    purchased: '50g Shield',
    skinType: 'Oily & Sensitive • Age 28',
    initials: 'SK'
  },
  {
    id: 'rev-5',
    name: 'Pooja M.',
    verified: true,
    time: '1 month ago',
    rating: 5,
    text: "My dry winter cheeks were rescued within 2 days by the Daily Ceramide Cream. Will definitely subscribe every month!",
    purchased: '50g Cream',
    skinType: 'Dry Skin • Age 31',
    initials: 'PM'
  }
];

export const ROUTINE_BUNDLE = {
  title: 'Complete Your Glow Routine',
  tag: 'The 3-Step Synergy',
  badge: 'Save 15%',
  totalPrice: 1399,
  originalTotal: 1647,
  steps: [
    {
      step: '01 Cleanse',
      price: 399,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFUtCV30IweECcKEtUiBJmMqSKXQshj8pr9f2iWNGNZgp_BC26N-fZ5k6AKEuLx64tDk-02MlFJK3NzdeKic6kepRRbpPZjU2sF0nEb-mQz3P6eqmuRXYf7ia5jOB9eHxyAQyOGnD6X-EqixiIdKoRDxfn17tzXWfHH3sS3DNE3h9M12GwUMSemR6qNwr0iQYcF9js0IHmOMApLVStDGBoullojkCetgERBBCaDTEz19AWExFH9cgimQ'
    },
    {
      step: '02 Glow Serum',
      price: 699,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQc8FLnrTUe7sJtVTjIeVpifiOnht9j0YC3XY7Zqs1Lm7SO6PBRqE4aX-zxhy82DLFKvjYJW3vsOhUr8WHW30EI_nvf3j5ZbN3TLGIWuPBWljcVcZ25oXHblNdhXABLZjIxsyqT9-Y68-KmJuLvyjG_sxAHxRSdg5PPC6EgrA4-4JC98NggxQHBnGuZw5SMP3Ssgxi-UoXu4PHDFRy5wYU7FbKOVFcw3rA8PjCslFSfoa1g2eO8VLfEA'
    },
    {
      step: '03 Shield SPF',
      price: 549,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5q7Opd2V7d_Cp_6jl17ZVTX-BaB5JY1ukWVSZls-bMIFxzpAmJ7ENR4B8g9v6oJ6OYFYd0675JwA5_4cIZTSvxFRG8KkPQrx1ntKh9utiipGy8aPSyAgEVdsiPbZYnJ-6K_D5W24CjHujDWOq8pPH11tJM58h-siX1Xoac49jbho-DgLnOMksId5AJSgiyMloFD5DCzdbt851Pt_X_gor89wOADcO4wsZmEAKWJ7nEyCCjpfhD7bFoA'
    }
  ]
};

export const TRANSFORMATION_PHOTOS = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCi_gTan6Z4gmpZBjKLlbaR0rAZltYfxUxgmKjZ-7WNqDv2mhJBnrXIiVKNuYZxEs9hsro9c0rtCfpeGyY_sFiQNuzb_3zVskqhzjqqKbllEION-VgjxN7cgQ9PShwR85Z2CjxwRZxOs2fR1aJ4JcF_LRES3KINXLD7C7OYcfEYJzWlHpIO4UdMUXyzyFVxMB8liwFgCQPsMLcFAs1vpGhbba6SP_VF7qlqwFhfonoWMprkWB6__F69fQ',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC6ixNIcdlUCSExzFCp2DCTp5vXSBVcq7okMjfFHeG8v2oy_-W2TVLR1aFsq3JClalP8wUWQ4P8aw_fJdtathq0M4pUEmDheKwKyGUzyfumZDGY63CelQM_c7uQerkV1lZIQY5e0RkvRlMzAUZk-Vd8F1Sdt1RjUQz9jmGMlioXCuu74m8JeHPa39mEGgaTdqK-oC4R7JLDnS7Y3jurwhHSkZJiJbZW8Eztw_jc40Eer8-_tuWhm2UAjA',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCshCORHaqEFAvELHGmidLpSbrqBTWv2QZOUI5FMK2oyTLku8-UshuKlbqdt7Vi6l1gdqGQtvnh1X7MisEwqQ_xwHkInKIARFkq8j9Pw7P6471Gir9xhb9hRcvu4oHP4Y_mmFJJDx0roafrELkHfiwefYsBUwK6YFCNLv6grNxC_HM6y3ZA_HjmB_j5_sNYNYRhckdMLOT-uFTg2iwBnH2pPRHILKW7ZXqfSLPGGt-qvUlYF-aWkfnc1Q',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBCohaFeETgQmbSVyrzvHuYdnrj1N7QhiG-bdaK0MVP0s27jRpzcAGx-IwfGXsJHe5-QvDOBhOIMjTvmKAhCPxboIRjdKCM77LXZcxMUtw4YD0fsyFgCtGVfQuH-QWqqlbALApaAqeq_UlcGmgEHmts3tx66m86SVQGWLZI_qNzhYUVb0S_rRHCM6-_0PZcoi8cZu4jNlgmat8n6VNrxEhyWs3piA0cQdMNC8T1lkFF0bsFvG5wp3uuJA'
];

export const SOCIAL_GALLERY = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA0HgrzdqjSGyoANg72wKYDmIdLalX9VvKcudp7gQeTZMdnzNz_LMgHuFaYLy4VlErE-fkOHxvezjnRnSmDPcHd3ezg1wvP5XwtNiYr5K9aVzAQdts-zEnoIJXkPi_LwlUAqiMIPLgMkMI6ziEXWRQO6mI9liZs7cT1biJtEi3KgLU9bPBEuesGjIiVMBBt2hl2uXqJlVzmtgb2OZ9ZnlFtmPoEm6T2_hlvm5eip6QhXcc1xWMw_9nXog',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAdA8P3q5DoPhIgcI2-haEScZugDsWeSrLx0pFrZddtKjS0ErIR7t6dn1RcsbOY4Fpv-4QCmfHFS39sVj-_5y7t7RnYV1nE5pzkzcJmJqqkxd7xHKN4l6BujKd0MctInolnH0W1rrB_D90Z49qIp2awXlBx3SCtyiRcUEKfcpDnX1eq3lJSSZ6T-GdMCa4Zab6LMnc0g7shJAZQx1kJHnepF_CK5yWG1DZMO1S-YE1IFAQr9BPNmhtjDQ',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDEnGNNFScHHBG_sGU0EWMr2cA14OLxn-Qz1oMFTs2U0iOYGJ1SXga938x2TNo4V4tHyaDj4tnT9GYnjUTQjTZVfJuED0w__onw1dRGLupH1spScSDAEEU0x7JS60JqDq5DJ1HRIAofprMf5nVRQly53Qjfw9smJuJJ5LOake7kmCcNUW9EWbtJQBJrexaftaf8aIGD_MTCBeJD0Um8qzLSEJvOT_k5hItx1vdZkVzrVxG5fN6enBSk-g',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCp7ibXvgJ7NrRIYyiqz2RgUZHL_iIZRQEHXhks0n2GdhFMgL41w0cFhW19sp7EPQC9O1Nu4zU23lF2qkOSA8IOC2S2gEpKh3JheByEBEEMdcAXDkeZ0H4mUCZfjQm3nxAtKcwJHc06r5Rc4PH_pFjeb3pcd9AAZZnA5x7w1k9pfAnaSdwNhRoX9NAuQ5qdr7J54X3R7mf4dgzQu6sX6ctU_4iINBWK2cPonmM3hy3waToP53-vqrPAjQ'
];

export const SKIN_CONCERNS_CARDS = [
  {
    id: 'acne',
    title: 'Blemish & Acne',
    subtitle: 'Clarify without stripping',
    tag: 'Salicylic & Tea Tree',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6i-JfS2COVMMhwxUDLR9Us0LoxEKC5rX58OKF47MH8MRp49YFyP65kHjfEaCcNcfGAIxkgWD8NGrbBrwZ7VFcDaXC9MM3ou-UqzOHIir5hY4Y7-C6k-7OfSksuYWaFNyLGKSh4CcR1UnrfJl8rnXlxTPexrkn3NA8AMmsfzfvx6DK-AsyNMoSwjHmaKQdNGOrqITZgvkjXkF5Kp64jsHrNbGM0eiHvaMROZko8hH7eNOc_hQQKD1L6A'
  },
  {
    id: 'dryness',
    title: 'Dry & Dehydrated',
    subtitle: '24h Continuous dewiness',
    tag: 'Hyaluronic & Ceramides',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHkbhjyHTktYMU2ocRdiiIB4ze-aHgPgAfS7vHkOS_q3Lu6JA-E9WXJCUqPdXpMBBGCdjhotRQayenBJJHLvxuXlgIN2MWWSmCFpO8jmsDKYZCv-IdAIF8_ZqLOxRaMxUfKWR9bYg9VMHv4a4en0YWJ5BRxSjvwhzvR_3Ls6xkqsP5_pXOI-m8gZSTZyPGGfZtJ01iJ-qwR9K-L1pfc48J_16V_WyGW_DeMHk25dgp4XcIq903F4X7Ew'
  },
  {
    id: 'dullness',
    title: 'Dull Skin & Radiance',
    subtitle: 'Instant skin luminosity',
    tag: 'Vitamin C & Niacinamide',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAajZS_kY6kWVfr6quXKoGPRp7oLC_4xRzo9is8ONQ7FREjBu4cXAHCFKlr1xji9NwhngAgH-rO8p3FLeZSm8LYcO0U1Cu3vnfPAU9nE75AjQSBrpGTPW1XdjZha3omaRGAjTm4CYyoU1xNfOVRX5EReKpMk8Qe-YGwT7pGeDivcQK7pDBt4R4a8oUBk4KpXWX3uxSYTiZxnQTWt0RzAU7CNvuBrmzbrLnrEP9E0gazSc27w_8O9AZjrA'
  },
  {
    id: 'sensitive',
    title: 'Barrier & Redness',
    subtitle: 'Calms reactive flares',
    tag: 'Centella & Madecassoside',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgRV1w3p1cOzxPqRaSk_GiW6yDtw3pm_7BiyohpItD5vDXbp52uNc7PjhZqlGLoMeJIbm9kNMoeyHsdg5UtMeKQuk2WjfCDK_assA3TGVNubaG_DhVMhDX3usjxvyTz7R8nHVJQRrg2Lh3YrNLq8aaEYV7VJBr7npKTwv-Ov6TtlMrkZCRiJ9JqhT5psq1mcTmU0IuL7eBr-gFuK4rFz25wGpFVOWnElDq2oHQRZqJD66Bl4Xd2yNgKg'
  }
];

export const CATEGORIES_SCROLLER = [
  {
    id: 'cleansers',
    name: 'Face Cleansers',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdI-ToGp7mn_pyyJaUpXZLW0F9KC0zhgSXlrrEX9HUePcmx08YVHtK9taZQrfFjQEq1YPkE9yYw48GnrVOR3b_tyFcKyWT2KTq1j0EUScB4A2SlRbgCpUDRre_f2kkGeG8IRYv4bHIVASbD5DuJt758UGZgxdfm-Uq_kgpBKQ3ZWLJ-nrz8WUfvkHruR7DMY3wFQpM4DjE9nSO4GA3hwB1a4v03dl24IK_C-SS6sAK5r19zjB-wLVntg'
  },
  {
    id: 'serums',
    name: 'Active Serums',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCROkQd8tlRxZjLulgXZ3ijBerGjkpVT9STF6C_cuIccJ3UPwdThPsdH4cuzVlZg05yJU-bl_L8ZiH-QqGt1AnXI97DlgWYM-wJavdUmhA8PzRqr9YroLX6646EzVdit4BAUmTZv_H_uFUn1UXeGff1AU9PFGcgtwvraXflvE4Sm6fkiEp18v3aupRMT3sIA5dqi-PSZENS51_Glfh_fsDv2NlHYcNyZklMtfQUAPXfLqOPnTbDo3nxxQ'
  },
  {
    id: 'moisturizers',
    name: 'Moisturizers',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkLnqJ41NeSt0jH-5VvPg-pBn4dJ1uohJbKQLeTu-17s5GyF1UAYvt0S65IwSlj2S44orEVJX9-Q3EuyygcKNEQBtrP4HIf7nceJ4FJB2ShjRohbSIubct46AESpkp-Chy1fF8m43o6TrzWlc7oz3jmx-7HyU0hvCa0hJ5ZP8TTkSJshQYFwKLzw39EU0pBWi-akPbZnYf29245AiDr5kznUjByOtN0Y9OtL9JRHYUGgWPLAmT8cc_Rw'
  },
  {
    id: 'sunscreens',
    name: 'Sunscreen SPF',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAccgTfIAFfpPsxjf6Xwwfonspu4ZGMiKUDZgIcN2B_JYdyO3qKVKfW_PAQ1OyQKrQhhS4R_WITwuUmGCZ1CEVUxseepFjeeplQ5oxUlxRDZ06sZeyBbDW5Oebzwlss1adCLP7eHA2MSueUmIod8zTb98J5U8BjsRkBo9sx2dsT2QfFwMO8XHjw37tvhlHFIrcG2d4uST9Z-C1fyef5scf7UzuCv0eFR1KvGsqwaaesRx_6aNpYOIvyA'
  },
  {
    id: 'body-care',
    name: 'Body Care',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAOeHlmlkEfrdLiD44XrgY3IuQELzFgVcbK8BH4G4l-xsVWlXkE9Tg6RffX_FoGMH2-93OjpYOzrn7F1Ein75yptgsPFD_Waffpl37JK9Im3mCuo3UYFIvKoWnZNxNRupiUEh4t9bgBbMN5qS9ddF7FE1mFPxTMMMy8CgXKR7clvJLG1mAJNP3oW4QtVGodmaw1leL0mcjN_1LeMcBaM6fLCUpBn6QKjE6hocEbGYD-x03zmR6bvEK1w'
  },
  {
    id: 'lip-care',
    name: 'Lip Care',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCubOi074hsXPl0sLicLICdecQZ1DNH57l-WcJ-7g2LGwNnUkA6X-u9_UPpJNDPX-LNz3yCPaKef0UVPywNkrPfkz6E_Ej6p64jqMuL8zFnlStDMBcJRJkZxPv6Bb4FKH3FohG1TxnR0udEWj9JZz1b-0foo2mB-7OizD7QX733moT1tQg-Ltwg-7jeMPMzDV55dJZnxpX4FmdMGIJiYemKo9RdUJBqQCLvhbPIvpkk2YMhDTrcLyBaCw'
  },
  {
    id: 'hair-care',
    name: 'Hair Care',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCR1izhPMUaMqSwgUL5qNMm1THtg85zILejORgX7RQhvw8gDDylyehODIDQg5jAGhb0rNBVhYFgAWPCKQ7q2Vkj4LsrfiyEylL_YbkxJ7Ygot_-kBvdQt58TD5budxHmVKj7E5D9_NxRAk8NBO4I_Z3u9AZxPitlBFAe7kNcgKBPGVjJTxoyPlHUwCYi0QsIPx46biTA9RbxRWcgelXkyIWQOmt3qHpc7m2838E0_MmZ1ZOI7ryTfVQg'
  }
];

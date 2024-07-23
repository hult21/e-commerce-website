import { Router } from "express";
const router = Router()
import { v4 as uuid} from 'uuid';


const products = [
    {
        id: uuid(),
        name: "SKIN REWIND COMPLEXION STICK",
        price: 4800,
        description:
          "Looks like makeup, acts like skincare. This weightless complexion stick melts in and moves with you, wearing seamlessly for up to 12 hours. Buildable, medium coverage instantly blurs pores, redness, and texture with a natural-matte finish. Over time, potent anti-aging ingredients help firm, smooth, and soften the appearance of lines and wrinkles—for healthier-looking skin with every swipe.",
        ingredients:
          "Ethylhexyl Palmitate, Polyethylene, Lauroyl Lysine, Diisostearyl Malate, Triethylhexanoin, Mica, Dimer Dilinoleyl Dimer Dilinoleate, Caprylic/Capric Triglyceride, Squalane, Euphorbia Cerifera (Candelilla) Wax, Silica, C12-15 Alkyl Benzoate, Polyhydroxystearic Acid, Persea Gratissima (Avocado) Oil, Glyceryl Hydrogenated Rosinate, Bis-Diglyceryl Polyacyladipate-2, Hydrogenated Vegetable Oil, Tribehenin, Caprylyl Glycol, Behenyl Behenate, Tocopheryl Acetate, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Ceramide NG, Alaria Esculenta Extract, Lavandula Stoechas Extract, Tocopherol, Palmitoyl Hexapeptide-12. [+/- (May Contain): CI 77491, CI 77492, CI 77499 (Iron Oxides), CI 77891 (Titanium Dioxide), CI 19140 (Yellow 5 Lake), CI 77007 (Ultramarines)]",
        howto: "",
        photos: [
          "https://cdn.shopify.com/s/files/1/0127/2332/files/ILIA_2024_COMPLEXION_STICK_27W_YEW_8141bd1c-46f7-44d9-96b7-6032df82db76.jpg?v=1709596258&width=640&format=webp",
          "https://cdn.shopify.com/s/files/1/0127/2332/files/ILIA_2024_COMPLEXION_STICK_SWATCH_27W_YEW_f4a29c74-c48b-4cc7-aecb-58f19c27777e.jpg?v=1709596258&width=640&format=webp",
          "https://cdn.shopify.com/s/files/1/0127/2332/files/ILIA_COMPLEXION_STICK_BEFORE_AFTER_1200X1600_27W_YEW_5b23d544-fba3-4ec5-973c-f9a015de45ca.jpg?v=1709608277&width=640&format=webp",
          "https://cdn.shopify.com/s/files/1/0127/2332/files/ILIA_SkinRewindComplexionStick_PDP-3_29608e03-a189-4584-9962-89fc685b3a52.jpg?v=1709608277&width=640&format=webp",
        ],
        category: "complexion",
        bestSeller: true,
        newArrival: false,
        essentials: true
      },
    
      {
        id: uuid(),
        name: "TRUE SKIN SERUM FOUNDATION",
        price: 5400,
        description:
          "This silky, breathable formula melts in and moves with you, seamlessly blending and blurring for skin that looks like skin. Potent skincare ingredients Niacinamide and Allantoin visibly improve skin with every wear, minimizing the look of uneven tone and texture over time. Skin is left looking real and radiant—like you, just more polished.",
        ingredients:
          "Aloe Barbadensis Leaf Juice, Coconut Alkanes, Caprylyl Methicone, Polyglyceryl-6 Polyricinoleate, Cetearyl Isononanoate, Polyglyceryl-2 Isostearate, Boron Nitride, Dimethicone, Disteardimonium Hectorite, **Niacinamide, Oryza Sativa (Rice) Hull Powder, Gluconolactone, Sodium Chloride, Isopentyldiol, Glycerin, Coco-Caprylate/Caprate, **Allantoin, Sodium Benzoate, Caprylic/Capric Triglyceride, Simmondsia Chinensis (Jojoba) Seed Oil, Sclerocarya Birrea Seed Oil, Squalane, Tocopherol, Pentylene Glycol, Triethoxycaprylylsilane, Pistacia Lentiscus (Mastic) Gum, Hydrogenated Lecithin, Calcium Gluconate, Ethylhexylglycerin, Jasminum Officinale (Jasmine) Flower/Leaf Extract, Phenethyl Alcohol, Bisabolol. May Contain (+/-): CI 77891 (Titanium Dioxide), CI 77491, CI 77492, CI 77499 (Iron Oxides).. Included at an active level—i.e., a percentage shown to benefit the skin.",
        howto:
          "Prep skin with a few drops of True Skin Radiant Priming Serum. Allow 60 seconds for it to sink in. Shake well. Uncap the bottle and dispense 1-2 pumps into your hand. Blend into skin with your fingers, a makeup sponge, or a brush, like our Complexion Brush or Perfecting Buff Brush. Build your coverage by applying another thin layer wherever needed. Finish by pressing your palms against your skin to help the formula melt in. For a soft-matte finish, set with Soft Focus Finishing Powder.",
        photos: [
          "https://cdn.shopify.com/s/files/1/0127/2332/products/TSSF_Open_White_SF9-25_b679769a-ac23-4541-8f60-b023f60cc14a.jpg?v=1679352425&width=640&format=webp",
          "https://cdn.shopify.com/s/files/1/0127/2332/products/SF9-25SENJA_SWATCH.jpg?v=1649272650&width=640&format=webp",
          "https://cdn.shopify.com/s/files/1/0127/2332/files/ILIA_TSSF_BEFORE_AFTER_1200X1600-SF9.25_1eefa984-5557-4901-939a-07a246949847.jpg?v=1713292378&width=640&format=webp",
          "https://cdn.shopify.com/s/files/1/0127/2332/products/TSSFIngredientsPPageAsset-1200x1600ILIA_ec16e137-f6a2-443a-b7eb-bd374732e639.png?v=1713292378&width=640&format=webp",
        ],
        category: "complexion",
        bestSeller: false,
        newArrival: false,
        essentials: true
      },
    
      {
        id: uuid(),
        name: "SOFT FOCUS SETTING POWDER",
        price: 3600,
        description:
          "Soften shine—not your glow. This loose setting powder blurs the look of pores and sweeps away excess oil, leaving skin with a soft-focus finish. The micro-fine formula vanishes into skin like an invisible veil, locking in makeup for longer-lasting wear. A blend of botanicals helps to soothe and nourish—for a powder so comfortable, you’ll forget you’re wearing it. 0.32oz | 9g",
        ingredients:
          "Zea Mays (Corn) Starch*, Mica, Ricinus Communis (Castor) Seed Oil*, Bambusa Arundinacea (Bamboo) Stem Extract, Silica Silylate, Zinc Stearate, Caprylic/Capric Triglyceride, Aqua/Water, Leuconostoc/Radish Root Ferment Filtrate, Helianthus Annuus (Sunflower) Seed Oil*, Passiflora Incarnata (Passionflower) Flower Extract, Rosmarinus Officinalis (Rosemary) Leaf Powder*, Aloe Barbadensis Leaf Powder, Tocopherol (Vitamin E). *Organic Ingredients. Ingrédients Organiques. This product is certified Gluten-free.This ingredient list is subject to change, it is the most up-to-date ingredient list and may differ from product packaging.",
        howto:
          "Use as the final step of your complexion routine to extend the life of your makeup, take down shine and blur everything into place. Shake a small amount of the powder into the inside of the jar's lid, then pick up the product with the bristles of your favorite powder brush. Starting at the center of your face, work your way outwards with a sweeping motion.Continue sweeping across the face, neck and décolleté.Tip: If your undereyes tend to crease, apply a small amount powder to this area immediately after your concealer. Then proceed with your complexion routine before setting the rest.",
        photos: [
          "https://cdn.shopify.com/s/files/1/0127/2332/products/Soft_Focus_Finishing_Powder_Open_B_resizedandbaseline_White_Background_14812b31-5194-4fa5-b0de-ec1da98bb042.jpg?v=1585002860&width=640&format=webp",
          "https://cdn.shopify.com/s/files/1/0127/2332/products/ILIA_Soft_Focus_Finishing_Powder_Smear_1200x1600_1000x_e12d555f-a5c7-4385-a16b-60ef117bd0e2.jpg?v=1581556486&width=640&format=webp",
          "https://cdn.shopify.com/s/files/1/0127/2332/products/White-Powder-Hero-product.jpg?v=1581619431&width=640&format=webp",
          "https://cdn.shopify.com/s/files/1/0127/2332/products/Powder_Brush_2_e88396e6-e130-49c3-bace-5ece21c18e56.jpg?v=1601485776&width=640&format=webp",
        ],
        category: "complexion",
        bestSeller: false,
        newArrival: false,
        essentials: false
      },
    
      {
        id: uuid(),
        name: "TRUE SKIN SERUM CONCEALER",
        price: 3200,
        description:
          "Correct and perfect. True Skin Serum Concealer blends in with a creamy, creaseless stretch to instantly reduce the appearance of dark circles, discoloration, and blemishes. Stabilized Vitamin C, Mastic, and Albizia Julibrissin Bark Extract help to improve skin over time, promoting a brighter, smoother, and more even complexion while helping to protect against environmental damage. Available in 20 shades.Size: 0.16 oz | 5 ml",
        ingredients:
          "Aloe Barbadensis Leaf Juice, Tetradecane, Hydrogenated Polydecene, Glycerin, Disteardimonium Hectorite, Polyglyceryl-3 Diisostearate, Decyl Isostearate, Isostearyl Isostearate, Isostearic Acid, Silica, Propanediol, Sorbitan Sesquiisostearate, Polyglyceryl-6 Polyricinoleate, Gluconolactone, Lauroyl Lysine, Albizia Julibrissin Bark Extract, Magnesium Sulfate, Sodium Chloride, Zinc Stearate, Hydrogenated Lecithin, Tetrahexyldecyl Ascorbate, Sodium Benzoate, Dodecane, Caprylic/Capric Triglyceride, Hexadecane, Pistacia Lentiscus (Mastic) Gum, Calcium Gluconate, Ethylhexylglycerin, Darutoside, Phenethyl Alcohol. May Contain/Peut Contenir (±): CI 77891 (Titanium Dioxide), CI 77491, CI 77492, CI 77499 (Iron Oxides).",
        howto:
          "For best results, use immediately after True Skin Serum Foundation. If applying directly to skin, prep with 3-4 drops of True Skin Radiant Priming Serum and let it dry down to a soft-to-the-touch finish.Apply 3 dots of concealer below the eye and around any areas you would like to even out skin tone. Blend with your fingertips or your favorite complexion brush. Finish by gently pressing product into the skin with your ring finger. Follow with your favorite creamy complexion products and Soft Focus Finishing Powder.",
        photos: [
            "https://cdn.shopify.com/s/files/1/0127/2332/products/Serum_Concealer_Open_resizedandbaseline_SC1-75.jpg?v=1629328564&width=640&format=webp", 
            "https://cdn.shopify.com/s/files/1/0127/2332/products/Swatch_SC1-75.jpg?v=1629328564&width=640&format=webp", 
            "https://cdn.shopify.com/s/files/1/0127/2332/files/ILIA_TSSC_BEFORE_AFTER_1200X1600-SC1.75_98f8a1c8-00f9-46a3-8b81-40da75a4ee20.jpg?v=1714598282&width=640&format=webp", 
            "https://cdn.shopify.com/s/files/1/0127/2332/files/ILIA_2024_SC_1.75_JESS_AFTER_EXPRESSION_0098.jpg?v=1714598279&width=640&format=webp"
        ],
        category: "complexion",
        bestSeller: false,
        newArrival: false,
        essentials: false
      },
    
      //===============
      //EYE
      //===============
  
      {
        id: uuid(),
        name: "FULLEST VOLUMIZING MASCARA",
        price: 2800,
        description:
          "A clean volumizing mascara that wraps each lash in weightless, buildable volume without flaking, smudging, or irritating even the most sensitive eyes. New lighter, mono-material tube reduces carbon emissions by 39% and waste by 22%.* Size: 0.32 fl oz | 9.5 ml",
        ingredients:
          "Aqua/Water/Eau, Cera Alba/Beeswax/Cire d'abeille, Synthetic Beeswax, Glyceryl Stearate, Glycerin, Cera Carnauba/Copernicia Cerifera (Carnauba) Wax/Cire de Carnauba, Dimer Dilinoleyl Dimer Dilinoleate, Stearic Acid, Palmitic Acid, Ethylhexyl Polyhydroxystearate, Polyglyceryl-6 Polyricinoleate, Jojoba Esters, Acacia Senegal Gum, Panthenol, Benzyl Alcohol, Caprylyl Glycol, Sodium Hydroxide, Xanthan Gum, Caprylhydroxamic Acid, Arginine, Lauric Acid, Myristic Acid, Arachidic Acid, Oleic Acid, Tocopherol. May Contain/Peut Contenir (±): CI 77499 (Iron Oxide).",
        howto:
          "Wipe off any excess product from the brush. Nestle the brush into the base of lashes and glide upwards, wiggling from side to side. Apply several coats for more volume and dimension. Use the tip of the brush to separate and define hard-to-reach lashes.",
        photos: [
          "https://cdn.shopify.com/s/files/1/0127/2332/files/0001_ILIA_2024_FULLEST_MASCARA_REPACK_OPEN.jpg?v=1706233052&width=640&format=webp",
          "https://cdn.shopify.com/s/files/1/0127/2332/products/Fullest-Mascara_Swatch_White-background.jpg?v=1706233052&width=640&format=webp",
          "https://cdn.shopify.com/s/files/1/0127/2332/products/1200x1600_Fullest__0002_06_POPPY_FULLEST_MASCARA_APPLICATION_0412-r2.jpg?v=1706233052&width=640&format=webp",
          "https://cdn.shopify.com/s/files/1/0127/2332/products/Fullest_Clinicals_1200x1600_d8bd7d6d-17a1-437b-bbe9-cd3dcad1002a.jpg?v=1706233052&width=640&format=webp",
        ],
        category: "eye",
        bestSeller: true,
        newArrival: true,
        essentials: false
      },
    
    {
        id: uuid(),
        name: "THE NECESSARY EYESHADOW PALETTE",
        price: 4000,
        description:
          "This new formula delivers high pigment and blends easily to a soft, wash of color with little fall out. Each of our palettes comes with an assortment of matte, satin and metallic finishes to achieve any look from day to night. Grace: Soft Gold PearlCocoon: Warm Nude Matte1979: Terracotta MatteUnite: Copper PearlHunter: Deep Brick Red MatteLineup: Rich Warm Brown Matte. Size: 6 x 0.05 oz | 1.5 g",
        ingredients:
          "Mica, Alumina, Synthetic Fluorphlogopite, Zinc Stearate, Nylon-12, Butyloctyl Salicylate, Caprylic/Capric Triglyceride, Ethyl Macadamiate, Lonicera Caprifolium (Honeysuckle) Flower Extract, Lonicera Japonica (Honeysuckle) Flower Extract, Tin Oxide, Simmondsia Chinensis (Jojoba) Seed Oil, Tocopherol, Malic Acid. May Contain/Peut Contenir (±): CI 77891 (Titanium Dioxide), CI 77491, CI 77492, CI 77499 (Iron Oxides), CI 16035 (Red 40 Lake), CI 19140 (Yellow 5 Lake).",
        howto:
          "For a seamless application, we recommend using our Shadow Brush for a precise application and Blending Brush to softly diffuse. When without tools, go bare and apply with your finger. The product is velvety soft and intensely pigmented with shades designed to universally work together and flatter all skin tones. Add a swipe of our Clean Line Liquid or Gel Liner, then a coat or two of our ILIA Mascara to complete your look.",
        photos: [
          "https://cdn.shopify.com/s/files/1/0127/2332/products/The-Necessary-Eyeshadow-Palette_Warm_Open_BB_resizedandbaseline_White_Background_deba2307-0241-4791-a9ee-cb63ca79eff1.jpg?v=1596064096&width=640&format=webp",
          "https://cdn.shopify.com/s/files/1/0127/2332/products/Eyeshadow-Swatch-Lineup-warm_1000x_bc826458-c520-4bf9-8c19-dd2a32831119.jpg?v=1596064096&width=640&format=webp",
          "https://cdn.shopify.com/s/files/1/0127/2332/products/2021-01_EYESHADOW_PALETTE_WARM_014-FINAL-V2.jpg?v=1658965379&width=640&format=webp",
          "https://cdn.shopify.com/s/files/1/0127/2332/products/ILIA_Arm_Swatches_Eyeshadow_Warm-Nude_2020.jpg?v=1664830565&width=640&format=webp",
        ],
        category: "eye",
        bestSeller: true,
        newArrival: false,
        essentials: true
  
    },
    
    
    {
        id: uuid(),
        name: "BRIGHT START RETINOL ALTERNATIVE EYE CREAM",
        price: 4600,
        description: "Slow down your morning and wake up eyes with a potent eye cream that delivers the benefits of retinol without the drawbacks. With a weightless texture that layers seamlessly under makeup, Bright Start is clinically proven to refresh and revive tired eyes instantly—and reduce dark circles, puffiness, fine lines, and wrinkles over time. Light-reflecting pearl illuminates, and the cooling ceramic tip doubles as a massage tool for a moment of calm as you begin your day. Size: 0.5fl oz | 15ml",
        ingredients: "Aqua/Water/Eau, Caprylic/Capric Triglyceride, Persea Gratissima (Avocado) Oil, Propanediol, Glycerin, Pentylene Glycol, Cetearyl Alcohol, Candelilla/Jojoba/Rice Bran Polyglyceryl-3 Esters, Jojoba Oil/Macadamia Seed Oil Esters, Brassica Campestris/Aleurites Fordi Oil Copolymer, Silica, Glyceryl Stearate, Sodium Polyacryloyldimethyl Taurate, Behenyl Alcohol, Caffeine, Moringa Oil/Hydrogenated Moringa Oil Esters, Sodium Stearoyl Lactylate, Mica, Hydroxyacetophenone, Caprylyl Glycol, 1,2-Hexanediol, Squalene, Caprylic/Capric/Succinic Triglyceride, Xanthan Gum, Citric Acid, Sodium Phytate, Phytosteryl Macadamiate, Persea Gratissima (Avocado) Fruit Extract, Crithmum Maritimum Extract, Phytosterols, Tocopherol, Acetyl Hexapeptide-8, Sodium Citrate, CI 77891 (Titanium Dioxide), CI 77491 (Iron Oxide).",
        howto: "",
        photos: [
            "https://cdn.shopify.com/s/files/1/0127/2332/files/IMG-3401.jpg?v=1695324158&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/products/ILIA_BRIGHT-START_SWATCH_1200x1600_275ebbaa-dec6-4628-95fc-f09ac46cbbe2.jpg?v=1695324158&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/products/ILIA_BrightStart_Model_2.jpg?v=1695324158&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/products/ILIA_2022_BrightStart_RitualHowTo_ILIA-1200x1600.jpg?v=1695324158&width=640&format=webp"
        ],
        category: "eye",
        bestSeller: false,
        newArrival: false,
        essentials: true
      },
    
      {
        id: uuid(),
        name: "CLEAN LINE LIQUID EYELINER",
        price: 2800,
        description: "Our quick-dry precision liner stays put from day to night without smudging or running. Create a barely-there tightline or a bolder cat eye with ease and lasting definition. 0.01 fl oz | 0.55 ml",
        ingredients: "Aqua/Water/Eau, Charcoal Powder, Styrene/Acrylates Copolymer, Butylene Glycol, 1,2-Hexanediol, Diglycerin, Polyglyceryl-10Isostearate, Polyglyceryl-10Laurate, Pentylene Glycol, Phenoxyethanol, Citric Acid, Caprylyl Glycol, Ethylhexylglycerin.",
        howto: "Using the fine, flexible soft tip applicator, gently define eyes with a soft, sweeping motion close to lash line. Finish with a coat or two of ILIA Mascara for long, lifted lashes that tie everything together.",
        photos: [
            "https://cdn.shopify.com/s/files/1/0127/2332/products/Liquid_Liner_B_resizedandbaseline_White_Background_45e694f1-8009-4ee4-9442-8e9bd7b4fdd3.jpg?v=1586990531&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/products/Liquid_Liner_Swatch_1000x_0d01e907-ae75-413e-93e6-ba61b5c83e5a.jpg?v=1585177376&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/products/ILIA_Website_Crop_0007s_0000_Liquid-Liner_1.jpg?v=1585177376&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/products/Liquid_Liner_1.jpg?v=1585177376&width=640&format=webp"
        ],
        category: "eye",
        bestSeller: false,
        newArrival: false,
        essentials: false
    },
    
    
    
    //==============
    //LIP + CHEEKS
    //==============
    
    {
        id: uuid(),
        name: "BALMY TINT HYDRATING LIP BALM",
        price: 2800,
        description: "The cult-classic lip balm that started it all, reimagined. Each Balmy Tint is carefully poured by hand to maintain the integrity of the active formula. Available in eight easy-to-wear shades for an effortless wash of color that you can dial up or down. Size: 0.15 oz | 4.4 g",
        ingredients: "Ricinus Communis (Castor) Seed Oil, Cera Alba/Beeswax/Cire d'abeille, Helianthus Annuus (Sunflower) Seed Oil, Octyldodecanol, Butyrospermum Parkii (Shea) Butter, Polyhydroxystearic Acid, Candelilla Cera/Euphorbia Cerifera (Candelilla) Wax/Cire de Candelilla, Mica, Oryza Sativa (Rice) Bran Extract, Jojoba Esters, Rosa Canina Seed Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Caprylic/Capric Triglyceride, Helianthus Annuus (Sunflower) Seed Wax, Theobroma Cacao (Cocoa) Seed Butter, Citrus Aurantium Dulcis (Orange) Peel Cera/Wax, Olea Europaea (Olive) Fruit Oil, Persea Gratissima (Avocado) Oil, Helianthus Annuus (Sunflower) Extract, Vanillin, Caprylyl Glycol, Ethylhexylglycerin, Tocopheryl Acetate, Rosmarinus Officinalis (Rosemary) Leaf Extract, Tocopherol, Acacia Decurrens Flower Cera/Wax, Polyglycerin-3, Salicornia Herbacea Extract. May Contain/Peut Contenir (±): CI 15850 (Red 7 Lake), CI 73360 (Red 30 Lake), CI 77491, CI 77492, CI 77499 (Iron Oxides), CI 77891 (Titanium Dioxide), CI 77742 (Manganese Violet), CI 16035 (Red 40 Lake).",
        howto: "Apply to lips straight from the bullet. The flat top makes application easy—no mirror needed. Swipe once for a sheer hint of color. Keep swiping for more payoff. Reapply as needed throughout the day.",
        photos: [
            "https://cdn.shopify.com/s/files/1/0127/2332/products/balmy-tint-wanderlust-whiteBG.jpg?v=1621965579&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/products/wanderlust-swatch.jpg?v=1620777882&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/products/WEB__0002_27_CINDY_BALMY_TINT_WANDERLUST_APPLICATION_0372-R1.jpg?v=1622058350&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/products/WEB__0000__0008_Wanderlust-Smear.tif_926d78c4-e60f-4461-a3bf-c2b693a52df7.jpg?v=1622507741&width=640&format=webp"
        ],
        category: "lips-cheeks",
        bestSeller: true,
        newArrival: false,
        essentials: true
    },
    
    {
        id: uuid(),
        name: "Multi-Stick",
        price: "3600",
        description: "This creamy cheek and lip color comes in a twist-up stick for easy application on the go. No tools required: Simply swipe and blend for skin that looks and feels alive. Keep it simple with your favorite Multi-Stick shade, or mix, match, and layer to create a customized look. Available in both natural and luminous finishes. Size: 0.15 oz | 4.5 g",
        ingredients: "Helianthus Annuus (Sunflower) Seed Oil,Ricinus Communis (Castor) Seed Oil,Theobroma Cacao(Cocoa) SeedButter,Cera Alba/Beeswax/Cire d'abeille,Candelilla Cera/Euphorbia Cerifera (Candelilla) Wax/Cire deCandelilla,Mica,Sesamum Indicum (Sesame) Seed Oil,Butyrospermum Parkii (Shea Butter),Citrus AurantiumDulcis (Orange) Peel Cera/Wax,ZeaMays (Corn) Starch, Persea Gratissima (Avocado) Oil, Tocopherol. MayContain (+/-): CI 77891 (Titanium Dioxide), CI 77491, CI 77492, CI 77499 (Iron Oxides), CI 15850 (Red 7), CI 45410(Red 28), CI 19140 (Yellow 5). This product is certified Gluten-free.",
        howto: "To use a blush stick, apply to cheeks and lips straight from the tube. Blend into skin with fingers or a brush. For a wash of lip color, glide the tube over lips like a lipstick. For seamless cheek application, pick up color from the tube with our Perfecting Buff Brush and gently press it into your skin.  Repeat for bolder color payoff.  For longer-lasting wear, set with a light layer of Soft Focus Finishing Powder. Before using your Multi-Stick for the first time, you may need to warm the surface with your finger to ensure a smooth glide.",
        photos : [
            "https://cdn.shopify.com/s/files/1/0127/2332/products/Multi-Stick_Open_Tenderly-White.jpg?v=1649203617&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/products/Multi-Stick_Tenderly_Smear.jpg?v=1649203617&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/products/1200X1600__0009_MULTI_Tenderly_Ashley_2_0630_688f29a1-3ae8-4cdc-9403-b3046bb80724.jpg?v=1684520758&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/products/MSIngredientsPPageAsset-1200x1600ILIA_44acea58-53b9-4e8e-af37-45bd202e7c20.png?v=1684520758&width=640&format=webp"
        ],
        category: "lips-cheeks",
        bestSeller: true,
        newArrival: false,
        essentials: true
    },
    
    {
        id: uuid(),
        name: "LIQUID LIGHT SERUM HIGHLIGHTER",
        price: 4200,
        description: "ILIA Liquid Light Serum Highlighter is a gel-based liquid highlighter that illuminates and gives a natural dewy finish to the skin. Vegan and cleanly formulated with a blend of organic and natural botanicals, the liquid highlighter has a serum-like consistency that melts into your skin and provides a boost of freshness on contact with a soft wash of metallic glow. Marine Actives in this liquid highlighter help protect against UV light and pollution. Size: 0.5 fl oz | 15 ml",
        ingredients: "Aqua/Water/Eau, Glycerin, Diisostearyl Malate, Mica, Isopentyldiol, Polyglyceryl-10 Eicosanedioate/Tetradecanedioate, Oryza Sativa (Rice) Starch*, Benzyl Alcohol, Maris Aqua/Sea Water/Eau de Mer, Xanthan Gum, Alcohol, Acrylates Copolymer, Dehydroacetic Acid, Pistacia Lentiscus (Mastic) Gum, Lecithin, Hydrolyzed Algin, Phenethyl Alcohol, Sucrose, Tin Oxide. May Contain/Peut Contenir (±): CI 77891 (Titanium Dioxide), CI 77491, CI 77492, CI 77499 (Iron Oxides).",
        howto: "A multi-tasking liquid highlighter that is best used when mixed together with your favorite complexion product for a natural back-lit glow. Pump it into ILIA True Skin Serum Foundation or use on its own along the high points of the face or lids. Product dries quickly so be sure to blend edges immediately after application for a smooth, seamless finish that really glows. It can also be applied with our Perfecting Buff Brush.",
        photos: [
            "https://cdn.shopify.com/s/files/1/0127/2332/products/Liquid_Light_Open_Nova_B_resizedandbaseline_White_Backgroundcopy.jpg?v=1631835788&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/products/LL_smear_nova_1000x_201536b6-ced1-4812-b591-f03e3c41dd04.jpg?v=1631835795&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/products/ILIA_Website_Crop_0008s_0002_LL_Nova_2.jpg?v=1631835795&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/products/Nova3copy.jpg?v=1631550270&width=640&format=webp"
        ],
        category: "lips-cheeks",
        bestSeller: true,
        newArrival: true,
        essentials: false
    },
    
    {
        id: uuid(),
        name: "Color Haze",
        price: 3200,
        description: "A little color goes a long way. Made with jojoba and coconut oil, this two-in-one lip and cheek cream nourishes skin and blends out to a soft wash of color. With a precise metal applicator for fuss-free application on-the-go. Size: 0.23 fl oz | 7 ml",
        ingredients: "Undecane, Tridecane, Simmondsia Chinensis (Jojoba) Seed Oil*, Mica, Hydrogenated Styrene/Isoprene Copolymer, Silica, Kaolin, Cocos Nucifera (Coconut) Oil*, Hydrogenated Olive Oil Unsaponifiables, Balanites Roxburghii Seed Oil*, Hydrogenated Vegetable Oil, Vanillin, Hectorite, Candelilla Cera/Euphorbia Cerifera (Candelilla) Wax/Cire de Candelilla, Elaeis Guineensis (Palm) Oil, Gossypium Herbaceum (Cotton) Seed Oil, Bidens Pilosa Extract, Tocopherol, Linum Usitatissimum (Linseed) Seed Oil, Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate, Alumina, Magnesium Oxide. May Contain/Peut Contenir (±): CI 77891 (Titanium Dioxide), CI 77491, CI 77492, CI 77499 (Iron Oxides), CI 15850 (Red 6), CI 15850 (Red 7 Lake), CI 42090 (Blue 1 Lake).",
        howto: "Cheek: A little goes a long way. Dab a dot or two along the apples of the cheeks, then blend out with fingers or your favorite complexion brush to achieve a soft wash of color. Lip: Apply directly to the center of your lips. Lightly blend outward with your finger for a blotted, diffused look that transforms to a matte finish. For extra moisture, layer Balmy Days Lip Conditioner underneath or Balmy Gloss Tinted Lip Oil on top.",
        photos: [
            "https://cdn.shopify.com/s/files/1/0127/2332/products/Color_Haze_Open_Before_Today_B_resizedandbaseline_White_Background.jpg?v=1599168744&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/products/CH_Smear_before_today_1000x_3fa547fb-0f59-4848-a7aa-9de84552d4d9.jpg?v=1599168778&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/products/Retouched_Color-Haze_models_1200x1600_Before-Today.jpg?v=1620765884&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/products/Before_Today_1.jpg?v=1632855775&width=640&format=webp"
        ],
        category: "lips-cheeks",
        bestSeller: true,
        newArrival: false,
        essentials: true
    },
    
    
    //==================
    //SKINCARE
    //==================
    
    {
        id: uuid(),
        name: "The Base Face Milk",
        price: 5800,
        description: "Let your skin drink it in. This vegan face milk sinks in on contact, flooding skin with a calming boost of moisture. With every wear, it’s clinically proven to reduce redness, smooth texture, and strengthen the skin barrier. Lightweight and layerable, the versatile formula flexes to fit your ritual—use it as your moisturizer to lock in hydration, or under a cream when skin feels dry. It’s the perfect prep step before any ILIA complexion product. Size: 3.4 fl oz | 100 ml",
        ingredients: "Aqua/Water/Eau, Propanediol, Caprylic/Capric Glycerides, Squalane, Butylene Glycol, Glycerin, Argania Spinosa Kernel Oil, 1,2-Hexanediol, Hydroxyethyl Acrylate/Sodium Acryloyldimethyl Taurate Copolymer, Hydroxyacetophenone, Isohexadecane, Allantoin, Linoleic Acid, Phospholipids, Phytosterols, Caprylyl Glycol, Polyglyceryl-10 Stearate, Hydrolyzed Opuntia Ficus-Indica Flower Extract, Polysorbate 60, Sorbitan Isostearate, Hyaluronic Acid, Hydrolyzed Hyaluronic Acid, Sodium Hyaluronate, Chlorella Vulgaris Extract, Lactic Acid.",
        howto: "",
        photos: [
            "https://cdn.shopify.com/s/files/1/0127/2332/files/ILIA_Face_Milk_Open_1200x1600_437c4be6-95d2-4836-a9d5-2aee08caaadd.jpg?v=1702667860&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/files/ILIA_Face_Milk_Swatch_1200x1600_b33231ed-6bbc-46fa-ad5f-5832f2c32f46.jpg?v=1702667860&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/files/4_ILIA_2023_FaceMilk_B_A.jpg?v=1702667860&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/files/8_ILIA_2023_FaceMilk_Benefits2_ILIA-1200x1600_1_e102882c-2dfb-4117-b156-4a004e777695.jpg?v=1704322772&width=640&format=webp"
        ],
        category: "skincare",
        bestSeller: false,
        newArrival: true,
        essentials: false
    },
    
    {
        id: uuid(),
        name: "True Skin Radiant Priming Serum",
        price: 5200,
        description: "Bridging the gap between makeup and skincare, ILIA’s True Skin Radiant Priming Serum does more than create a perfect base for makeup application. Utilizing ingredients like Hibiscus Extract, Aloe and Beta-Glucan, this silicone-free primer helps to firm, moisturize and soothe skin, while protecting it from harmful environmental factors that cause aging. 1fl oz | 30 ml",
        ingredients: "Aloe Barbadensis Leaf Juice*, Maltose, Gluconolactone, Glycerin, Caprylyl/Capryl Glucoside, Propanediol, Sodium Benzoate, Caprylic/Capric Triglyceride, Agave Tequilana Leaf Extract, Xanthan Gum, Chondrus Crispus Extract, Pistacia Lentiscus (Mastic) Gum, Hydrogenated Lecithin, Mica, Calcium Gluconate, Benzyl Alcohol, Ethylhexylglycerin, Lithothamnion Calcareum Extract, Beta- Glucan, Caprylyl Glycol, 1,2-Hexanediol, Citric Acid, Sodium Hydroxide, Benzoic Acid, Phenethyl Alcohol, Dehydroacetic Acid, Hibiscus Sabdariffa Flower Extract, Potassium Sorbate, Titanium Dioxide (Ci 77891).",
        howto: "For best results, apply True Skin Radiant Priming Serum at the end of your skincare routine and before your favorite complexion products. Shake well before use. Dispense 3-4 drops into the palm of your hand. Apply with your fingers as you would a serum. Pat the formula into skin. On dry down, observe a mild tightening effect on skin as the primer transforms to a silky, soft-to-the-touch finish. Allow 1-2 minutes for the primer to set, then follow with your favorite clean foundation.",
        photos: [
            "https://cdn.shopify.com/s/files/1/0127/2332/products/Priming_Serum_B_resizedandbaseline_White_Background_8facc803-e8d1-45da-bd2c-ba89f8919295.jpg?v=1585178409&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/products/Primer_2.jpg?v=1581559188&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/products/ILIA_Website_Crop_0005s_0002_Priming-Serum_3.jpg?v=1581555767&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/products/Priming-Serum-Closed.jpg?v=1583865529&width=640&format=webp"
        ],
        category: "skincare",
        bestSeller: true,
        newArrival: true,
        essentials: false
    },
    
    {
        id: uuid(),
        name: "The Cleanse Soft Foaming Cleanser",
        price: 3200,
        description: "Reset your skin. This foaming facial cleanser feels like nothing—but does everything. Removes makeup, mineral SPF, and pollution without stripping. Respects pH for a healthy skin barrier. Replenishes hydration that’s normally lost during cleansing. ​​Rinses clean to leave skin soft and refreshed—ready for the rest of your ritual. Formulated without fragrance. pH-balanced. Safe for sensitive eyes + skin. Size: 6.76 fl oz / 200 ml",
        ingredients: "Aqua/Water/Eau, Glycerin, Decyl Glucoside, Sodium Methyl Cocoyl Taurate, Polyglyceryl-10 Laurate, Sodium Lauroyl Lactylate, Hydroxyacetophenone, Saccharide Isomerate, 1,2-Hexanediol, Caprylyl Glycol, Sodium Phytate, Citric Acid, Sodium Citrate.",
        howto: "",
        photos: [
            "https://cdn.shopify.com/s/files/1/0127/2332/files/ILIA_The_Cleanse_Open_White_1200x1600_36ca00c2-a4df-4e5e-91da-641db47ac976.jpg?v=1688145593&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/files/2_477688d6-2657-4ad4-93c0-e6fa7ce7012a.jpg?v=1688751610&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/files/1200x1600_0005_26_CLEANSER_KARLI_2477_0b657428-342e-496c-a39c-487b2b58cad6.jpg?v=1688769419&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/files/5_33c0ba32-a532-42c2-ab43-54feed5bb346.jpg?v=1688760217&width=640&format=webp"
        ],
        category: "skincare",
        bestSeller: false,
        newArrival: false,
        essentials: false
    },
    
    {
        id: uuid(),
        name: "Blue Light Mist",
        price: 3800,
        description: "A non-sticky, 3-in-1 mist that hydrates, sets makeup, and helps defend skin from the harmful effects of blue light and pollution. The ultra-fine spray envelops skin in a weightless veil that helps boost skin's defenses against environmental stressors. The natural lavender scent soothes your senses at first spritz—perfect for whenever you need a moment to ground yourself during the day. Size: 1.7fl oz | 50ml",
        ingredients: "Aqua/Water/Eau, Pentylene Glycol, Propanediol, Aloe Barbadensis Leaf Juice, Caprylyl/Capryl Glucoside, Maris Aqua/Sea Water/Eau de Mer, Ethylhexylglycerin, Caprylic/Capric Triglyceride, Sodium Gluconate, Lavandula Angustifolia (Lavender) Oil, Tocopheryl Acetate, Citric Acid, Hydrolyzed Algin, Phenethyl Alcohol, Pistacia Lentiscus (Mastic) Gum, Hydrogenated Lecithin, Sucrose, Maltodextrin, Sodium Benzoate, Potassium Sorbate, Glycerin, Biosaccharide Gum-1, Sodium Levulinate, Glyceryl Caprylate, Caesalpinia Spinosa Fruit Pod Extract, Sodium Anisate, Helianthus Annuus (Sunflower) Sprout Extract, Linalool.",
        howto: "Hold the bottle about 12 inches away from your face. Press the nozzle down fully while moving your hand in an “X” or “Z” motion for the most even application. Can be used after makeup to set or throughout the day as needed to hydrate and refresh skin.",
        photos: [
            "https://cdn.shopify.com/s/files/1/0127/2332/products/Blue_Light_Mist_Open.jpg?v=1617059909&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/products/Blue_Light_Mist_Model-1_0640536b-eecb-4d1b-b855-741c9d8267dd.jpg?v=1617059909&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/products/Blue_Light_Clinicals_1day_b996373d-1ed5-459a-912f-ec147059b19d.jpg?v=1617059909&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/products/Blue_Light_Mist_Model-2_79086f03-8c19-4b67-a55c-3d198c03aa9b.jpg?v=1617059909&width=640&format=webp"
        ],
        category: "skincare",
        bestSeller: false,
        newArrival: true,
        essentials: false
    },
    
  
    
    
    //================
    //TOOLS
    //=================
    
    
    {
        id: uuid(),
        name: "PERFECTING BUFF BRUSH",
        price: 4000,
        description: "Our Perfecting Buff Brush is a versatile tool that helps set complexion products faster. The densely packed bristles buff and blend both cream and liquid formulas seamlessly into the skin, creating a smooth finish. Our buffing brush—like all of our brushes—is cruelty-free and easy to clean with mild soap and warm water.",
        ingredients: "Handle: Aluminum. Bristles: PBT (a synthetic, man-made fiber).",
        howto: "",
        photos: [
            "https://cdn.shopify.com/s/files/1/0127/2332/products/Perfecting_Buff_Brush_WhiteBG.jpg?v=1600705770&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/products/Buff_Brush_2.jpg?v=1657302490&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/products/2021-01_BUFF_BRUSH_016-FINAL.jpg?v=1657302490&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/products/Buff_Brush.jpg?v=1657302490&width=640&format=webp"
        ],
        category: "tools",
        bestSeller: true,
        newArrival: true,
        essentials: false
    },
    
    {
        id: uuid(),
        name: "COMPLEXION BRUSH",
        price: 3400,
        description: "Our Complexion Brush is designed to easily apply and buff product into the skin, including hard to reach places. The sustainably harvested wood handle is complemented by soft bristles that are made of synthetic, man-made fiber. All of our brushes are cruelty-free and easy to clean with mild soap and warm water.",
        ingredients: "Handle: Aluminum and FSC (Forest Stewardship Council) certified wood. Bristles: PBT (a synthetic, man-made fiber).",
        howto: "",
        photos: [
            "https://cdn.shopify.com/s/files/1/0127/2332/products/Complexion_Brush_WhiteBG.jpg?v=1600705766&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/products/complexionw_product.jpg?v=1644527663&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/products/2021-01_COMPLEXION_BRUSH_005-FINAL.jpg?v=1654809810&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/products/Complexion_Brush.jpg?v=1654809810&width=640&format=webp"
        ],
        category: "tools",
        bestSeller: false,
        newArrival: false,
        essentials: false
    },
    
    {
        id: uuid(),
        name: "FINISHING POWDER BRUSH",
        price: 4200,
        description: "Our Finishing Powder Brush is designed to seamlessly blend and buff powder for a natural-looking finish. The sustainably harvested wood handle is complemented by a domed, full-bodied brush that is perfect for dusting loose or pressed powders into skin. All of our brushes are cruelty-free and easy to clean with mild soap and warm water.",
        ingredients: "Handle: Aluminum and FSC (Forest Stewardship Council) certified wood. Bristles: PBT (a synthetic, man-made fiber).",
        howto: "Use soft, circular or back and forth windshield wiper motions to blend eyeshadow and contour the crease of the eye. To use with highlighter, gently sweep onto the high points of the face where light would naturally reflect.",
        photos: [
            "https://cdn.shopify.com/s/files/1/0127/2332/products/Finishing_Powder_Brush_WhiteBG.jpg?v=1600705767&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/products/Powder_Brush_2.jpg?v=1657302437&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/products/Powder_Brush.jpg?v=1657302437&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/products/grouppurple.jpg?v=1657302437&width=640&format=webp"
        ],
        category: "tools",
        bestSeller: false,
        newArrival: false,
        essentials: false
    },
    
    {
        id: uuid(),
        name: "BLENDING BRUSH",
        price: 2600,
        description: "Our Blending Brush is versatile and can be used to blend eyeshadow in the contour and crease of the eye. The sustainably harvested wood handle is complemented by an oversized, fluffy brush that can also be used to apply highlighter to the high points of your face.",
        ingredients: "Handle: Aluminum and FSC (Forest Stewardship Council) certified wood. Bristles: PBT (a synthetic, man-made fiber).",
        howto: "Use soft, circular or back and forth windshield wiper motions to blend eyeshadow and contour the crease of the eye. To use with highlighter, gently sweep onto the high points of the face where light would naturally reflect.",
        photos: [
            "https://cdn.shopify.com/s/files/1/0127/2332/products/Blending_Brush_WhiteBG.jpg?v=1631570585&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/products/Blending_Brush_3.jpg?v=1657302383&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/products/2021-01_BLENDING_BRUSH_025-FINAL.jpg?v=1657302383&width=640&format=webp",
            "https://cdn.shopify.com/s/files/1/0127/2332/products/Blending_Brush.jpg?v=1657302383&width=640&format=webp"
        ],
        category: "tools",
        bestSeller: false,
        newArrival: false,
        essentials: true
    },
    
  ];

router.get('/', (req, res) => {
    res.send('THIS IS MY API HOME PAGE');
});

router.get('/products', (req, res) => {
    res.json(products)
});

router.get('/products/:id', (req, res) => {
  const { id } = req.params;
  const product = products.find(p => p.id === id);
  if (!product) {
    res.status(404).json({ error: 'Product not found' });
  } else {
    res.json(product);
  }
});

export default router;
import React from 'react';

const recipes = [
  {
    title: "Lemon-Garlic Chicken with Green Beans",
    image: "https://www.eatingwell.com/thmb/QMZf5W_Jw-QXEVsCKpWXzyaPNXU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/lemon-garlic-chicken-green-beans-9c28b7d4b07c4d509c3e496bd97e60d1.jpg",
    description: "Simple pan-seared chicken with bright lemon and garlic.",
    instructions: "1. Season chicken with salt, pepper, garlic. 2. Sear in olive oil. 3. Add lemon juice and green beans. 4. Cook until chicken is done."
  },
  {
    title: "Spinach & Mushroom Quiche",
    image: "https://www.eatingwell.com/thmb/Nln_WiMaZnLd_2_JHPteguu9n4o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Spinach-Mushroom-Quiche-3x2-527419b5146d4b7595c99c4d25cd92fd.jpg",
    description: "Healthy breakfast or dinner option full of vegetables.",
    instructions: "1. Preheat oven to 375°F. 2. Sauté mushrooms and spinach. 3. Whisk eggs and milk. 4. Combine and pour into crust. 5. Bake for 35 mins."
  },
  {
    title: "Chickpea Salad Sandwich",
    image: "https://www.eatingwell.com/thmb/1bF-5m1vKtCXbkm_KJ9w4T_JE9M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chickpea-salad-sandwich-dcb7d1017c8f4c51b91ad5c4c52d52a3.jpg",
    description: "A vegetarian protein-packed sandwich for lunch.",
    instructions: "1. Mash chickpeas. 2. Mix with yogurt, mustard, celery, onion. 3. Serve on whole-grain bread with lettuce and tomato."
  },
  {
    title: "Turkey Taco Lettuce Wraps",
    image: "https://www.eatingwell.com/thmb/qKrsovz6TtwFgEiIgrjGHfMbw9A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/turkey-taco-lettuce-wraps-62b9e703d2f64fdd947ba8d3b4e0dd1d.jpg",
    description: "Low-carb tacos using lettuce wraps instead of tortillas.",
    instructions: "1. Brown turkey with taco seasoning. 2. Serve in romaine lettuce leaves. 3. Top with salsa, avocado, and cheese."
  },
  {
    title: "Salmon & Asparagus Sheet Pan",
    image: "https://www.eatingwell.com/thmb/oCUAX_hFe_S2zj7E_9km3cyqV8A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/salmon-asparagus-sheet-pan-cf5c8b08e0ce4ef69e66b8770d75e23b.jpg",
    description: "A full meal cooked on one pan in under 30 minutes.",
    instructions: "1. Place salmon and asparagus on sheet. 2. Drizzle with olive oil and lemon juice. 3. Bake at 400°F for 20 mins."
  },
  {
    title: "Quinoa & Black Bean Bowl",
    image: "https://www.eatingwell.com/thmb/_BNaVuqqV4q5kJ6LppRYhfJcK4Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/quinoa-black-bean-bowl-6e6bd12e54f54834891eb57ec2b222a5.jpg",
    description: "A vegetarian power bowl loaded with protein and fiber.",
    instructions: "1. Cook quinoa. 2. Mix with black beans, corn, tomato. 3. Top with lime juice and avocado slices."
  },
  {
    title: "Greek Yogurt Chicken Salad",
    image: "https://www.eatingwell.com/thmb/dDEIep1uPTfHyzPSZntnEF_ZB-Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/greek-yogurt-chicken-salad-847d74858b8b4c6c9f53b8e4dc541d9b.jpg",
    description: "Classic chicken salad lightened up with Greek yogurt.",
    instructions: "1. Shred cooked chicken. 2. Mix with Greek yogurt, celery, grapes, and almonds. 3. Chill and serve in lettuce cups or bread."
  },
  {
    title: "Shrimp Stir-Fry",
    image: "https://www.eatingwell.com/thmb/mzPKNTbqBzrJds2mF2ybYemQ1f4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/shrimp-vegetable-stirfry-b194ae909f6d41cd8eab5aa17fbe1fc4.jpg",
    description: "Quick and colorful shrimp stir-fry with veggies.",
    instructions: "1. Sauté shrimp in sesame oil. 2. Add bell peppers, broccoli, soy sauce. 3. Cook for 5-7 mins. Serve over brown rice."
  },
  {
    title: "Zucchini Noodles with Pesto",
    image: "https://www.eatingwell.com/thmb/XB8wEF4fFscsmBo_i1SOuvKTf5E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/zucchini-noodles-pesto-6bcb9d28e3d14c8bb37f1355d7fcf702.jpg",
    description: "Low-carb noodles made from zucchini with fresh pesto.",
    instructions: "1. Spiralize zucchini. 2. Sauté lightly. 3. Toss with homemade or store-bought pesto. 4. Serve warm."
  },
  {
    title: "Vegetable Soup",
    image: "https://www.eatingwell.com/thmb/ZfFqLGd19uXOxWOpW3VZrbH_yaY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vegetable-soup-61e0e48e7efc406a8f7a40c3614430c6.jpg",
    description: "Hearty, healthy soup loaded with seasonal vegetables.",
    instructions: "1. Sauté onions and garlic. 2. Add carrots, potatoes, tomatoes. 3. Add broth and simmer 30 mins. 4. Add spinach at end."
  },
  {
    title: "Tuna Avocado Salad",
    image: "https://www.eatingwell.com/thmb/yRBGJKUPPt-Q9m5aQk7pE5Bcn9g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tuna-avocado-salad-d30e2966619d4d759a221b98df80c34e.jpg",
    description: "A no-mayo, low-carb tuna salad.",
    instructions: "1. Mix tuna with avocado, cucumber, lime juice. 2. Add salt, pepper. 3. Serve chilled on lettuce or toast."
  },
  {
    title: "Grilled Chicken Caesar Salad",
    image: "https://www.eatingwell.com/thmb/DQ6oCNsLnmZcWcz5hV3ZRXjcNXY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/grilled-chicken-caesar-salad-1b3f0d0974aa4d24914d216cd155c33e.jpg",
    description: "Classic Caesar made lighter with grilled chicken.",
    instructions: "1. Grill chicken. 2. Toss romaine, croutons, and dressing. 3. Top with sliced chicken and Parmesan."
  },
  {
    title: "Stuffed Bell Peppers",
    image: "https://www.eatingwell.com/thmb/O-FGJfsI8bLxdtzyLd5_6LzFTqU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/stuffed-bell-peppers-1ae69d888a6846df803f7d3c887f7a91.jpg",
    description: "Peppers filled with turkey, rice, and veggies.",
    instructions: "1. Cook ground turkey. 2. Mix with rice and tomato. 3. Stuff into halved peppers. 4. Bake 25 mins at 375°F."
  },
  {
    title: "Oatmeal Energy Balls",
    image: "https://www.eatingwell.com/thmb/ucFPll7B6KQ1gHaNvd8v79GQdeU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/no-bake-oatmeal-energy-balls-62bfa67c8cf84dbf91dc2043ae061dc5.jpg",
    description: "No-bake, high-protein snack for on-the-go.",
    instructions: "1. Mix oats, peanut butter, honey, chocolate chips. 2. Roll into balls. 3. Chill in fridge for 30 mins."
  },
  {
    title: "Egg Muffins with Veggies",
    image: "https://www.eatingwell.com/thmb/SzMQw3ZDBzH2kHzo9JJKUpNq4IY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/egg-muffins-veg-34708e881a2e4a5bbd6b9df620ad1b10.jpg",
    description: "Meal-prep breakfast muffins loaded with veggies.",
    instructions: "1. Whisk eggs with milk. 2. Add diced peppers, spinach, onion. 3. Pour into muffin tin. 4. Bake 20 mins at 375°F."
  },
  {
    title: "Sweet Potato Tacos",
    image: "https://www.eatingwell.com/thmb/bNpNwr_lWucO-CrdBSxrg1tOgJ8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/sweet-potato-tacos-6fdb1f7c4f4c4c10bfb189eb75a7e1c3.jpg",
    description: "Tacos with roasted sweet potatoes and black beans.",
    instructions: "1. Roast cubed sweet potatoes. 2. Warm tortillas. 3. Fill with beans, sweet potatoes, avocado, and salsa."
  },
  {
    title: "Asian Chicken Lettuce Cups",
    image: "https://www.eatingwell.com/thmb/NiKNsSgnEVgWObMEAc5JW5RWzLw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chicken-lettuce-cups-1a2e81df8f3d4e36a88c54eb8cb8b340.jpg",
    description: "Low-carb lettuce cups with savory Asian chicken.",
    instructions: "1. Sauté ground chicken with soy sauce, ginger, garlic. 2. Spoon into lettuce leaves. 3. Garnish with green onions."
  },
  {
    title: "Baked Tilapia with Veggies",
    image: "https://www.eatingwell.com/thmb/UlfnUtBF0h_6w6rFb1nRnBbWIko=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/baked-tilapia-sheet-pan-e693f1b1b2e64b5f8bb5f01e982e195b.jpg",
    description: "Easy sheet-pan meal with fish and vegetables.",
    instructions: "1. Place tilapia and veggies on tray. 2. Add olive oil and herbs. 3. Bake at 375°F for 20 mins."
  },
  {
    title: "Protein Smoothie Bowl",
    image: "https://www.eatingwell.com/thmb/fF_vRA8J7UOE98MInrT6RMGv-qE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/smoothie-bowl-0279c23995e44f19aebcb2c0ec235e6a.jpg",
    description: "Thick smoothie bowl with protein and fruit toppings.",
    instructions: "1. Blend banana, spinach, yogurt, protein powder. 2. Pour into a bowl. 3. Top with berries, seeds, and granola."
  },
  {
    title: "Lentil Soup",
    image: "https://www.eatingwell.com/thmb/6ifMiFADGwXplRJY6o2qvVsmKgc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/lentil-soup-cc4b6e9b7a5b468f9848dfc3fd39556e.jpg",
    description: "Warming, protein-rich vegetarian lentil soup.",
    instructions: "1. Sauté garlic, onion, carrot. 2. Add lentils, broth, tomato paste. 3. Simmer for 40 mins. 4. Serve with lemon wedge."
  }
];

const Recipe = () => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-md p-4">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48 object-cover rounded-xl mb-3"
          />
          <h2 className="text-xl font-semibold mb-1">{recipe.title}</h2>
          <p className="text-gray-700 mb-2">{recipe.description}</p>
          <h3 className="font-bold mt-2">Instructions:</h3>
          <p className="text-sm text-gray-600 whitespace-pre-line">{recipe.instructions}</p>
        </div>
      ))}
    </div>
  );
};

export default Recipe;

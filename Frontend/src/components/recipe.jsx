import React from 'react';

const recipes = [
  {
    title: "Lemon-Garlic Chicken with Green Beans",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgYRSeVPryBM7q31x3E8dWxsWaEtMM2g21gA&s",
    description: "Simple pan-seared chicken with bright lemon and garlic.",
    instructions: "1. Season chicken with salt, pepper, garlic. 2. Sear in olive oil. 3. Add lemon juice and green beans. 4. Cook until chicken is done."
  },
  {
    title: "Spinach & Mushroom Quiche",
    image: "data:image/jpeg;base64,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",
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

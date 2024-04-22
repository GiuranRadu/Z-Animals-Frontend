const info = {
  AFRICA: {
    description: "Africa is home to a multitude of ethnic groups, languages, and traditions, with each region offering its own unique cultural tapestry. Throughout its history, Africa has been a cradle of civilization, with ancient empires such as Egypt, Carthage, and Kush shaping the course of human history. The continent is also renowned for its wildlife, hosting some of the world's most iconic species such as elephants, lions, giraffes, and rhinoceroses. National parks and game reserves across Africa offer unparalleled opportunities for safari adventures, allowing visitors to witness these majestic animals in their natural habitats.",
    images: [
      'https://blog.sunsafaris.com/wp-content/uploads/2016/07/WildlifeSunsets.jpg',
      'https://media.istockphoto.com/id/1406962846/photo/zebras-in-the-african-savanna-at-sunset-serengeti-national-park-tanzania-africa-banner-format.webp?b=1&s=170667a&w=0&k=20&c=Z1aZ6eUb5BOsRGQY0sojypYFE69tribJDBIN8TvUfyA=',
      'https://econreview.berkeley.edu/wp-content/uploads/2023/09/safari-truck-giraffes-micato-safaris-SAFARIGUIDETIPS0721-2549bb165aa34dc193cb8b6f3958654b-e1694024338105.jpg'
    ]
  },
  EUROPE: {
    description: " Europe's diverse ecosystems support a rich variety of fauna, showcasing iconic species such as brown bears in Scandinavian forests and ibex in the Alps. Wetlands like the Danube Delta are havens for waterfowl like herons and flamingos, while rivers and lakes are home to otters and beavers. Conservation efforts across Europe ensure the preservation of its wildlife, offering opportunities for visitors to witness its beauty firsthand through activities like bear watching in Finland or birdwatching along the Mediterranean coast.",
    images: [
      'https://www.interrail.eu/content/dam/blogazine/croatia-plitvice-lakes-forest.adaptive.767.1628163593210.gif',
      'https://cdn-v2.theculturetrip.com/1200x675/wp-content/uploads/2020/11/md7f6f-2.webp',
      'https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/fbqyqtgop9ecpdkufsug'
    ]
  },
  ANTARCTICA: {
    description: "Antarctica, the icy continent at the Earth's southern pole, hosts a remarkable variety of fauna, particularly around its coastal areas. Iconic species include emperor penguins, known for their resilience in enduring the harsh Antarctic winters. The continent is also home to seals such as Weddell, leopard, and crabeater seals, which rely on the icy shores and pack ice for breeding and hunting. Additionally, diverse seabirds like albatrosses and petrels breed on rocky cliffs and islands along the coastline, contributing to the continent's unique ecosystem.",
    images: [
      'https://cdn.britannica.com/75/153475-050-ACE70F47/Adelie-penguins-leopard-seals-Antarctica.jpg',
      'https://scx2.b-cdn.net/gfx/news/2015/antarcticasw.jpg',
      'https://www.pitara.com/media/earth-140_1.jpg'
    ]
  },
  ASIA: {
    description: "Asia's rivers and wetlands are teeming with life, including species like the Ganges river dolphin, Siberian crane, and Asian giant softshell turtle. Meanwhile, its coastal areas support diverse marine life, from coral reefs and mangrove forests to whale sharks and dugongs.",
    images: [
      'https://images.prestigeonline.com/wp-content/uploads/sites/5/2022/04/20120731/ben-peacoc-unsplash-Hero-resized-1600x873.jpg',
      'https://www.khao-sok-riverside-cottages.com/wp-content/uploads/2018/09/asian-elephant-khao-sok.jpg',
      'https://www.fodors.com/wp-content/uploads/2019/03/10_20NaturalWondersinChina__ZhangjiajieNationalPark_shutterstock_140065924.jpg'

    ]
  },
  AUSTRALIA: {
    description: "Australia, often referred to as the 'Land Down Under' is a continent and country renowned for its unique and diverse fauna and animals. Isolated from other landmasses for millions of years, Australia's wildlife has evolved in relative isolation, resulting in a remarkable array of species found nowhere else on Earth.  One of the most iconic animals of Australia is the kangaroo, symbolizing the country's vast outback landscapes. These marsupials, known for their powerful hind legs and distinctive hopping gait, are adapted to arid environments and are a common sight across the continent.",
    images: [
      'https://cdn.naturettl.com/wp-content/uploads/2023/11/14214650/australia-landscapes-5.jpg',
      'https://images.fineartamerica.com/images-medium-large/australia-landscape-2-wendy-white.jpg',
      'https://www.telegraph.co.uk/content/dam/eip/tourism-australia/kangaroo-island-credit-south-australian-tourism-commission.jpg?imwidth=680'
    ]
  },
  NORTHAMERICA: {
    description: "North America, a continent of vast landscapes and diverse ecosystems, is home to iconic wildlife such as the bald eagle, grizzly bear, and bison. From the rugged mountains of the Rockies to the sweeping plains of the Midwest, North America's fauna reflects its rich natural heritage and cultural significance.",
    images:[
      'https://www.wiredforadventure.com/wp-content/uploads/2013/11/Rocky-Mtns-shutterstock_91051508-copy.jpg',
      'https://www.thoughtco.com/thmb/DYm-WHsWs1flf0q3VZWGxPTsBaY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/caribou-58f8cee95f9b581d59700cba.jpg',
      'https://images.nationalgeographic.org/image/upload/v1638890219/EducationHub/photos/bryce-canyon-national-park.jpg'
    ]
  },
  OCEAN: {
    description : "Ocean animals encompass a vast array of fascinating creatures adapted to life in the world's oceans. From the graceful movements of dolphins to the majestic presence of whales, the ocean is teeming with life. Marine mammals such as seals, sea lions, and otters navigate the waters with agility and grace, while sea turtles traverse vast distances across oceans for nesting and feeding grounds. Beneath the waves, coral reefs host a dazzling diversity of marine life, including colorful fish, intricate invertebrates like corals and sea stars, and elusive creatures such as octopuses and seahorses.",
    images: [
      'https://files.worldwildlife.org/wwfcmsprod/images/Coral_Underwater_Colombia/magazine_hero/9oui000dmx__WW239336.jpg',
      'https://www.uclaextension.edu/sites/default/files/styles/course_hero/public/2018-02/the-ocean-environment-an-ecosystem-perspective-environx14.jpg?itok=3geh0uVU',
      'https://positive.travel/wp-content/uploads/2020/08/7b1yRL_t20_z2vPwn-2.jpg'
    ]
  },
  RIVERS:{
    description: " River fauna comprises a diverse array of aquatic life adapted to the flowing waters of rivers and streams. Fish species like trout, salmon, and catfish navigate the currents, while amphibians such as frogs and salamanders thrive in the riparian habitats. Crustaceans like crayfish and freshwater mussels contribute to the ecosystem's biodiversity, while birds such as herons and kingfishers rely on rivers for fishing and nesting. Along the banks, mammals like beavers and otters build their homes, adding to the richness of riverine habitats.",
    images: [
      'https://smartwatermagazine.com/sites/default/files/styles/thumbnail-830x455/public/what_is_a_river.jpg?itok=7SHK_wQm',
      'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2FtYXpvbi1yaXZlci5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH19fQ==',
      'https://www.worldatlas.com/r/w1200/upload/01/17/84/shutterstock-164389889.jpg'
    ]
  },
  SOUTHAMERICA: {
    description: 'South America, a continent of remarkable biodiversity, is home to an astonishing array of fauna. From the dense Amazon rainforest to the towering Andes mountains, its diverse ecosystems support iconic species such as jaguars, macaws, and anacondas. Tapirs, capybaras, and sloths inhabit the lush jungles, while condors soar above the Andean peaks. Along the coasts, penguins and sea lions thrive in the rich marine environments. With its abundance of wildlife, South America offers a captivating glimpse into the wonders of the natural world.',
    images: [
      'https://www.trafalgar.com/real-word/wp-content/uploads/sites/3/2017/08/1-Torres-del-Paine-www.istockphoto.comgbphotoguanaco-at-torres-del-paine-xxxl-gm117149827-15436069-nicolamargaret.jpg',
      'https://www.worldatlas.com/r/w768/upload/8e/a0/8d/toco-toucan-sj-travel-photo-and-video.jpg',
      'https://blog.goway.com/globetrotting/wp-content/uploads/2023/03/panama_three_toed_sloth_shutterstock_2218031995.jpeg'
    ]
  },
  VARIOUSCONTINENTS: {
    description:'',
    images:[
      'https://media.licdn.com/dms/image/D5612AQEOXMn27iLM0w/article-cover_image-shrink_720_1280/0/1692705952341?e=2147483647&v=beta&t=YD4zCaj_h6jZwGTgUDS3-3abjmvtVV0rImExvhNktEA',
      'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg',
      'https://static.vecteezy.com/system/resources/thumbnails/025/284/015/small_2x/close-up-growing-beautiful-forest-in-glass-ball-and-flying-butterflies-in-nature-outdoors-spring-season-concept-generative-ai-photo.jpg'

    ]
  }
};

export default info;

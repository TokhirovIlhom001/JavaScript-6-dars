const reviews = [
    {
        id: 1,
        img:"./images/olma.webp",
        name: 'Apple-fruit',
        sum: 5000
    },
    {
        id: 2,
        img:"./images/o'rik.jpg",
        name: 'Apricot-fruit',
        sum: 5000
    },
    {
        id: 3,
        img:"./images/apelsin.jpeg",
        name: 'Orange-fruit',
        sum: 5000
    },
    {
        id: 4,
        img:"./images/banan.jpeg",
        name: 'Banana-fruit',
        sum: 5000
    },
    {
        id: 5,
        img:"./images/ananas.jpg",
        name: 'Ananas-fruit',
        sum: 5000
    },

    {
        id: 6,
        img:"./images/sabzi.jpeg",
        name: 'Carrot-wegetable',
        sum: 5000
    },
    {
        id: 7,
        img:"./images/piyoz.jpeg",
        name: 'Onions-wegetable',
        sum: 5000
    },
    {
        id: 8,
        img:"./images/kartoshka.jpg",
        name: 'Potato-wegetable',
        sum: 5000
    },
    {
        id: 9,
        img:"./images/pomidor.jpg",
        name: 'Tomato-wegetable',
        sum: 5000
    },
    {
        id: 10,
        img:"./images/baqlajon.jpg",
        name: 'Eggplant-wegetable',
        sum: 5000
    },

    {
        id: 11,
        img:"./images/zira.jpeg",
        name: 'Zira-spice',
        sum: 5000
    },
    {
        id: 12,
        img:"./images/tuz.jpeg",
        name: 'Sald-spice',
        sum: 5000
    },
    {
        id: 13,
        img:"./images/muruch.jpeg",
        name: 'Pepper-spice',
        sum: 5000
    },
    {
        id: 14,
        img:"./images/zira2.jpeg",
        name: 'Allspice-spice',
        sum: 5000
    },
    {
        id: 15,
        img:"./images/nmadur.jpeg",
        name: 'Cumin-spice',
        sum: 5000
    },

    {
        id: 16,
        img:"./images/no'xot.jpeg",
        name: 'Pea-grain',
        sum: 5000
    },
    {
        id: 17,
        img:"./images/mosh.jpeg",
        name: 'Mosh-grain',
        sum: 5000
    },
    {
        id: 18,
        img:"./images/grechka.jpeg",
        name: 'Grass-grain',
        sum: 5000
    },
    {
        id: 19,
        img:"./images/bug'doy.jpeg",
        name: 'Wheat-grain',
        sum: 5000
    },
    {
        id: 20,
        img:"./images/guruch.jpg",
        name: 'Rice-grain',
        sum: 5000
    }
]



const elForm = document.querySelector('.form');
const input = document.querySelector('.input');
const select = document.querySelector('select');
const box1 = document.querySelector('.box1');
const desc = document.querySelector('.desc');

const shop = document.querySelector('.shop_btn');
const myShop = document.querySelector('myShop_btn');
const shops = document.querySelector('shop');



shop.addEventListener('click', function() {
    shop.classList.add('show')
})

myShop.addEventListener('click', function() {
    shop.classList.remove('show')
})



// elForm.addEventListener('submit', (evt) => {
//   evt.preventDefault();

//   for (let i = 0; i < reviews.length; i++) {
//     if (reviews[i].name.includes(input.value)) {
//       desc.innerHTML += reviews[i].name.includes(input.value);
//       console.log(input.value);
//     }
//   }
// });

// function filter() {
//   for (let i = 0; i < reviews.length; i++) {
//     if (reviews[i].name.includes(input.value)) {
//       desc.innerHTML += `
//       <div clss="box1">
//       <img src=${imgName} alt="..." />
//       <h2>${reviews[i].name}</h2>
//       </div>
//       `;
//     }
//   }
// }


// function onChange() {
//     for (let i = 0; i < reviews.length; i++) {
//         if (reviews[i].name.includes(select.value)) {
//             desc.innerHTML += `
//             <div clss="box1">
//             <img src=${imgName} alt="..." />
//             <h2>${reviews[i].name}</h2>
//             </div>
//             `;
//         }
//       }
// }

elForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
  
    for (let i = 0; i < reviews.length; i++) {
      if (reviews[i].name.includes(input.value)) {
        desc.innerHTML += `
        <div class="box1">
        <img class="box__img" src=${reviews[i].img} alt='...' />
        <h2>${reviews[i].name}</h2>
        <button class="shop_btn">👍</button>
        <p>${reviews[i].sum}</p>
        </div>
        `;
      }
    }
  });
  
  function onChange() {
    for (let i = 0; i < reviews.length; i++) {
      if (reviews[i].name.includes(select.value)) {
        desc.innerHTML += `
              <div class="box1">
              <img class="box__img" src=${reviews[i].img} alt='...' />
              <h2>${reviews[i].name}</h2>
              <button>👍</button>
              <p>${reviews[i].sum}</p>
              </>`;
      }
    }
  }
document.addEventListener('DOMContentLoaded', function () {
  const gallery = document.querySelector('.gallery');
  const fragment = document.createDocumentFragment();
  const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
    {
      url: "https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Elephant Beside on Baby Elephant",
    },
    {
      url: "https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Blue Green and Orange Parrot",
    },
    {
      url: "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Zebras on Zebra",
    },
  ];
  for (let i = 0; i < images.length; i += 3) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = i; j < i + 3 && j < images.length; j++) {
      const li = document.createElement('li');
      const img = document.createElement('img');
      img.src = images[j].url;
      img.alt = images[j].alt;
      img.style.height = '300px';
      img.style.width = '400px';
      img.style.objectFit = 'cover';
      li.appendChild(img);
      row.appendChild(li);
    }
    row.style.display = 'flex';
    row.style.flexWrap = 'wrap';
    fragment.appendChild(row);
  }
  gallery.appendChild(fragment);
});

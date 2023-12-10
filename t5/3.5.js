
const picArray = [
  {
    title: 'Droplets',
    medium_image: 'img/pic2.jpg',
    caption: 'Stream of droplets on a leaf',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea harum hic optio quia recusandae reiciendis voluptatem? Ab amet cumque maxime molestias necessitatibus neque nisi odio quis quod, ',
  },
  {
    title: 'Blue sky',
    medium_image: 'img/pic8.jpg',
    caption: 'A crystal clear blue sky ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea harum hic optio quia recusandae reiciendis voluptatem? Ab amet cumque maxime molestias necessitatibus neque nisi odio quis quod,',
  },
    {
    title: 'Flashing lights',
    medium_image: 'img/pic6.jpg',
    caption: 'Cluster of flashing lights ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea harum hic optio quia recusandae reiciendis voluptatem? Ab amet cumque maxime molestias necessitatibus neque nisi odio quis quod,',
  },

];


const picturesSection = document.getElementById('pictures');


picArray.forEach(pic => {

  const articleElement = document.createElement('article');
  articleElement.classList.add('card');


  articleElement.innerHTML = `
    <h2>${pic.title}</h2>
    <figure>
      <img src="${pic.medium_image}" alt="${pic.title}">
      <figcaption>${pic.caption}</figcaption>
    </figure>
    <p>${pic.description}</p>
  `;


  picturesSection.appendChild(articleElement);
});

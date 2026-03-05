const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?'
];

const NAMES = [
  'Артём',
  'Мария',
  'Иван',
  'Елена',
  'Дмитрий',
  'София',
  'Никита',
  'Ольга'
];

const likes = {
  MIN: 15,
  MAX: 200,
};

const avatars = {
  MIN: 1,
  MAX: 6,
};

const comments = {
  MIN: 1,
  MAX: 30,
};

const posts = 25;

let commentIdCounter = 1;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createComment = () => ({
  id: commentIdCounter++,
  avatar: `img/avatar-${getRandomInteger(avatars.MIN, avatars.MAX)}.svg`,
  message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
  name: NAMES[getRandomInteger(0, NAMES.length - 1)],
});

const createPhoto = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: `Фото №${id}`,
  likes: getRandomInteger(likes.MIN, likes.MAX),
  comments: Array.from({ length: getRandomInteger(comments.MIN, comments.MAX) }, createComment),
});

const createPhotos = () => Array.from({ length: posts }, (_, index) => createPhoto(index + 1));

createPhotos();

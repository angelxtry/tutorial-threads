import {Thread, User} from "@/types/threads";
import {faker} from "@faker-js/faker";

const createRandomFollower = (): User => {
  const name = faker.person.firstName() + " " + faker.person.lastName();
  return {
    id: faker.string.uuid(),
    name,
    username: faker.internet.userName(),
    verified: Math.random() > 0.5,
    photo: faker.image.avatar(),
    bio: faker.lorem.sentence(),
  }
}
const createRandomUser = (): User => {
  const name = faker.person.firstName() + " " + faker.person.lastName();
  return {
    id: faker.string.uuid(),
    name,
    username: faker.internet.userName(),
    verified: Math.random() > 0.5,
    photo: faker.image.avatar(),
    bio: faker.lorem.sentence(),
    followers: Array.from({length: Math.floor(Math.random() * 10)}, createRandomFollower),
  }
}

const createRandomThread = (): Thread => {
  const author = createRandomUser();
  const mentionUser = createRandomUser();
  return {
    id: faker.string.uuid(),
    author,
    content: faker.lorem.paragraph(),
    image: Math.random() > 0.5 ? faker.image.url() : undefined,
    replies: Array.from({length: Math.floor(Math.random() * 10)}).map(() => ({
      id: faker.string.uuid(),
      author: createRandomUser(),
      content: faker.lorem.sentence(),
      likes: Math.floor(Math.random() * 1000),
      createdAt: faker.date.recent().toISOString(),
    })),
    replyCount: Math.floor(Math.random() * 100),
    likeCount: Math.floor(Math.random() * 1000),
    mention: Math.random() > 0.5,
    mentionUser,
    createdAt: faker.date.recent().toISOString(),
  }
}

const generateThreads = (): Thread[] => {
  return Array.from({length: 100}, createRandomThread);
}

export { createRandomFollower, createRandomUser, createRandomThread, generateThreads }

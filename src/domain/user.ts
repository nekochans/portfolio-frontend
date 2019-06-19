interface User {
  id: number;
  name: string;
}

const fetchUser = (id: number, name: string): User => {
  return {
    id,
    name,
  };
};

export default fetchUser;

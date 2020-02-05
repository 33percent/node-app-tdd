import axios from "axios";

const getPost = async id => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      resolve(data);
    } catch (err) {
      reject(('some Fake error'));
    }
  });
};

export default getPost;

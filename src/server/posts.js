import axios from 'axios';


const getAllPosts = async () => {
	try {
		const { data } = await axios.get('http://localhost:4000/posts');
		if (!data || !Array.isArray(data)) {
			throw new Error('Invalid data format received from the server');
		}
		console.log('Fetched posts:', data);
		return data;
	} catch (error) {
		console.error('Error fetching posts:', error);
    throw error;
	}
};

const getPostById = async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:4000/posts/${id}`);
    if (!data || typeof data !== 'object') {
      throw new Error('Invalid post data received from the server');
    }
    return data;
  } catch (error) {
    console.error(`Error fetching post with id ${id}:`, error);
    throw error;
    
  }
};

const createPost = async (post) => {
  try {
    const { data } = await axios.post('http://localhost:4000/posts', post);
    if (!data || typeof data !== 'object') {
      throw new Error('Invalid post data received from the server');
    }
    return data.post;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error; 
  }
};


const updatePost = async (id, updatedPost) => {
  try {
    const { data } = await axios.put(`http://localhost:4000/posts/${id}`, updatedPost);
    if (!data || typeof data !== 'object') {
      throw new Error('Invalid updated post data received from the server');
    }
    return data;
  } catch (error) {
    console.error(`Error updating post with id ${id}:`, error);
    throw error;
  }
};

const deletePost = async (id) => {
  try {
    await axios.delete(`http://localhost:4000/posts/${id}`);
    return true;
  } catch (error) {
    console.error(`Error deleting post with id ${id}:`, error);
    throw error;
  }
};

export { getAllPosts, createPost, getPostById, updatePost, deletePost};

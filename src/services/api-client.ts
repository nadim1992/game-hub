import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '1802fe8bf6b844b6b5039ec470ddfc5e',
  },
});

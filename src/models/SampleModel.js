import axios from 'axios'

let videoSample = []
// axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest';
// axios.get(
//     )
//     .then((value) => {console.log(value)});

const instance = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://www.pexels.com/medium/above-the-fold/?id%5B%5D=6592321&id%5B%5D=6592315&id%5B%5D=6592309&id%5B%5D=6491375&id%5B%5D=6491370&id%5B%5D=5755164&id%5B%5D=5755160&id%5B%5D=5755158&id%5B%5D=5727632&id%5B%5D=5727629&id%5B%5D=5727545&id%5B%5D=5711740&id%5B%5D=5711681&id%5B%5D=5700425&id%5B%5D=5480093&id%5B%5D=5474822&id%5B%5D=5024541&id%5B%5D=5024534&id%5B%5D=4809951&id%5B%5D=4809850&id%5B%5D=4809834&id%5B%5D=4724485&id%5B%5D=4724480&id%5B%5D=4724453&id%5B%5D=4339364&id%5B%5D=4339363&id%5B%5D=4339359&id%5B%5D=3842381&id%5B%5D=3842372&id%5B%5D=3842276',
  timeout: 1000,
  headers: {'X-Requested-With': 'XMLHttpRequest'}
});

instance.get();


export default videoSample;
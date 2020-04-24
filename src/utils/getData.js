
const getData = async (url) => {
  const result = await fetch(url);
  const data = await result.json();
  // console.log(data);
  return data;
};

export default getData;

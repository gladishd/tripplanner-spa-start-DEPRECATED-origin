const fetchAttractions = async () => {
  try {
    const result = await fetch("/api");
    return await result.json();
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  fetchAttractions
};

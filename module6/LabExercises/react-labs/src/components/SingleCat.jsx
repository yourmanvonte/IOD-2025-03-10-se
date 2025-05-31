function SingleCat({ name, latinName, image }) {
  return (
    <div className="SingleCat">
      <img src={image} alt={name} className="cat-image" />
      <div>
        <strong>{name}</strong> <br />
        <em>{latinName}</em>
      </div>
    </div>
  );
}

export default SingleCat;
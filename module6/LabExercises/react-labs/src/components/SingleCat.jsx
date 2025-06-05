function SingleCat({ name, latinName, image, onDelete }) {
  return (
    <div className="SingleCat">
      <img src={image} alt={name} className="cat-image" />
      <div>
        <strong>{name}</strong> <br />
        <em>{latinName}</em>
        <button onClick={onDelete} style={{ color: 'red'}}>Delete</button>
      </div>
    </div>
  );
}

export default SingleCat;
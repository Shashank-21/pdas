function ProfileCard({ title, handle, image }) {
  return (
    <div>
      <img src={image} alt={title} />
      <div>Title is {title}</div>
      <div>Twitter Handle is {handle}</div>
    </div>
  );
}

export default ProfileCard;

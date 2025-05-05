const Avatar = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="avatar">
      <img width={64} height={64} src={imageUrl} alt="Avatar" />
    </div>
  );
};

export default Avatar;

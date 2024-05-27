const ProfileImage = () => {
  return (
    <>
      <div className="bg-white w-[100%] h-[85vh] rounded-[32px]">
        <img
          src="/assets/login/login.png"
          alt="Imagen de fondo Login"
          className="object-contain w-full h-[85vh] rounded-[32px]"
          style={{ objectFit: "cover" }}
        />
      </div>
    </>
  );
};

export default ProfileImage;

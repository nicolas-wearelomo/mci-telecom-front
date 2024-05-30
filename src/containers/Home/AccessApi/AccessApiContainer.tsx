import AccessApiForm from "@/components/Home/AccessApi/AccessApiForm";
import ProfileImage from "@/components/Profile/ProfileImage";

const AccessApiContainer = () => {
  return (
    <div className="grid grid-cols-2 h-[calc(100vh-180px)] gap-5 mr-5">
      <AccessApiForm />
      <ProfileImage />
    </div>
  );
};

export default AccessApiContainer;

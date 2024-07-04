import Image from "next/image";

const MciMessageInfo = ({ message }: { message: string }) => {
  return (
    <div className="flex gap-10 items-center">
      <Image src="/assets/login/mci-logo.png" alt="mci logo" width={100} height={100} className="mb-0" />
      <p className="text-lg">{message}</p>
    </div>
  );
};

export default MciMessageInfo;

import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

function UserAvatar() {
  return (
    <Avatar className="w-10 aspect-square rounded-full overflow-hidden">
      <AvatarImage
        alt="User Avatar"
        src="https://t4.ftcdn.net/jpg/11/66/06/77/240_F_1166067709_2SooAuPWXp20XkGev7oOT7nuK1VThCsN.jpg"
      />
      <AvatarFallback>U</AvatarFallback>
    </Avatar>
  );
}

export default UserAvatar;

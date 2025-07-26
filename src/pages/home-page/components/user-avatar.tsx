import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

function UserAvatar() {
  return (
    <button
      className="w-10 aspect-square rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-background transition-opacity hover:opacity-80"
      aria-label="User account"
      type="button"
    >
      <Avatar className="w-full h-full">
        <AvatarImage
          alt="User profile picture"
          src="https://t4.ftcdn.net/jpg/11/66/06/77/240_F_1166067709_2SooAuPWXp20XkGev7oOT7nuK1VThCsN.jpg"
        />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
    </button>
  );
}

export default UserAvatar;

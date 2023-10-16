import { useParams } from "react-router-dom";

export default function Room() {
  const params = useParams();
  const room_code = params.room_code;
  return <>This room's room code is {room_code}</>;
}

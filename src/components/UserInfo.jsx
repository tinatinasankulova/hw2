// import { Fragment } from 'react';
import Card from "./ui/Card";
import style from "./UserInfo.module.css";

const UserInfo = (props) => {
  return (
    
      <Card className={style.container}>
        <div className={style.header}>
          <span>{props.title}</span>
          <div className={style.id}>{props.id}</div>
        </div>
        <p>{props.albumId}</p>
        <div className={style.thumbnailUrl}><img src={props.thumbnailUrl} alt={props.title} /></div>
      </Card>
   
  );
};

export default UserInfo;

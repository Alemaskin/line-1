import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://avatars.mds.yandex.net/get-pdb/2497652/72c3a174-9af0-41f6-9f10-e291c329c49b/s1200?webp=false"></img>
      </div>
      <div className={s.item}>
        <a>My Posts</a>
      </div>
      <div className={s.item}>
        <a>post 1</a>
      </div>
      <div className={s.item}>
        <a>post 2</a>
      </div>
    </div>
  );
};

export default Profile;

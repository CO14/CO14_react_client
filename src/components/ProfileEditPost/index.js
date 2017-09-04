import React from 'react';

import TextField from '../TextField';

const ProfileEditPost = props => {
  return(
    <form>
      <TextField />
      <TextField />
      <TextField />
      <TextField />
      <input type="file" className="" placeholder="Upload Files"/>
      <button type="submit">UPLOAD</button>
    </form>
  );
}

export default ProfileEditPost;

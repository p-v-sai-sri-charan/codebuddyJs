// level {1/2/3}
//Answer Level 2

async function getUsers() {
    let doc = await Promise.all(getUser(), getProfile(), getPosts());
    let [user,Profile,p ] = doc;
    // let user = doc[0];
    // let Profile = doc[1];
    // let p = doc[2];
  
    // const userProfile = {
    //   user: user,
    //   profile: Profile,
    //   posts: p
    // };
  
    // return userProfile;

    return { user,profile:Profile ,posts:p}
  }
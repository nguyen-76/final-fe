import UserHeader from "../layouts/UserHeader";
import UserPost from "../layouts/UserPost";


const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost
        likes={12341}
        replies={3241}
        postImg="logo192.png"
        postTitle="Placeholder post"
      />
      <UserPost
        likes={1241}
        replies={341}
        postImg="logo512.png"
        postTitle="React Image"
      />
      <UserPost likes={1241} replies={341} postTitle="First post" />
    </>
  );
};

export default UserPage;

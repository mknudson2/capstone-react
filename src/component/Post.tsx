
export default function Post({post}:{post:Postable}) {
  return (
    <p>
        {post.body}<br/>
        {post.timestamp.toLocalString()}
    </p>
  );
}

// Check Dylan's day2+ branch for the posts.tsx page as well as 
// types.ts for the Postable interface 
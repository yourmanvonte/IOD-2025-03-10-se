import { Card, CardContent, Typography, Grid } from '@mui/material';

const posts = [
  { id: 1, title: 'Post One', body: 'This is the first post' },
  { id: 2, title: 'Post Two', body: 'This is the second post' },
];

const PostList = () => {
  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      {posts.map(post => (
        <Grid item xs={12} md={6} key={post.id}>
          <Card>
            <CardContent>
              <Typography variant="h6">{post.title}</Typography>
              <Typography variant="body2">{post.body}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PostList;

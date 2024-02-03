import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    textAlign: 'center', // Center align content
  },
  postContainer: {
    width: '30%', // Limit width to 80% of the container
    margin: 'auto', // Center horizontally
    marginBottom: theme.spacing(4),
    padding: theme.spacing(2),
    cursor: 'pointer', // Change cursor to pointer to indicate clickable
  },
}));

const posts = [
  {
    id: 1,
    title: 'First Post',
    content: 'This is the content of the first post.',
    date: '2024-01-01',
    author: 'John Doe',
    path: '/MemeClashBlog' // Specify the path for the first post
  },
  {
    id: 2,
    title: 'Second Post',
    content: 'This is the content of the second post.',
    date: '2024-01-05',
    author: 'Jane Smith',
    path: '/second-post' // Specify the path for the second post
  },
  // Add more posts as needed
];

const BlogPage = () => {
  const classes = useStyles();

  return (
    <div style={{ marginTop: "64px"}} className={classes.root}>
      <Typography variant="h3" gutterBottom>Welcome to My Blog</Typography>
      {posts.map((post) => (
        <Link key={post.id} to={post.path}> {/* Wrap each post with Link component */}
          <Paper className={classes.postContainer} elevation={3}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h4">{post.title}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>{post.content}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2">
                  Published on {post.date} by {post.author}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Link>
      ))}
    </div>
  );
}

export default BlogPage;

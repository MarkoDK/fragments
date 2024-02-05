import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import backgroundImage from './BackgroundTest.jpg';

// #d9dadb - font siva
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    textAlign: 'center',
    marginTop: "64px",
  },
  postContainer: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    height: '175px',
    border: '2px solid black',
    borderRadius: '4px',
    overflow: 'hidden',
    backgroundColor: '#23252b',
    color: '#dcdcd2',
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease', // Add transition for smooth background color and box-shadow change
    '&:hover': {
      backgroundColor: '#303237', // Change background color to #303237 on hover
      boxShadow: '0 0 20px 0 rgba(48, 50, 55, 0.8)', // Add more noticeable and darker glowing effect on hover
    }
  },
  imageContainer: {
    width: '33%',
    marginRight: theme.spacing(2),
    display: 'flex',
    alignItems: 'stretch',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
  },
  contentContainer: {
    flex: 1,
    marginRight: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  title: {
    fontSize: '15px',
    marginBottom: '4px',
    fontWeight: 'bold',
    fontFamily: "'Roboto', sans-serif",
    marginTop: '5px'
  },
  content: {
    fontSize: '12px', // Adjust content font size
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 5, // Limiting the number of lines to 5
    WebkitBoxOrient: 'vertical',
    fontFamily: "'Roboto', sans-serif",
    color: '#f1b400',
  },
  readMore: {
    marginTop: theme.spacing(1),
    fontWeight: 'bold',
    fontFamily: "'Roboto', sans-serif",
    textDecoration: 'none',
    display: 'inline-block',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));


const posts = [
  {
    id: 1,
    title: 'Meme Clash - attention seeker of the Belgrade game jam',
    content: '- Back in 2008, teamed up with my brother and his friend, we made a Dota 1 Clone with 36 Unique Heroes. This grabbed Icefrogs attention and we got in the contact with him.',
    path: '/MemeClashBlog', // Specify the path for the first post
    image: backgroundImage,
  },
  {
    id: 2,
    title: "Surroundings - My 2024 Game's Jam video game",
    content: "- The theme of Game's Jam 2024 was 'Make me laugh'. While this theme is typically associated with comedy, we opted for a different approach, aiming to convey a message about mental health.",
    path: '/SurroundingsBlog', // Specify the path for the second post
    image: backgroundImage,
  },
  {
    id: 3,
    title: 'Why I love Diablo 2 Itemization so much',
    content: 'Opis drugog',
    path: '/second-post', // Specify the path for the second post
    image: backgroundImage,
  },
  {
    id: 4,
    title: 'My Fantasy-Card-Boardgame that was fun in playtesting',
    content: 'Opis drugog',
    path: '/second-post', // Specify the path for the second post
    image: backgroundImage,
  },
  {
    id: 5,
    title: 'Top 11 - My dream game mode as a very competitive player',
    content: 'Opis drugog',
    path: '/second-post', // Specify the path for the second post
    image: backgroundImage,
  },
  {
    id: 6,
    title: 'Marvel snap - Guide/Deconstruction thoughts',
    content: 'Opis drugog',
    path: '/second-post', // Specify the path for the second post
    image: backgroundImage,
  },
  {
    id: 7,
    title: 'Warcraft Rumble - Guide/Deconstruction thoughts',
    content: 'Opis drugog',
    path: '/second-post', // Specify the path for the second post
    image: backgroundImage,
  },
  {
    id: 8,
    title: 'The Final Battle - My personal Dota clone from 2008',
    content: 'Opis drugog',
    path: '/second-post', // Specify the path for the second post
    image: backgroundImage,
  },
  {
    id: 9,
    title: 'Ultimate football - My try at mobile game design',
    content: 'Opis drugog',
    path: '/second-post', // Specify the path for the second post
    image: backgroundImage,
  },
  {
    id: 10,
    title: 'My road to WoW E-sports',
    content: 'Opis drugog',
    path: '/second-post', // Specify the path for the second post
    image: backgroundImage,
  },
  {
    id: 11,
    title: 'Dark Souls/Bloodbrone - Sparked my love for single player games',
    content: 'Opis drugog',
    path: '/second-post', // Specify the path for the second post
    image: backgroundImage,
  },
  {
    id: 12,
    title: 'Competitive System in a video game - Nordeus Challenge',
    content: 'Opis drugog',
    path: '/second-post', // Specify the path for the second post
    image: backgroundImage,
  },
  {
    id: 13,
    title: 'Competitive System in a video game - Nordeus Challenge',
    content: 'Opis drugog',
    path: '/second-post', // Specify the path for the second post
    image: backgroundImage,
  },
];

const BlogPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ minHeight: "calc(100vh - 96px)", backgroundColor: "#15171e"}}>
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid key={post.id} item xs={12} sm={6} md={4} lg={4}> {/* Modified here */}
            <Link to={post.path} style={{ textDecoration: 'none' }}>
              <Paper className={classes.postContainer} elevation={3}>
                <div className={classes.imageContainer}>
                  <img src={post.image} alt={post.title} className={classes.image} />
                </div>
                <div className={classes.contentContainer}>
                  <Typography variant="h6" className={classes.title}>{post.title}</Typography>
                  <Typography variant="body2" className={classes.content}>{post.content}</Typography>
                  <Typography variant="body2" className={classes.readMore} style={{ marginBottom: '3px'}}>Read full article</Typography>
                </div>
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BlogPage;

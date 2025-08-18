import React from 'react';
import { Typography, Paper, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import backgroundImage from './BackgroundTest.jpg';
import surroundingsCover from './SurroundingsCover.png';
import backgroundStars from './BackgroundStars.jpg';
import bloodborneCover from './BloodborneCover.jpg';
import nordeusChallenge from './nordeusChallenge.png';
import memeClashBackground from './BoardAvatarCards.jpg';
import rngArticleImg from "./RNGarticleImg.jpg";
import BoostersImg from "./BoostersImg.png";
import LiveOps from "./LiveOps.png";

// 🎨 Styled components (MUI v5 way)
const Root = styled('div')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
  textAlign: 'center',
  marginTop: "64px",
  backgroundImage: `url(${backgroundStars})`,
  backgroundSize: 'cover',
  minHeight: "calc(100vh - 96px)",
}));

const PostContainer = styled(Paper)(({ theme }) => ({
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'row',
  height: '175px',
  border: '2px solid black',
  borderRadius: '4px',
  overflow: 'hidden',
  backgroundColor: '#23252b',
  color: '#dcdcd2',
  transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    backgroundColor: '#303237',
    boxShadow: '0 0 20px 0 rgba(48, 50, 55, 0.8)',
  },
}));

const ImageContainer = styled('div')(({ theme }) => ({
  width: '33%',
  marginRight: theme.spacing(2),
  display: 'flex',
  alignItems: 'stretch',
}));

const Image = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: '4px',
});

const ContentContainer = styled('div')({
  flex: 1,
  marginRight: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
});

const Title = styled(Typography)({
  fontSize: '14px',
  marginBottom: '4px',
  fontWeight: 'bold',
  fontFamily: "'Roboto', sans-serif",
  marginTop: '5px',
});

const Content = styled(Typography)({
  fontSize: '12px',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 5,
  WebkitBoxOrient: 'vertical',
  fontFamily: "'Roboto', sans-serif",
  color: '#f1b400',
});

const ReadMore = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  fontWeight: 'bold',
  fontFamily: "'Roboto', sans-serif",
  textDecoration: 'none',
  display: 'inline-block',
  marginBottom: '3px',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

// 📝 Full posts array (unchanged)
const posts = [
  {
    id: 1,
    title: 'The Final Battle - My personal MOBA (DOTA clone) made back in 2010 with 36 Unique Hero designs!',
    content: '- Back in 2010, teamed up with my brother, using WC3 editor, we made a Dota 1 Clone with 36 Unique Heroes. This grabbed Icefrogs attention and we got in the contact with him.',
    path: '/FinalBattle',
    image: backgroundImage,
  },
  {
    id: 2,
    title: "Surroundings - My 2024 Game's Jam video game",
    content: "- The theme of Game's Jam 2024 was 'Make me laugh'. While this theme is typically associated with comedy, we opted for a different approach, aiming to convey a message about mental health.",
    path: '/SurroundingsBlog',
    image: surroundingsCover,
  },
  {
    id: 3,
    title: 'Squad Busters - Full deconstruction',
    content: 'Opis drugog',
    path: '/second-post',
    image: backgroundImage,
  },
  {
    id: 4,
    title: 'Bloodborne – The Evolution of Souls Combat',
    content: "- In this article, I will attempt to explain why I believe Bloodborne is FromSoftware's most important title by analyzing game design choices used and how it paved the way for FromSoftware's future games.",
    path: '/Bloodborne',
    image: bloodborneCover,
  },
  {
    id: 5,
    title: 'How to Engage Players with Low Amount of Real Time to Play Your Game and Have Fun',
    content: 'In free-to-play (F2P) and live-service games, many players only have a few minutes a day to play. Energy multipliers and time-friendly systems make those short sessions rewarding by condensing progress, boosting rewards, and offering flexible ways to engage.',
    path: '/SeasonControlByMultipliers',
    image: BoostersImg,
  },
  {
    id: 6,
    title: 'Popular Live Ops Systems That Keep Games Alive and Players Engaged',
    content: 'Live Ops systems drive long-term engagement through offers, seasonal updates, events, and social features. These mechanics not only keep gameplay fresh and exciting but also create powerful opportunities for monetization and community growth.',
    path: '/LiveOps',
    image: LiveOps,
  },
  {
    id: 7,
    title: 'Warcraft Rumble - Guide/Deconstruction thoughts',
    content: 'Opis drugog',
    path: '/second-post',
    image: backgroundImage,
  },
  {
    id: 8,
    title: 'Meme Clash - Attention seeker of 2024 Belgrade Game Jam',
    content: 'Check out this article if you want to learn more about our overwhelmingly positively received board game from Belgrade GJ 2024. Even today, we still meet up and play this board game from time to time!',
    path: '/MemeClashBlog',
    image: memeClashBackground,
  },
  {
    id: 9,
    title: 'Ultimate football - My try at mobile game design',
    content: 'Opis drugog',
    path: '/second-post',
    image: backgroundImage,
  },
  {
    id: 10,
    title: 'My road to WoW E-sports',
    content: 'Opis drugog',
    path: '/second-post',
    image: backgroundImage,
  },
  {
    id: 11,
    title: 'My Fantasy-Card-Boardgame that was fun in playtesting',
    content: 'Opis drugog',
    path: '/second-post',
    image: backgroundImage,
  },
  {
    id: 12,
    title: 'Nordeus Game Design Challenge 2023',
    content: 'Theme for this challenge was "Competitive System in a video game". This article managed to earn me a very valuable mentoring session at Nordeus.',
    path: '/NordeusChallenge',
    image: nordeusChallenge,
  },
  {
    id: 13,
    title: 'Controlling RNG in Video Games',
    content: 'RNG in video games is a very important and complex subject. In this article, I tend to cover basics of RNG & how certain games used very smart systems to implement it.',
    path: '/RNGinGameDesign',
    image: rngArticleImg,
  },
];

const BlogPage = () => {
  return (
    <Root>
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid key={post.id} item xs={12} sm={6} md={4} lg={4}>
            <Link to={post.path} style={{ textDecoration: 'none' }}>
              <PostContainer elevation={3}>
                <ImageContainer>
                  <Image src={post.image} alt={post.title} />
                </ImageContainer>
                <ContentContainer>
                  <Title variant="h6">{post.title}</Title>
                  <Content variant="body2">{post.content}</Content>
                  <ReadMore variant="body2">Read full article</ReadMore>
                </ContentContainer>
              </PostContainer>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Root>
  );
};

export default BlogPage;

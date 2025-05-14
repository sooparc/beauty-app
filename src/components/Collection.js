import React from "react";
import "./Collection.css";
import Image1 from "../assets/foundation.png";
import Image2 from "../assets/sunscreen.png";
import Image3 from "../assets/mascara.png";
import Image4 from "../assets/lipgloss.png";
import Button from '@mui/material/Button';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const Collection = () => {
  const images = [
    { src: Image1, label: "Foundation" },
    { src: Image2, label: "Sunscreen" },
    { src: Image3, label: "Mascara" },
    { src: Image4, label: "Lipgloss" },
  ]

  return (
    <section>
        <div className="collection-container">
          <div className="collection-heading">Most Loved</div> 
            <div className="collection-image-container">
              {images.map((item, index) => (
                <div key={index} className="collection-item">
                  <img src={item.src} alt={`Collection ${index}`} className="collection-image" />
                  <div className="collection-text-container">
                    <div className="collection-label">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
        </div>

        <div className="collection-container">
          <div className="collection-heading">By Skin Type</div> 
          <div class="collection-button-container">
            <Button variant="outlined" size="small" className="collection-button">Dry</Button>
            <Button variant="outlined" size="small" className="collection-button">Oily</Button>
            <Button variant="outlined" size="small" className="collection-button">Combination</Button>
            <Button variant="outlined" size="small" className="collection-button">Sensitive</Button>
            <Button variant="outlined" size="small" className="collection-button">Acne-Prone</Button>
          </div>

          <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <img src={Image1} alt="" width="200px"/>
              </ListItemAvatar>
              <ListItemText
                primary="Best foundation"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: 'text.primary', display: 'inline' }}
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: 'text.primary', display: 'inline' }}
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: 'text.primary', display: 'inline' }}
                    >
                      Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </div>
    </section>
  );
};

export default Collection;

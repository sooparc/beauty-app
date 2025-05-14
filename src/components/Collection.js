import React, { useEffect, useState } from "react";
import "./Collection.css";
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const Collection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/products")
      .then(res => res.json())
      .then(data => {
        console.log("Fetched products:", data);
        setProducts(data);
      })
      .catch(err => console.error("Failed to fetch products:", err));
  }, []);

  return (
    <section>
        <div className="collection-container">
          <div className="collection-heading">Most Loved</div>
            <div className="collection-image-container">
              {products.map((product, index) => (
                <div key={index} className="collection-item">
                  <img src={`http://localhost:8000${product.image}`} alt={`Collection ${index}`} className="collection-image" />
                  <div className="collection-text-container">
                    <div className="collection-label">{product.name}</div>
                  </div>
                </div>
              ))}
            </div>
        </div>

        <div className="collection-container">
          <div className="collection-heading">By Skin Type</div> 
          <div className="collection-button-container">
            <Button variant="outlined" size="small" className="collection-button">Dry</Button>
            <Button variant="outlined" size="small" className="collection-button">Oily</Button>
            <Button variant="outlined" size="small" className="collection-button">Combination</Button>
            <Button variant="outlined" size="small" className="collection-button">Sensitive</Button>
            <Button variant="outlined" size="small" className="collection-button">Acne-Prone</Button>
          </div>

          <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
            {products.map((product, index) => (
              <React.Fragment key={product.id || index}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <img
                      src={`http://localhost:8000${product.image}`}
                      alt={product.name}
                      className="collection-round-image"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={product.name}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          sx={{ color: 'text.primary', display: 'inline' }}
                        >
                          {product.brand}
                        </Typography>
                        {" — " + product.description}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                {index < products.length - 1 && <Divider variant="inset" component="li" />}
              </React.Fragment>
            ))}
          </List>

        </div>
    </section>
  );
};

export default Collection;

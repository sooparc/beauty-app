import React, { useEffect, useState } from "react";
import "./Collection.css";
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Collection = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = React.useState('');

  const foundation = products.find(p => p.productType === "Foundation");
  const sunscreen = products.find(p => p.productType === "Sunscreen");
  const mascara = products.find(p => p.productType === "Mascara");
  const lipgloss = products.find(p => p.productType === "Lip Gloss");

  const productTypes = [...new Set(products.map(p => p.productType))].sort();

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

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
            {[foundation, sunscreen, mascara, lipgloss].map((product, index) => (
              product && (
                <div key={index} className="collection-item">
                  <img src={`http://localhost:8000${product.image}`} alt={product.name} className="collection-image" />
                  <div className="collection-text-container">
                    <div className="collection-label">{product.productType}</div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>

        <div className="collection-container">
          <div className="collection-heading">By Category</div> 
          <FormControl sx={{ m: 0, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Category</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={category}
              label="Category"
              onChange={handleChange}
            >
              {productTypes.map((type, index) => (
                <MenuItem key={type} value={(index + 1) * 10}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
            {products.slice(0, 3).map((product, index) => (
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
            {products.slice(0, 3).map((product, index) => (
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

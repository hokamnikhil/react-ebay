import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./index.scss";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import Header from "../common/header";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";

import ProductModel from "../../models/interfaces/product";
import prouctList from "./product.json";

import { getCurrentProductlist, addProduct } from "../../action";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../../reducer";

export default function Product() {
  const [open, setOpen] = React.useState(false);
  const [productName, setProductName] = React.useState('');
  const [productPrice, setProductPrice] = React.useState('');
  const prouctListData: ProductModel[] = useSelector(getProductList);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCurrentProductlist())
  }, []);

  const handleAddProduct = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const addProductData = () => {
    dispatch(addProduct({
      title: productName,
      price: productPrice,
      image: "https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/1IAAAOSwLN5e2lyn/$_35.JPG",
    }));
    // prouctListData.push({
    //   title: productName,
    //   price: productPrice,
    //   image: "https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/1IAAAOSwLN5e2lyn/$_35.JPG",
    // })
    setOpen(false);
  }

  const body = (
    <div className="paper-modal">
      <Typography component="h1" variant="h5">
        Add Product
      </Typography>
      <form noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="name"
          name="name"
          autoComplete="name"
          autoFocus
          size="small"
          onChange={(e) => setProductName(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="price"
          label="price"
          type="price"
          id="price"
          autoComplete="current-password"
          size="small"
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          className="btn-submit"
          onClick={addProductData}
        >
          Submit
        </Button>
      </form>
    </div>
  );

  return (
    <div className="addProductWrapper">
      <Header />
      <div className="gridContainer">
        <div className="addProduct">
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddProduct}
            size="small"
          >
            Add Product
          </Button>
        </div>
        <div className="root">
          <Grid container className="root" spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="flex-start" spacing={2}>
                {prouctListData.map((tile, index) => (
                  <Grid key={index} item>
                    <Paper className="paper">
                      <img
                        src={tile.image}
                        className="imgBody"
                        alt={tile.title}
                      />
                      <div className="gridTile">
                        <div className="gridTileText">
                          {tile.title} {index + 1}{" "}
                        </div>
                        <div className="gridTileText">Price {tile.price} </div>
                      </div>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

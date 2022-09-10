import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";

const Axiosapi = () => {
  const [myData, setmyData] = useState([]);
  const [isError, setisError] = useState("");
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  const API = axios.create({
    baseURL: "https://fakestoreapi.com/products/",
  });

  const getData = async () => {
    try {
      let data = await API.get("/");
      console.log("my data is", data);
      setmyData(data?.data);
    } catch (error) {
      console.log(error);
      setisError(error);
    }
  };
  useEffect(() => {
    getData(); // eslint-disable-next-line
  }, []);

  const createData = async () => {
    try {
      let newData = await API.post("/", {
        id: 21,
        title: "umesh",
        description: "jr reactjs dev",
      });
      console.log("added data is", newData);
      setmyData(newData);
    } catch (error) {}
  };
  return (
    <>
      <h2> Axios Api Data List</h2>
      <button onClick={() => createData()}>ADD NEW DATA</button>
      {isError !== "" && <h2> {isError}</h2>}
      <div className="container">
        <Slider {...settings}>
          {myData.map((element) => {
            const { id, title, description, price, category, image, rating } =
              element;
            return (
              <Card sx={{ maxWidth: 345 }} key={id}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="product-img"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="product-des"
                    >
                      {description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    ${price}
                  </Button>
                  <Rating
                    name="read-only"
                    value={Math.round(rating.rate)}
                    readOnly
                  />
                </CardActions>
                <CardActions>
                  <Button variant="contained" color="primary">
                    {category}
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Axiosapi;

import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,

    },
    header: {
        display: 'flex',
        justifyContent: 'center',
    },
    media: {
      height: 150,
    },
  });

const CategoriesList = () => {
    const productList = useSelector((state) => state.products);
    const productCategories = Object.keys(productList);
    const classes = useStyles();
    console.log("productList:", productList);
    return(
        <>
            {productCategories.map(category => {
                return(
                    <Box className={classes.header}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={productList[category][0].image}
                                title={category}
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {category}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Box>
                );
            })}

        </>
    );
}

export default CategoriesList;
import { useEffect } from 'react';

import { styled, Box, Grid } from '@mui/material';

import ProductDetail from './ProductDetail';
import ActionItem from './ActionItem';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getProductDetails } from '../redux/actions/productActions.js';

const Component = styled(Box)`
    margin-top: 55px;
    background: #F2F2F2;
`;

const Container = styled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}))

const RightContainer = styled(Grid)`
    margin-top: 50px;
    & > p {
        margin-top: 10px;
    }
`;

const DetailView = () => {
    //const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    
    const { id } = useParams();

    const {product} = useSelector(state => state.getProductDetails);

    const dispatch = useDispatch();
    
    useEffect(() => {
        if(product && id !== product.id)   
            dispatch(getProductDetails(id));
    }, [dispatch, product, id]);

    return (
        <Component>
            <Box>
            { product && Object.keys(product).length &&
                <Container container> 
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product} />
                    </Grid>
                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        {/* <Typography>{product.title.longTitle}</Typography> */}
                        
                        <ProductDetail product={product} />
                    </RightContainer>
                </Container>
            }  
            </Box> 
        </Component>
    )
}

export default DetailView;
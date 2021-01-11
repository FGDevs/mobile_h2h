import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native';
import Axios from 'axios';
import { color } from '../../theme';

const Text = styled.Text`
    font-size       : ${props=>props.fSize? props.fSize:'18px'};
    color           : ${props=>props.fColor? props.fColor:'tomato'};
    font-weight     : ${props=>props.fWeight? props.fWeight:500};
`
const Image = styled.Image`
    flex            : 1;
    width           : undefined;
    height          : undefined;
`
const Container = styled.View`
    flex            : 1;
    background-color: ${color.primary};
    align-items     : center;
    justify-content : space-between;
    padding         : 10px 10px 0px 10px;
`
const ParcelBx = styled.View`
    flex-direction  : row;
    border-radius   : 15px;
    background-color: white;
    width           : 270px;
    padding         : 7px;
`
const ImageBx = styled.TouchableOpacity`
    border-radius   : 9px;
    height          : 100px;
    width           : 100px;
    overflow        : hidden;
`
const DetailBx = styled.View`
    margin-left     : 10px;
`


export default () => {
    const dispatch  = useDispatch();
    const parcels   = useSelector( state => state.Service.parcels)

    useEffect(() => {
        console.log('mounted')
        Axios.get(`http://192.168.100.26:8000/parcel/getallparcel`)
        .then((result)=>{
            dispatch({
                type    :'LOAD',
                payload : {parcels:result.data.allparcel}
            })
        }).catch((error)=>{
        console.log(error); 
        });
    },[]);

    console.log(parcels,'a')

    return (
        <Container>
            <ParcelBx>
                { parcels.length?
                    <>
                    <ImageBx>
                        <Image source={{uri:parcels[0].gambar}} />
                    </ImageBx>
                    <DetailBx>
                        <Text fSize='18px' fColor={color.primary} fWeight="bold">
                            {parcels[0].nama.replace(/Parcel /gi,"")}
                        </Text>
                        <Text fSize='15px' fColor={color.dk_secondary} fWeight="bold">
                            Rp {parcels[0].harga},-
                        </Text>
                        <Text fSize='10px' fColor="gray">
                            lorem ipsum lorem ipsum
                        </Text>
                    </DetailBx>
                    </>
                    :
                    <Text>
                        null
                    </Text>
                }
            </ParcelBx>
        </Container>
    );
};
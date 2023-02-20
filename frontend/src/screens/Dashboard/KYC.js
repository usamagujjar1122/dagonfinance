import { autocompleteClasses, Box, CircularProgress, Divider, Stack, Paper } from "@mui/material";
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";
import { TextField, Button, Avatar, Input, Typography, IconButton } from '@mui/material';
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { URL } from '../../url'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch, useSelector } from "react-redux";
import { kyc } from "../../Redux/action/userActions";
const KYC = () => {
    const md = useMediaQuery('(min-width:800px)');
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isLoading = useSelector(state=>state.user.isLaoding)
    const user = useSelector(state=>state.user.user)
    const [catagory, setCatagory] = useState()
    const [value, setValue] = useState()
    const [image, setImage] = useState()
    const [pic, setPic] = useState()
    const [loading, setLoading] = useState(false)
    const [loading2, setLoading2] = useState(false)
    const handleimage = (e) => {
        setLoading(true)
        const file = e.target.files[0];
        const storageRef = ref(storage, "profileimages" + "/" + file.name);
        const upload = uploadBytesResumable(storageRef, file);
        upload.on(
            "state_change",
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                // setProgress(progress);
            },
            (error) => {
                console.log(error);
                setLoading(false)
            },
            async () => {
                try {
                    const url = await getDownloadURL(storageRef);
                    setImage(url);
                    setLoading(false)
                    //   setShoplogoupload(false);
                } catch (error) {
                    console.log(error);
                    setLoading(false)
                }
            }
        );
    };
    const handleimage2 = (e) => {
        setLoading2(true)
        const file = e.target.files[0];
        const storageRef = ref(storage, "profileimages" + "/" + file.name);
        const upload = uploadBytesResumable(storageRef, file);
        upload.on(
            "state_change",
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                // setProgress(progress);
            },
            (error) => {
                console.log(error);
                setLoading2(false)
            },
            async () => {
                try {
                    const url = await getDownloadURL(storageRef);
                    setPic(url);
                    setLoading2(false)
                    //   setShoplogoupload(false);
                } catch (error) {
                    console.log(error);
                    setLoading2(false)
                }
            }
        );
    };
    const handleclick = async () => {
        const formdata = {
            user:user,
            image:image,
            pic:pic,
            catagory:catagory,
        }
        dispatch(kyc(formdata,navigate))
    }
    return (
        <>
            <Stack sx={{ flex: 4, gap: '20px' }}>
                <Stack sx={{ backgroundColor: '#2e394275', padding: '10px', justifyContent: 'space-between', borderRadius: '10px' }}>
                    <Stack sx={{ width: '100%', gap:{xs:'10px',md:'20px'}, alignItems: 'center' }}>
                        <Stack direction={md ? "row" : 'column'} sx={{ flex: 1, width: { xs: '100%', md: '90%' }, gap: { xs: '10px', md: '20px' }, alignItems: { xs: 'start', md: 'center' } }}>
                            <Typography sx={{ width: '30%', color: 'white', fontSize: { xs: "12px", md: '14px' },whiteSpace:'nowrap' }}>Document Type:</Typography>
                            <input type="text" style={{ padding: '10px', border: 'none', outline: 'none', width: '95%', borderRadius: '5px', fontWeight: '600' }} value={catagory} onChange={(e) => { setCatagory(e.target.value) }} />
                        </Stack>
                        <label htmlFor="icon-button-file" style={{ cursor: 'pointer', zIndex: '2' }}>
                            <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                sx={{ display: "none" }}
                                onChange={(e) => handleimage(e)}
                            />
                            <Stack
                                direction="row"
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                                alignItems="center"
                                justifyContent="center"
                                marginTop="20px"

                            >
                                {/* <Button sx={{ color: "white !important", backgroundColor: '#009603', '&:hover': { backgroundColor: '#009603' } }} disabled>{loading ? <CircularProgress sx={{ color: 'white', width: "28px !important", height: '28px !important', padding: "0px 16px" }} /> : <Typography sx={{ textTransform: 'capitalize' }}>SELECT</Typography>}</Button>
                                <Button sx={{ color: "white !important", backgroundColor: '#009603', '&:hover': { backgroundColor: '#009603' }, display: image ? 'flex' : 'none', marginLeft: "20px", padding: "6px", borderRadius: '4px', zIndex: '2 !important' }} onClick={handleclick}>
                                    {loading ?
                                        <CircularProgress sx={{ color: 'white', width: "20px !important", height: '20px !important', padding: "0px 20px" }} />
                                        :
                                        <Typography>UPLOAD</Typography>}
                                </Button> */}

                                <Box sx={{ position: 'relative', border: '1px solid #009603', width: '300px', height: "200px", margin: 'auto', backgroundColor: "#333", position: 'relative' }}>
                                    {!image && !loading &&
                                        <Typography sx={{ fontWeight: 'bold', color: 'white !important', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', display: image ? 'none' : 'flex', textAlign: 'center', whiteSpace: 'nowrap' }}>Upload your document</Typography>
                                    }
                                    {loading &&
                                        <CircularProgress sx={{ color: 'white', position: 'absolute', top: '40%', left: '45%' }} />
                                    }
                                    <img src={image && image} alt="" style={{ maxWidth: '300px', maxHeight: '200px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
                                </Box>
                            </Stack>
                        </label>

                        <label htmlFor="icon-button-file2" style={{ cursor: 'pointer', zIndex: '2' }}>
                            <Input
                                accept="image/*"
                                id="icon-button-file2"
                                type="file"
                                capture="environment"
                                sx={{ display: "none" }}
                                onChange={(e) => handleimage2(e)}
                            />
                            <Stack
                                direction="row"
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                                alignItems="center"
                                justifyContent="center"
                                marginTop="20px"

                            >
                                {/* <Button sx={{ color: "white !important", backgroundColor: '#009603', '&:hover': { backgroundColor: '#009603' } }} disabled>{loading ? <CircularProgress sx={{ color: 'white', width: "28px !important", height: '28px !important', padding: "0px 16px" }} /> : <Typography sx={{ textTransform: 'capitalize' }}>SELECT</Typography>}</Button>
                                <Button sx={{ color: "white !important", backgroundColor: '#009603', '&:hover': { backgroundColor: '#009603' }, display: image ? 'flex' : 'none', marginLeft: "20px", padding: "6px", borderRadius: '4px', zIndex: '2 !important' }} onClick={handleclick}>
                                    {loading ?
                                        <CircularProgress sx={{ color: 'white', width: "20px !important", height: '20px !important', padding: "0px 20px" }} />
                                        :
                                        <Typography>UPLOAD</Typography>}
                                </Button> */}

                                <Box sx={{ position: 'relative', border: '1px solid #009603', width: '300px', height: "200px", margin: 'auto', backgroundColor: "#333", position: 'relative' }}>
                                    {!pic && !loading2 &&
                                        <Typography sx={{ fontWeight: 'bold', color: 'white !important', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', display: pic ? 'none' : 'flex', textAlign: 'center', whiteSpace: 'nowrap' }}>Uplaod your picture</Typography>
                                    }
                                    {loading2 &&
                                        <CircularProgress sx={{ color: 'white', position: 'absolute', top: '40%', left: '45%', transform: 'translate(-50%,-50%)' }} />
                                    }
                                    <img src={pic && pic} alt="" style={{ maxWidth: '300px', maxHeight: '200px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
                                </Box>
                            </Stack>
                        </label>
                        <Button sx={{ marginTop: '10px', background: "linear-gradient(to right,rgba(0,187,170,1),rgba(53,197,85,1))", width: "fit-content", color: 'white', borderRadius: '25px', padding: "10px 20px", '&:hover': { boxShadow: '2px 5px 14px 0px rgba(0,0,0,0.75);', background: "linear-gradient(to left,rgba(0,187,170,1),rgba(53,197,85,1))" }, fontWeight: 'bold' }} onClick={handleclick} disabled={isLoading}>
                            {!isLoading && <Typography sx={{ fontSize: { xs: '12px', md: '16px' } }}>SUBMIT</Typography>}
                            {isLoading && <CircularProgress sx={{ color: 'white', width: "24px !important", height: '24px !important', padding: "0px 8px" }} />}
                        </Button>
                    </Stack>

                </Stack>
            </Stack>
        </>
    );
}

export default KYC;
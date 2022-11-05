import { Box, Typography, Grid, Container, Button } from "@mui/material";
import Navbar from '../components/Layouts/Navbar';
import Analysis from '../images/features/bitcoin.png';
import Engine from '../images/features/network.png';
import Manage from '../images/features/flowers.png';
import { HiArrowRight } from 'react-icons/hi';
import { BsApple } from 'react-icons/bs';
import { FaGooglePlay } from 'react-icons/fa';
import bannerBackgroundImage from '../images/background.png';
import { useNavigate } from 'react-router-dom';
import { SpaRounded } from "@mui/icons-material";

const featuresTabs = [
    {
        title: 'Create account with ease.',
        description: 'Sign up and verify with our easy sign up process and you are good to go.',
        media: Analysis,
        caption: 'Create account'
    },
    {
        title: 'Deposit Funds.',
        description: 'Make a deposit or transfer funds using one of the provided deposit methods to get some funds into your account.',
        media: Engine,
        caption: 'Deposit Funds.'
    },
    {
        title: 'Trade your crypto',
        description: 'Buy, sell, swap send and receive crypto with our 100+ cryptocurrencies available on our platform.',
        media: Manage,
        caption: 'Trade crypto'
    }
];

export default function Home() {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <Container maxWidth={false} disableGutters style={{ backgroundImage: `linear-gradient(to right, rgba(1, 50, 32, 0.99), rgba(1, 50, 32, 0.89)), url(${bannerBackgroundImage})`, backgroundRepeat: 'no-repeat',backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '720px', padding: '240px 14px 0' }}>
                <Container maxWidth="lg" disableGutters style={{color: 'white'}}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={7} lg={7} style={{}}>
                            <div className="mb-4">
                                <Typography variant="h3" style={{ color: 'white' }}>The <span className="font-italic text-dark-goldenrod">Fastest</span> Growing <span className="font-italic text-dark-goldenrod">Crypto</span> Exchange</Typography>
                                <Box component="p">Buy, sell and exchange crypto in different currencies including USD, NGN, EUR, and GBP.</Box>
                            </div>
                            <Box style={{ display: "flex", alignItems: "center" }}>
                                <Button variant="contained" color="primary">
                                {/* <Button size="lg" className="btn-lg-raduis bg-black text-dark-goldenrod border-0 d-flex align-items-center position-relative justify-content-center px-4 py-3 me-3" onClick={() => navigate('/signup')}> */}
                                    <Box component="div" style={{ display: "flex", alignItems: "center" }}>
                                        <span style={{ marginRight: "12px"}}>Get Started</span>
                                        <span>
                                            <HiArrowRight />
                                        </span>
                                    </Box>
                                </Button>
                                <BsApple className="text-white" size={30} />
                                <FaGooglePlay className="text-white" size={30} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={5} lg={5} style={{}}></Grid>
                    </Grid>
                </Container>
            </Container>
        </>
    );
}
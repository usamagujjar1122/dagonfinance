import { Stack, Typography } from "@mui/material";

const AboutUs = () => {
    return (
        <>
            <Stack sx={{ backgroundImage: 'url(img/mainbanner.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', padding: { xs: "38px 20px", md: '38px 50px' } }}>
                <Typography sx={{fontSize:{xs:'18px',md:'32px'}}}>ABOUT <span style={{fontWeight:'bold'}}> DAGON FINANCE</span></Typography>
            </Stack>
            <Stack sx={{ backgroundColor: '#f7f7f7', padding: { xs: '20px 10px', md: "20px 20px" } }}>

                <Typography sx={{ fontWeight: "600", padding: '20px', }}>
                    Now, the global financial market is more than 14 million Bitcoin's in circulation, which are increasingly affecting many economic processes. The Blockchain technology is ideal for ensuring the security of various transactions related to the trading of securities and other financial assets. Different cryptocurrencies have the potential to displace the traditional payment system as they provide faster payment processing and do not require the provision of personal information. The significant factor in favor of cryptocurrencies is the reduction in the cost of such services. For example, the cost of sending $500 by Bank transfer is on average $50 (10% of the transaction amount)
                </Typography>
                <Typography sx={{ fontSize: { xs: "18px", md: "32px", padding: '0px 20px', fontWeight: '600', color: 'gray' } }}>YOUR CRYPTOCURRENCY PARTNER</Typography>
                <Typography sx={{ padding: '20px', }}>
                    The effect of cryptocurrencies on the international market continues to grow, which means the need to create conditions and opportunities to ensure the smooth use of new financial instruments for everyone. This is what the company BLUE-VISTA CAPITALS, LLC, offering its services for various financial transactions with virtual money.
                </Typography>
                <Typography sx={{ padding: '5px 20px', }}>
                    The reality is that the current volatility of cryptocurrency prices is more stimulating for consumers to make speculative investments than to use the same bitcoins as a means of payment. However, we have developed mechanisms that allow you to profitably use the virtual money you have accumulated to pay for all kinds of goods and services. You can pay taxes, buy tickets, buy and sell real estate and cars, carry out life insurance, finance startups, run blockchain projects with the help of cryptocurrencies. All our clients have access to decentralized currency transactions, which is one of the key advantages of digital money over Fiat money.
                </Typography>
                <Typography sx={{ fontSize: { xs: "18px", md: "32px", padding: '0px 20px', fontWeight: '600', color: 'gray' } }}>UNLIMITED HORIZON OF POSSIBILITIES</Typography>
                <Typography sx={{ padding: '20px', }}>

                    Cryptocurrencies are increasingly used to pay for goods and services, in particular, the world's largest companies Microsoft and Starbucks, popular Internet platforms Amazon and eBay actively accept virtual money on a par with Fiat currencies. And the total volume of transactions using bitcoin exceeded similar indicators in the Western Union System, which only confirms the reliability and security of the introduction of new forms of payment.                </Typography>
                <Typography sx={{ padding: '5px 20px', }}>
                    Bitcoins and altcoins (other cryptocurrencies) open access to an unlimited market. More and more companies support the development of new financial technologies. Restaurants and hotels, food delivery services and the world's largest universities accept bitcoins even more willingly than their national currencies. The whole countries are introducing cryptocurrency as a means of payment in almost any field. Japan is one of the first who legalized the payment of any goods and services using bitcoin.                </Typography>
                <Typography sx={{ padding: '20px', }}>

                    By the way, studies of the Blockchain Clover company showed that from 148 billion dollars that were sent from the US by individuals to other countries in 2017, more than 15% of transfers were carried out using cryptocurrency. This means that blockchain technologies have already taken the 4th place at that time among all means of sending money, conceding only to such popular, but more expensive options as online services, money transfer systems and banking services.                </Typography>
                <Typography sx={{ padding: '5px 20px', }}>
                    However, along with many advantages (including low transaction costs), the use of cryptocurrencies as a payment instrument has a number of features that prevent the active spread of this method among corporations and ordinary consumers. For example, it is necessary to develop common protocols of cybersecurity, to regulate the national legislation of different countries, to ensure the legality of the use of cryptocurrencies for any payments.                </Typography>
            </Stack>
        </>
    );
}

export default AboutUs;